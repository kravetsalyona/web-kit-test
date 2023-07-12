import { Component} from "react"
import logo from '../logo.svg';

// DOMContentLoaded
export default class Picture extends Component {
    
    // componentDidMount(){
    //     this.loaderBefore()
    //     console.log(document.readyState)
    //     if (document.readyState === 'loading') {
    //         document.addEventListener('DOMContentLoaded', this.loader)
    //     }
    //     // else {
    //     //     this.loader()
    //     // }
    // }
    // componentWillUnmount() {
    //     document.removeEventListener('DOMContentLoaded', this.loader);
    // }
    componentDidMount(){
        this.loaderBefore()
        window.addEventListener('load', this.loader)
        console.log(window.data)
        window.data = window.data
        
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.loader);
    }
    loaderBefore () {
        const img = document.getElementById('img');
        console.log("function loaderBefore, picture with nosize")
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
      }
    loader () {
        const img = document.getElementById('img');
        alert("function loader, picture with size")
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            alert("webkit or something undefined")
        }
      }

    render() {
    return (<>
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    }
}