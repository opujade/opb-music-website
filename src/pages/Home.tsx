export const Home = ({ showHome }: { showHome: boolean }) => {
	return (
		<>
			<div
				className={`min-h-screen min-w-full bg-main-bg-image ease-in-out bg-no-repeat bg-cover bg-center transition duration-[2000ms] ${
					showHome ? "opacity-100" : "opacity-0"
				}`}
			></div>
		</>
	);
};
