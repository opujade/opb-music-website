import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Music } from "./pages/Music";
import { Video } from "./pages/Video";

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<Music />
			<Video />
			<Footer />
		</>
	);
}

export default App;
