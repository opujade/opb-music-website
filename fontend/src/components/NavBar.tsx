import { MenuListItem } from "./MenuListItem";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { useAppDispatch } from "../app/hooks";
import { setPage } from "../features/slices/pageSlice";

export const NavBar = () => {
	const dispatch = useAppDispatch();

	const navigateHome = () => {
		dispatch(setPage("home"));
	};

	return (
		<>
			<div className="z-50 fixed end-0 flex flex-col h-screen justify-start md:justify-between p-2 md:p-7 animate-slide-in-navbar">
				<div className="flex justify-end items-center gap-3 order-2 md:order-1 md:mt-0 mt-8 flex-wrap">
					<SocialMediaIcon
						link="https://open.spotify.com/intl-es/artist/2AT7fejvAcAuuF4OIo0cFr?si=hRImq0PfRiuErs7dW1UDPQ"
						src="/assets/img/spotify-logo.png"
						altText="Spotify Logo"
					/>
					<SocialMediaIcon
						link="https://www.instagram.com/opujade"
						src="/assets/img/instagram-logo.png"
						altText="Instagram Logo"
					/>
					<SocialMediaIcon
						link="https://sayopb.bandcamp.com/"
						src="/assets/img/bandcamp-logo.png"
						altText="Bandcamp Logo"
					/>
					<SocialMediaIcon
						link="https://www.youtube.com/@sayopb"
						src="/assets/img/youtube-logo.png"
						altText="Youtube Logo"
					/>
				</div>
				<nav className="order-1 z-50 md:order-2 flex flex-col">
					<MenuListItem option={"music"} />
					<MenuListItem option={"video"} />
					<MenuListItem option={"photo"} />
					<MenuListItem option={"tour"} />
				</nav>
				<div className="order-3"></div>
			</div>
			<div
				className={`z-50 fixed start-0 flex flex-col h-screen justify-start md:justify-center p-2 md:p-7 animate-slide-in-logo`}
			>
				<img
					src="/assets/img/opb-logo.png"
					alt="OPB Logo"
					className="w-20 md:w-52 h-auto cursor-pointer hover:drop-shadow-yellow duration-300"
					onClick={navigateHome}
				></img>
			</div>
		</>
	);
};
