export const YoutubeEmbed = ({
	link,
	title,
}: {
	link: string;
	title: string;
}) => (
	<>
		<h3 className="p-5 font-century-gothic font-boldfont-century-gothic font-bold uppercase text-white tracking-widest">
			{title}
		</h3>
		<iframe
			width="560"
			height="315"
			src={link}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	</>
);
