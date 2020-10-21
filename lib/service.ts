import { map } from "./provider.map";
import * as nodemailer from "nodemailer";
import { Injectable, Inject } from "@nestjs/common";
import { MailmanOptions, MailData } from "./interfaces";
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";
import { MAILMAN_QUEUE, SEND_MAIL } from "./constants";
import { MailMessage } from "./message";

@Injectable()
export class MailmanService {
  private static options: MailmanOptions;
  private static transporter: any;
  private static queueProvider: any;

  constructor(
    @Inject(map.MAILABLE_OPTIONS) options: MailmanOptions,
    @InjectQueue(MAILMAN_QUEUE) queueProvider: Queue
  ) {
    MailmanService.options = options;
    MailmanService.queueProvider = queueProvider;
    MailmanService.transporter = nodemailer.createTransport(
      {
        host: options.host,
        port: +options.port,
        auth: { user: options.username, pass: options.password },
      },
      { from: options.from }
    );
  }

  static getConfig(): MailmanOptions {
    return MailmanService.options;
  }

  static queue(options: { receipents: string | string[]; mail: MailMessage }) {
    const mailData: MailData = options.mail.getMailData();
    MailmanService.queueProvider.add(SEND_MAIL, {
      html: mailData.html,
      to: options.receipents,
      subject: mailData.subject,
    });
  }

  static async send(options: {
    receipents: string | string[];
    mail: MailMessage;
  }) {
    const mailData: MailData = options.mail.getMailData();
    await MailmanService.transporter.sendMail({
      html: mailData.html,
      to: options.receipents,
      subject: mailData.subject,
    });
  }
}
