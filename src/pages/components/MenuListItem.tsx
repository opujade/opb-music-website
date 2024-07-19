export const MenuListItem = ({ option }: { option: string }) => {
	return (
		<button className="font-century-gothic font-bold uppercase text-white tracking-widest text-end hover:text-primary hover:-translate-x-10 hover:drop-shadow-yellow text-xl cursor-pointer duration-500 pb-2">
			{option}
		</button>
	);
};
