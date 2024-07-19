import { useAppSelector } from "../app/hooks";

export const Home = ({ showHome }: { showHome: boolean }) => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<>
			<div
				className={`fixed min-h-screen min-w-full bg-main-bg-image ease-in-out bg-no-repeat bg-cover bg-center transition duration-[1500ms] ${
					showHome ? "opacity-100" : "opacity-0"
				}
				${page === "home" ? "translate-y-0 z-10" : "-translate-y-full z-0"}
				`}
			></div>
		</>
	);
};
