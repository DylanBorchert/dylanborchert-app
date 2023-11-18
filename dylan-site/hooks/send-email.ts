"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export type FormData = {
	nameksljf: string;
	emaillkjkl: string;
	messagelkjkl: string;
	name: string;
	email: string;
	message: string;
};

export async function sendEmail(formData: FormData) {
	if (formData.name || formData.email || formData.message) {
		await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
		return { message: "Email sent ;)" };
	}

	const {
		emaillkjkl: email,
		nameksljf: name,
		messagelkjkl: message,
	} = formData;

	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.MY_EMAIL,
		to: process.env.MY_EMAIL,
		bcc: process.env.MY_PERSONAL_EMAIL,
		// cc: email, (uncomment this line if you want to send a copy to the sender)
		subject: `Message from ${name} (${email})`,
		text: message,
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve("Email sent");
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return { message: "Email sent" };
	} catch (err) {
		return { error: err };
	}
}
