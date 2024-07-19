const Photo = () => {
	const images = [
		{
			src: "../public/assets/img/photos/photo1.JPG",
		},
		{
			src: "../public/assets/img/photos/photo2.JPG",
		},
		{
			src: "../public/assets/img/photos/photo3.JPG",
		},
		{
			src: "../public/assets/img/photos/photo4.JPG",
		},
		{
			src: "../public/assets/img/photos/photo5.JPG",
		},
		{
			src: "../public/assets/img/photos/photo6.JPG",
		},
		{
			src: "../public/assets/img/photos/photo7.JPG",
		},
		{
			src: "../public/assets/img/photos/photo8.JPG",
		},
	];

	return (
		<div className="w-screen h-screen flex-shrink-0 flex flex-col overflow-auto">
			{images.map((img, index) => {
				return (
					<img
						key={index}
						src={img.src}
						alt="OPB Singing"
						className="object-cover w-full h-full"
					/>
				);
			})}
		</div>
	);
};

export default Photo;
