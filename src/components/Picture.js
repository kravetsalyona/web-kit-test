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
        this.onBeforeLoad_handler()
        // window.addEventListener('pageshow', this.onLoad_handler)
    
        function onLoad(callback){
            if (document.readyState === 'complete') {
                setTimeout(callback,0);
            } else {
                window.addEventListener("load", callback);
            }
        }
        onLoad(function(){
            const img = document.getElementById('img');
            // alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            if (window.webkit) {
                window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            } else {
                console.log("webkit or something undefined")
            }
        });

        
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.onLoad_handler);
    }
    onBeforeLoad_handler () {
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
      }
    // onLoad_handler () {
    //     const img = document.getElementById('img');
    //     
    //     if (window.webkit) {
    //         window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
    //     } else {
    //         // alert("webkit or something undefined")
    //     }
    //   }

    render() {
    return (<>
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    }
}