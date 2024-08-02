"use client";
import { FaRegCopy } from "react-icons/fa6";
import { useToast } from "./ui/use-toast";

const ClipboardButton = ({ codeString }: { codeString: string }) => {
	const { toast } = useToast();

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(
			() =>
				toast({
					title: "Copied to clipboard",
				}),
			(err) =>
				toast({
					title: "Failed to copy to clipboard",
					description: err.message,
				})
		);
	};
	return (
		<button
			className="flex items-center justify-center absolute top-4 right-4 transform translate-x-4 -translate-y-4 bg-gray-700 text-white p-2 rounded h-14 lg:h-[70px] rounded-tl-none rounded-bl-none hover:bg-gray-600"
			onClick={() => copyToClipboard(codeString)}
		>
			<div aria-hidden="true">
				<FaRegCopy className="h-5 w-5" />
			</div>
		</button>
	);
};

export default ClipboardButton;
