import { useAppSelector } from "../app/hooks";

export const Home = () => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<div
			className={`fixed z-10 min-h-screen min-w-full bg-image-1 bg-no-repeat bg-cover bg-center animate-opacity-animation
				${
					page === "home"
						? "animate-slide-in-home"
						: page === ""
						? ""
						: "animate-slide-out-home"
				}
				`}
		></div>
	);
};
