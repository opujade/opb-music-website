import { useEffect, useState } from "react";

export const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 1000);

		return () => clearTimeout(timer);
	});
	return (
		<>
			<div
				className={`fixed end-0 flex flex-col h-screen justify-start md:justify-between font-century-gothic font-bold uppercase text-white tracking-widest text-end p-2 md:p-7 w-48 ${
					isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
				} ease-in-out duration-1000`}
			>
				<div className="flex justify-end items-center gap-3 order-2 md:order-1 md:mt-0 mt-8">
					<a
						href="https://open.spotify.com/intl-es/artist/2AT7fejvAcAuuF4OIo0cFr?si=hRImq0PfRiuErs7dW1UDPQ"
						target="_blank"
					>
						<img
							src="src/assets/img/spotify-logo.png"
							alt="Instagram Logo"
							className="image-full h-5 hover:scale-125 duration-300"
						/>
					</a>
					<a href="https://www.instagram.com/opujade" target="_blank">
						<img
							src="src/assets/img/instagram-logo.png"
							alt="Instagram Logo"
							className="image-full h-5 hover:scale-125 duration-300"
						/>
					</a>
					<a href="https://sayopb.bandcamp.com/" target="_blank">
						<img
							src="src/assets/img/bandcamp-logo.png"
							alt="Instagram Logo"
							className="image-full h-5 hover:scale-125 duration-300"
						/>
					</a>
					<a href="https://www.youtube.com/@sayopb" target="_blank">
						<img
							src="src/assets/img/youtube-logo.png"
							alt="Instagram Logo"
							className="image-full h-5 hover:scale-125 duration-300"
						/>
					</a>
				</div>
				<ul className="order-1 md:order-2">
					<li className="hover:text-main-yellow hover:drop-shadow-yellow text-xl cursor-pointer duration-300 pb-2">
						Music
					</li>
					<li className="hover:text-main-yellow hover:drop-shadow-yellow text-xl cursor-pointer duration-300 py-2">
						Video
					</li>
					<li className="hover:text-main-yellow hover:drop-shadow-yellow text-xl cursor-pointer duration-300 py-2">
						Photo
					</li>
					<li className="hover:text-main-yellow hover:drop-shadow-yellow text-xl cursor-pointer duration-300 py-2">
						Tour
					</li>
				</ul>
				<div className="order-3 fixed bottom-0 md:relative md:p-0 p-7">
					<p className="text-xxs text-gray-300">© 2024 O.P.B.</p>
					<p className="text-xxs text-gray-300">
						Developed by{" "}
						<a
							className="hover:text-white duration-300"
							href="https://www.linkedin.com/in/oriol-pujade-busqueta-3828a7271/"
						>
							Oriol Pujade
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
