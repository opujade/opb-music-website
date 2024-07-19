export const YoutubeEmbed = ({
	link,
	title,
}: {
	link: string;
	title: string;
}) => (
	<>
		<h3 className=" md:p-5 font-century-gothic font-boldfont-century-gothic font-bold uppercase text-white tracking-widest">
			{title}
		</h3>
		<iframe
			className="w-full md:w-1/2 aspect-video"
			src={link}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	</>
);
