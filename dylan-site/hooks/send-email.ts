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
	if (process.env.ENABLE_EMAIL === "false") {
		return { message: "Email under maintance" };
	}

	var {
		emaillkjkl: email,
		nameksljf: name,
		messagelkjkl: message,
		name: HoneyName,
		email: HoneyEmail,
		message: HoneyMessage,
	} = formData;

	let isSpam = false;

	if (HoneyName || HoneyEmail || HoneyMessage) {
		if (process.env.SEND_SPAM === "false") {
			// if you want to test the email functionality, set SEND_SPAM to true
			await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
			return { message: "Email sent ;)" };
		}
		isSpam = true;
	}

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
		text:
			process.env.SEND_SPAM === "true" && isSpam // if SEND_SPAM is true, send a copy of the message to the email provided in the form
				? `Spam from ${HoneyName} (${HoneyEmail})\nHoney Message:\n${HoneyMessage}\nReal Message:\n${message}`
				: message,
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
