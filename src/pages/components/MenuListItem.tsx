export const MenuListItem = ({ option }: { option: string }) => {
	return (
		<li className="hover:text-primary hover:-translate-x-10 hover:drop-shadow-yellow text-xl cursor-pointer duration-500 pb-2">
			{option}
		</li>
	);
};
