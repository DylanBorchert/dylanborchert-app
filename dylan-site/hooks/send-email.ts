export type FormData = {
	nameksljf: string;
	emaillkjkl: string;
	messagelkjkl: string;
	name: string;
	email: string;
	message: string;
};

export async function sendEmail(data: FormData) {
	const apiEndpoint = "/api/email";

	if (!data.name && !data.email && !data.message) {
		fetch(apiEndpoint, {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((response) => {
				alert(response.message);
			})
			.catch((err) => {
				alert(err);
			});
	} else {
		alert("Nice try, bot!");
	}
}
