import './App.css';
import Title from './components/Title';
import Timer from './components/Timer';
import RandomPlanet from './components/RandomPlanet';
import Picture from './components/Picture';
// import logo from './logo.svg';
import { Component } from "react";

class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: null,
	};
	toggleRandomPlanet = () => {
		this.setState((state) => {
		  return {
			showRandomPlanet: !state.showRandomPlanet,
		  };
		});
	};
  componentDidMount() {
		// const img = document.getElementById('img');
		// alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
		if (window.webkit) {
			window.webkit.messageHandlers.jsHandler.postMessage("Did finished")
		} else {
			console.log("webkit or something undefined")
		}

	}
	render() {
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div>
				<Title />
		
        		<Timer />
        		{planet}

       			<button
          			className="toggle-planet btn btn-warning btn-lg"
          			onClick={this.toggleRandomPlanet}
        		>
        		Toggle Random Planet
        		</button>
				<hr/>
				<Picture />
			</div>
		)
	}
}

export default App;

