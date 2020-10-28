export const GENERIC_VIEW = `
{{#*inline "greetingPartial"}}
<tr>
<td align="left" style=
"font-size:0px;padding:8px 24px;word-break:break-word;">
  <div style=
  "font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#0D47A1;">
  <h1>{{text}}</h1>
  </div>
</td>
</tr>
{{/inline}}

{{#*inline "linePartial"}}
<tr>
<td align="left" style=
"font-size:0px;padding:8px 24px;word-break:break-word;">
  <div style=
  "font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;">
  <p>{{ text }}</p>
  </div>
</td>
</tr>
{{/inline}}

{{#*inline "actionPartial"}}
<tr>
    <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 24px;word-break:break-word;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
            <tr><td align="center" bgcolor="#283593" role="presentation" style="border:none;border-radius:4px;cursor:auto;mso-padding-alt:10px 24px;background:#0D47A1;" valign="middle">
                <a href={{link}} style="display:inline-block;background:#0D47A1;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 24px;mso-padding-alt:0px;border-radius:4px;" target="_blank">
                    {{text}}
                </a>
            </td></tr>
        </table>
    </td>
</tr>
{{/inline}}

{{#*inline "actionFallback"}}
<div style="background:#f3f3f3;background-color:#f3f3f3;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F3F3F3;background-color:#F3F3F3;width:100%;">
    <tbody>
        <tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
        <!--[if mso | IE]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr><td class="" style="vertical-align:top;width:600px;">
                    <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr><td align="left" style="font-size:0px;padding:10px 24px;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:left;color:#000000;">
                                    <p>If you are having trouble clicking the button, copy paste the
                                        url: <a href={{link}} style="color: #0D47A1;">{{link}}</a>
                                    </p>
                                </div>
                            </td></tr>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                </td></tr>
            </table>
        <![endif]-->
        </td></tr>
    </tbody>
</table>
</div>
{{/inline}}

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta name="generator" content=
  "HTML Tidy for Linux (vers 25 March 2009), see www.w3.org" />

  <title>Hello MJML</title><!--[if !mso]><!== -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" /><!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style type="text/css">
/*<![CDATA[*/
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 8px 0;
    }
  /*]]>*/
  </style><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel=
  "stylesheet" type="text/css" />
  <style type="text/css">
/*<![CDATA[*/
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  /*]]>*/
  </style><!--<![endif]-->

  <style type="text/css">
/*<![CDATA[*/
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  /*]]>*/
  </style>
</head>

<body>
  <div style="">
    <!--[if mso | IE]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
            <div style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FBFBFB;background-color:#FBFBFB;width:100%;">
                    <tbody>
                        <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
            <td class="" style="vertical-align:top;width:600px;">
            <![endif]-->

              <div class="mj-column-per-100 mj-outlook-group-fix" style=
              "font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="vertical-align:top;" width="100%">

                {{#each genericFields}}
                {{#if line}}
                {{> linePartial text = line }}
                {{else if greeting}}
                {{> greetingPartial text = greeting }}
                {{else if action }}
                {{#with action}}
                {{> actionPartial text = text link = link }}
                {{/with}}
                {{/if}}
                {{/each}}
                </table>
              </div><!--[if mso | IE]>
            </td>
          </tr>
          </table>
        <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
            {{#each genericFields}}
            {{#if action}}
            {{#with action}}
            {{> actionFallback link = link }}
            {{/with}}
            {{/if}}
            {{/each}}
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>
</html>
`;
