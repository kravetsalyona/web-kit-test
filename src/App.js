import './App.css';
import Title from './components/Title';
// import Pictures from './components/Pictures';
// import Timer from './components/Timer';
// import RandomPlanet from './components/RandomPlanet';
// import Picture from './components/Picture';
// import Blocks from './components/Blocks';
import { Component } from "react";

class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showRandomPlanet: true,
// 			selectedPerson: null,
// 			numberOfGuests: 2,
// 		};
	
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	  }
// 	toggleRandomPlanet = () => {
// 		this.setState((state) => {
// 		  return {
// 			showRandomPlanet: !state.showRandomPlanet,
// 		  };
// 		});
// 	};
//   componentDidMount() {
// 		// const img = document.getElementById('img');
// 		// alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
// 		if (window.webkit) {
// 			window.webkit.messageHandlers.jsHandler.postMessage("Did finish")
// 		} else {
// 			console.log("webkit or something undefined")
// 		}

// 	}
// 	handleInputChange(event) {
// 		// const target = event.target;
		
		
// 	  }
	render() {
		// const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div>
				<Title />
				{/* <Pictures />
				<label>
					Количество гостей:
					<input
						name="numberOfGuests"
						type="number"
						inputmode="numeric"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>
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
				<Blocks /> */}
			</div>
		)
	}
}

export default App;

