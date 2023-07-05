import { useLayoutEffect } from "react"
import logo from '../logo.svg';


export default function Picture () {
    
    useLayoutEffect(() => {
        const img = document.getElementById('img');
        alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
        const loader = () => {

            console.log('Страница загружена');
            // const size = `Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`;

            alert(`Страница загружена. Image size: ${img.offsetWidth}x${img.offsetHeight}`);
          }
        window.addEventListener('load', loader)
        return () => window.removeEventListener('load', loader)
    })


    return (<>
                {/* <p>{size}</p> */}
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
}