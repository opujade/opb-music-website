import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
	const [showNavBar, setShowNavBar] = useState(false);
	const [showHome, setShowHome] = useState(false);
	const [page, setPage] = useState("home");

	useEffect(() => {
		const timerNavBar = setTimeout(() => {
			setShowNavBar(true);
		}, 2000);
		const timerHome = setTimeout(() => {
			setShowHome(true);
		}, 100);

		return () => {
			clearTimeout(timerNavBar);
			clearTimeout(timerHome);
		};
	}, []);

	return (
		<>
			<NavBar showNavBar={showNavBar} setPage={setPage} />
			<Home showHome={showHome} />
		</>
	);
}

export default App;
