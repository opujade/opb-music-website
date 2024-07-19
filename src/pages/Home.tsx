import { useAppSelector } from "../app/hooks";

export const Home = () => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<div className="w-full h-screen">
			<img
				src="src\assets\img\bg-image-1.JPG"
				alt="OPB Singing"
				className="object-cover w-full h-full"
			/>
		</div>
	);
};
