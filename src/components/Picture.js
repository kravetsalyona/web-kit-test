import { useLayoutEffect } from "react"
import logo from '../logo.svg';


export default function Picture () {
    
    useLayoutEffect(() => {
        const img = document.getElementById('img');
        if (window.webkit) {
            window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
        } else {
            console.log("webkit or something undefined")
        }
        // alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
        const loader = () => {

            console.log('Страница загружена');
            // const size = `Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`;
            if (window.webkit) {
                window.webkit.messageHandlers.jsHandler.postMessage(`Страница загружена. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            } else {
                console.log("webkit or something undefined")
            }
            // alert(`Страница загружена. Image size: ${img.offsetWidth}x${img.offsetHeight}`);
          }
        window.addEventListener('load', loader)
        return () => window.removeEventListener('load', loader)
    })


    return (<>
                {/* <p>{size}</p> */}
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
}