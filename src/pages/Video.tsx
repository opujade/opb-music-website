import { YoutubeEmbed } from "../components/YoutubeEmbed";

export const Video = () => {
	const youtubeVideos = [
		{
			link: "https://www.youtube.com/embed/prgMmTwoezk?si=Fdl5GJDGSwYgVALn",
			title: "El Que Vindrà Després",
		},
		{
			link: "https://www.youtube.com/embed/KUiA-uz01MU?si=BWmmoFn5wqSnSun2",
			title: "Des de casa amb ned lud",
		},
		{
			link: "https://www.youtube-nocookie.com/embed/pvrR-bUp8Kg?si=X0XgjLWVLLaBlE_v&amp;controls=0",
			title: "el millor que ens ha passat mai",
		},
	];
	return (
		<div className="w-1/4 h-full flex-shrink-0 bg-image-3 bg-cover bg-no-repeat overflow-auto">
			<div className="w-full min-h-screen py-16 flex flex-col mx-auto justify-center items-center">
				{youtubeVideos.map((info, index) => {
					return (
						<YoutubeEmbed key={index} link={info.link} title={info.title} />
					);
				})}
			</div>
		</div>
	);
};
