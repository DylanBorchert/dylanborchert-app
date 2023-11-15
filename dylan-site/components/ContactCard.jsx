import FlipText from "@/components/animated-components/FlipText";
import SlideText from "@/components/animated-components/SlideText";

function ContactCard() {
	const copyToClipboard = (str) => {
		//add text to clipboard
		navigator.clipboard.writeText("dborc610@mtroyal.ca");
		alert("Email Copied to Clipboard");
	};

	function downloadFile(url, fileName) {
		fetch(url)
			.then((res) => res.blob())
			.then((res) => {
				const aElement = document.createElement("a");
				aElement.setAttribute("download", fileName);
				const href = URL.createObjectURL(res);
				aElement.href = href;
				aElement.setAttribute('href', href);
				aElement.setAttribute("target", "_blank");
				aElement.click();
				URL.revokeObjectURL(href);
			});
	}

	const downloadResume = () => {
		downloadFile(
			"https://strapi.phantommedia.online/uploads/resume_402321f841.pdf",
			"Dylan_Borchert_Resume.pdf"
		);
	};

	return (
		<div className="w-full sm:col-span-2 sm:mt-2 pt-2 border-t-2 border-gray-800 flex sm:flex-row justify-between flex-col">
			<div className="text-white transition duration-150 ease-out hover:ease-in shadow-md flex flex-row-reverse mr-auto mb-1 m-0">

				<a
					href="https://strapi.phantommedia.online/uploads/resume_402321f841.pdf"
					target="_blank"
					className="flex"
				>
					<div className="flex justify-between">
						<p className="text-sm pl-5 text-white text-md my-auto hover:text-primary-1">
							view resume
						</p>
					</div>
				</a>
				<svg
					onClick={downloadResume}
					className="w-10 h-10 fill-current my-auto text-white hover:text-primary-1 transition duration-150 ease-out hover:ease-in rounded-md p-1 ml-1 hover:cursor-pointer hover:shadow-md border border-spacing-3 border-gray-800 hover:border-primary-1"
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 1024 1024"
				>
					<path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
				</svg>
			</div>
			<div className="text-white group hover:text-primary-1 transition duration-150 ease-out hover:ease-in shadow-md flex sm:flex-row flex-row-reverse mr-auto mt-1 sm:m-0">
				<a
					href="mailto: dborc610@mtroyal.ca"
					target="_blank"
					className="flex"
				>
					<div className="flex justify-between">
						<p className="text-sm px-5 text-white text-md font-semibold my-auto group-hover:text-primary-1">
							dborc610@mtroyal.ca
						</p>
					</div>
				</a>
				<svg
					onClick={copyToClipboard}
					className="w-10 h-10 fill-current my-auto text-white hover:text-primary-1 transition duration-150 ease-out hover:ease-in rounded-md p-1 ml-1 hover:cursor-pointer hover:shadow-md border border-spacing-3 border-gray-800 hover:border-primary-1"
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
				>
					<g
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					>
						<path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" />
						<path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
					</g>
				</svg>
			</div>
		</div>
	);
}

export default ContactCard;
