import { Component} from "react"
import logo from '../logo.svg';


export default class Picture extends Component {
    
    componentDidMount(){
        this.loaderBefore()
        window.addEventListener('load', this.loader) 
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.loader);
    }
    loaderBefore () {
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
      }
    loader () {
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
      }

    render() {
    return (<>
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    }
}