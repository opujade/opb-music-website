import { useAppSelector } from "../app/hooks";

export const Music = () => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<div
			className={`translate-y-full z-20 fixed min-h-screen min-w-full bg-image-2 bg-no-repeat bg-cover bg-center
				${
					page === "music"
						? "animate-slide-in-page"
						: page === "home"
						? "animate-slide-out-page"
						: ""
				}
				`}
		></div>
	);
};