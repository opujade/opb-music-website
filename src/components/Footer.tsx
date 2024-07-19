export const Footer = () => {
	return (
		<div className="z-50 fixed bottom-0 text-center md:text-end w-full mx-auto p-7 font-century-gothic font-bold uppercase text-white tracking-widest">
			<p className="text-xxs text-gray-300">© 2024 O.P.B.</p>
			<p className="text-xxs text-gray-300">Developed by </p>
			<p className="text-xxs text-gray-300">
				<a
					className="hover:text-primary duration-300"
					href="https://www.linkedin.com/in/oriol-pujade-busqueta-3828a7271/"
					target="_blank"
				>
					Oriol Pujade
				</a>{" "}
			</p>
		</div>
	);
};
