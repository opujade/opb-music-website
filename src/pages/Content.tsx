import { lazy, Suspense } from "react";
import { useAppSelector } from "../app/hooks";
import { Music } from "./Music";
// import { Photo } from "./Photo";
import { Tour } from "./Tour";
import { Video } from "./Video";
const Photo = lazy(() => import("./Photo"));

export const Content = () => {
	const page = useAppSelector((state) => state.page.value);

	return (
		<div
			className={`h-screen flex w-[400%] duration-1000 ${
				page === "music" && "translate-x-0"
			} ${page === "video" && "-translate-x-1/4"} ${
				page === "photo" && "-translate-x-2/4"
			} ${page === "tour" && "-translate-x-3/4"}`}
		>
			<Music />
			<Video />
			<Suspense fallback={<div>Loading</div>}>
				<Photo />
			</Suspense>
			<Tour />
		</div>
	);
};
