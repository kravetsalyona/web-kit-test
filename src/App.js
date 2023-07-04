import './App.css';
import Title from './components/Title';
import Timer from './components/Timer';
import logo from './logo.svg';
import { Component } from "react";

class App extends Component {
  componentDidMount() {
		if (window.webkit) {
			window.webkit.messageHandlers.jsHandler.postMessage("Did finished")
		} else {
			console.log("webkit or something undefined")
		}
	}
	render() {
		return (
			<div>
				<Title />
        <img id="img" src={logo} className="App-logo" alt="logo" />
        <Timer />
			</div>
		)
	}
}

export default App;

