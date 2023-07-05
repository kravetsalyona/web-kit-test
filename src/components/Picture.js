import { Component} from "react"
import logo from '../logo.svg';


export default class Picture extends Component {
    
    componentDidMount(){
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
        alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
        
        window.addEventListener('load', this.loader)
        
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.loader);
      }
    loader () {
        const img = document.getElementById('img');

        // console.log('Страница загружена');
        // const size = `Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`;
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Страница загружена. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
        alert(`Страница загружена. Image size: ${img.offsetWidth}x${img.offsetHeight}`);
      }

    render() {
    return (<>
                {/* <p>{size}</p> */}
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    }
}