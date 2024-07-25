import { useEffect, useState } from "react";

const Photo = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch("/api/images")
			.then((response) => response.json())
			.then((data) => {
				setImages(data);
			})
			.catch((error) => console.error("Error fetching images:", error));
	}, []);

	return (
		<div className="w-screen h-screen flex-shrink-0 flex flex-col overflow-auto">
			{images.map((img, index) => {
				return (
					<img
						key={index}
						src={`http://localhost:3001/images/${img}`}
						alt={`OPB Image ${index}`}
						className="object-cover w-full h-full"
					/>
				);
			})}
		</div>
	);
};

export default Photo;
