import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "76a29dadafb3e7",
    pass: "1dffada353db4e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <feedget@feedget.com>',
      to: 'Andrei Figueiredo <js@gmail.com>',
      subject,
      html: body
    });
  };
}