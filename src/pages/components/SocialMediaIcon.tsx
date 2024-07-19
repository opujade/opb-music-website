export const SocialMediaIcon = ({
	link,
	src,
	altText,
}: {
	link: string;
	src: string;
	altText: string;
}) => {
	return (
		<a href={link} target="_blank">
			<img
				src={src}
				alt={altText}
				className="image-full h-5 w-auto hover:scale-125 duration-300"
			/>
		</a>
	);
};
