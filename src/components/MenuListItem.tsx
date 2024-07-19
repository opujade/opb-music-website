import { useAppDispatch } from "../app/hooks";
import { setPage } from "../features/slices/pageSlice";

export const MenuListItem = ({ option }: { option: string }) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setPage(option));
	};

	return (
		<button
			className="font-century-gothic font-bold uppercase text-white tracking-widest text-end hover:text-primary md:hover:-translate-x-10 hover:drop-shadow-yellow text-xl cursor-pointer duration-500 pb-2"
			onClick={handleClick}
		>
			{option}
		</button>
	);
};
