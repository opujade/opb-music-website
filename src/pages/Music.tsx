import { useAppSelector } from "../app/hooks";

export const Music = () => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<>
			<div
				className={`fixed z-1 min-h-screen min-w-full bg-main-bg-image ease-in-out bg-no-repeat bg-cover bg-center transition duration-[1500ms]
				${page === "music" ? "translate-y-0" : "translate-y-full"}
				`}
			>
				<h2>Music</h2>
			</div>
		</>
	);
};
