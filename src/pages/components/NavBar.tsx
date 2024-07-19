import { MenuListItem } from "./MenuListItem";
import { SocialMediaIcon } from "./SocialMediaIcon";

export const NavBar = ({ showNavBar }: { showNavBar: boolean }) => {
	return (
		<>
			<div
				className={`fixed end-0 flex flex-col h-screen justify-start md:justify-between font-century-gothic font-bold uppercase text-white tracking-widest text-end p-2 md:p-7 ${
					showNavBar ? "translate-x-0" : "translate-x-full"
				} ease-in-out duration-[2000ms]`}
			>
				<div className="flex justify-end items-center gap-3 order-2 md:order-1 md:mt-0 mt-8 flex-wrap">
					<SocialMediaIcon
						link="https://open.spotify.com/intl-es/artist/2AT7fejvAcAuuF4OIo0cFr?si=hRImq0PfRiuErs7dW1UDPQ"
						src="src/assets/img/spotify-logo.png"
						altText="Spotify Logo"
					/>
					<SocialMediaIcon
						link="https://www.instagram.com/opujade"
						src="src/assets/img/instagram-logo.png"
						altText="Instagram Logo"
					/>
					<SocialMediaIcon
						link="https://sayopb.bandcamp.com/"
						src="src/assets/img/bandcamp-logo.png"
						altText="Bandcamp Logo"
					/>
					<SocialMediaIcon
						link="https://www.youtube.com/@sayopb"
						src="src/assets/img/youtube-logo.png"
						altText="Youtube Logo"
					/>
				</div>
				<ul className="order-1 md:order-2">
					<MenuListItem option={"Music"} />
					<MenuListItem option={"Video"} />
					<MenuListItem option={"Photo"} />
					<MenuListItem option={"Tour"} />
				</ul>
				<div className="order-3 fixed bottom-0 md:relative md:p-0 p-7">
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
			</div>
			<div
				className={`fixed start-0 flex flex-col h-screen justify-start md:justify-center p-2 md:p-7 ${
					showNavBar ? "translate-x-0" : "-translate-x-full"
				} ease-in-out duration-[2000ms]`}
			>
				<img
					src="src\assets\img\opb-logo.png"
					alt="OPB Logo"
					className="w-20 md:w-52 h-auto cursor-pointer hover:drop-shadow-yellow duration-300"
				></img>
			</div>
		</>
	);
};
