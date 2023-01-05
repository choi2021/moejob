export function html({
  url,
  host,
  email,
}: {
  url: string;
  host: string;
  email: string;
}) {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`;
  const escapedHost = `${host.replace(/\./g, '&#8203;.')}`;

  return `
    <div style="max-width: 700px; text-align: center; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
    
    <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Moejob.</h2>
    
    <h3 style="text-align: center; text-transform: uppercase;">${escapedHost}</h3>
    
    <p style="text-align: center">모으잡에 방문해주셔서 감사합니다.
      접속하신 이메일은 <strong>${escapedEmail}</strong>입니다.
    </p>
    
    <a href=${url} target="_blank" style="background: crimson; text-decoration: none; color: white; padding: 1rem 3rem; margin: 10px 0; display: inline-block;">Sign in with Email</a>
    <p>버튼이 작동하지 않으면, 아래 url을 이용해 접속해주세요</p>
    <div>${url}</div>
    </div>
  `;
}

export function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
