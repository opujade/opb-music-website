import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Content } from "./pages/Content";
import { Home } from "./pages/Home";
import { useAppSelector } from "./app/hooks";

function App() {
	const page = useAppSelector((state) => state.page.value);

	return (
		<>
			<NavBar />
			<div
				className={`h-[200%] w-full flex flex-col duration-[2000ms] ease-in-out ${
					page === "home" ? "translate-y-0" : "-translate-y-1/2"
				}`}
			>
				<Home />
				<Content />
			</div>
			<Footer />
		</>
	);
}

export default App;
