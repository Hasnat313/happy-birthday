import logo from "./logo.svg";
import "./App.css";
import image from "../src/ali.png";
function App() {
	const styles = {
		backgroundColor: "#f0e68c",
		textAlign: "center",
		padding: "30px",
		fontFamily: "Arial, sans-serif",
		color: "#8b0000",
		fontSize: "24px",
	};
	return (
		<div style={{ backgroundColor: "#f0e68c", textAlign: "center", padding: "50px" }}>
			<h1 style={{ color: "#8b0000", fontSize: "50px", fontFamily: "Arial, sans-serif" }}>
				Happy Birthday Ali Hassan!🍪🍰🍦
			</h1>
			<img
				src={image}
				alt="Birthday cake"
				style={{ width: "250px", animation: "spin 2s linear infinite" }}
			/>
			<p style={styles}>
				You're such a generous, kind, fabulous person and I'm so lucky to have you as a friend.
				Wishing you an extra special birthday and best wishes for the year ahead. 🍰 | 🍰🍰🍰 |
				🥛🍪🍰🍦
			</p>
		</div>
	);
}

export default App;
