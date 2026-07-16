const ACCENT = "rgb(216, 48, 0)";
const BACKGROUND = "#000000";
const BORDER = "rgb(38, 38, 38)";
const TEXT_PRIMARY = "#ffffff";
const TEXT_MUTED = "rgb(134, 134, 134)";
const SITE_URL = "https://anesundoro.me";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Email clients don't load web fonts or respect most modern CSS, so this is a
// table-based layout with inline styles only — the uppercase/letter-spacing
// treatment approximates the site's Bebas Neue headings without depending on
// a font that won't render in any inbox.
function renderShell({ preheader, bodyHtml }: { preheader: string; bodyHtml: string }) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Anesu Ndoro</title>
  </head>
  <body style="margin:0; padding:0; background-color:${BACKGROUND}; font-family:Helvetica, Arial, sans-serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:${BACKGROUND};">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="480" cellPadding="0" cellSpacing="0" style="width:480px; max-width:100%; border:1px solid ${BORDER}; border-top:3px solid ${ACCENT}; border-radius:10px; background-color:${BACKGROUND};">
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <div style="font-size:20px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:${TEXT_PRIMARY};">
                  Anesu Ndoro
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 32px 32px; color:${TEXT_MUTED}; font-size:15px; line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px; border-top:1px solid ${BORDER};">
                <a href="${SITE_URL}" style="color:${TEXT_MUTED}; font-size:12px; text-decoration:none;">${SITE_URL.replace("https://", "")}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function ownerNotificationEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const html = renderShell({
    preheader: `New message from ${name}`,
    bodyHtml: `
      <p style="margin:0 0 20px 0; color:${TEXT_PRIMARY}; font-size:16px;">New portfolio contact</p>
      <table role="presentation" cellPadding="0" cellSpacing="0" style="margin-bottom:20px;">
        <tr>
          <td style="padding:0 0 6px 0; color:${TEXT_MUTED}; font-size:13px; text-transform:uppercase; letter-spacing:0.5px;">From</td>
        </tr>
        <tr>
          <td style="padding:0 0 20px 0; color:${TEXT_PRIMARY}; font-size:15px;">
            ${safeName} &lt;<a href="mailto:${safeEmail}" style="color:${ACCENT}; text-decoration:none;">${safeEmail}</a>&gt;
          </td>
        </tr>
      </table>
      <div style="border:1px solid ${BORDER}; border-radius:8px; padding:16px 20px; color:${TEXT_PRIMARY}; font-size:15px; line-height:1.6;">
        ${safeMessage}
      </div>
    `,
  });

  const text = `New portfolio contact\n\nFrom: ${name} <${email}>\n\n${message}`;

  return { subject: `New portfolio contact from ${name}`, html, text };
}

export function senderConfirmationEmail({ name }: { name: string }) {
  const safeName = escapeHtml(name);

  const html = renderShell({
    preheader: "I've received your message and will get back to you soon.",
    bodyHtml: `
      <p style="margin:0 0 16px 0; color:${TEXT_PRIMARY}; font-size:16px;">Hi ${safeName},</p>
      <p style="margin:0 0 16px 0;">
        Thanks for reaching out — I've received your message and will get back to you soon.
      </p>
      <p style="margin:0;">
        — Anesu
      </p>
    `,
  });

  const text = `Hi ${name},\n\nThanks for reaching out — I've received your message and will get back to you soon.\n\n— Anesu`;

  return { subject: "I've received your message", html, text };
}
