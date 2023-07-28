import { useEffect} from "react"
import logo from '../logo.svg';

const Picture = () => {
    useEffect(() => {
        onBeforeLoad_handler();
        const complete = () => {
            window.removeEventListener('load', complete)
            var img = document.getElementById('img');
            alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            if (window.webkit) {
                window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            } else {
                console.log("webkit or something undefined")
            }
        }

        if (document.readyState === 'complete') {
            setTimeout(complete);
        } else {
            window.addEventListener('load', complete)
        }
    }, [])
    function onBeforeLoad_handler () {
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
      }
    
    return (<>
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    
}



export default Picture;