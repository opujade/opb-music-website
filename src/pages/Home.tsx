export const Home = () => {
	return (
		<>
			<div className="min-h-screen min-w-full bg-main-bg-image bg-no-repeat bg-cover bg-center">
				<div className="duration-300 ease-in-out delay-0 transition-all flex h-screen items-start md:items-center p-4">
					<img
						src="src\assets\img\opb-logo.png"
						alt="OPB Logo"
						className="w-20 md:w-52 h-auto cursor-pointer hover:drop-shadow-yellow duration-300"
					></img>
				</div>
			</div>
		</>
	);
};
