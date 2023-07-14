import { useEffect} from "react"
import logo from '../logo.svg';

const Picture = () => {
    // const [, setFirstRender] = useState(true);
    // useEffect(() => {
    //     const img = document.getElementById('img');

    //     // const isFirstRender = useFirstRender();

    //     if (isFirstRender) return "ничего";
    //     alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)

    // })
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         function onLoad(callback){
    //             if (document.readyState === 'complete') {
    //                 callback()
    //             } else {
    //                 window.addEventListener("load", callback);
    //             }
    //         }
    //         onLoad(() => {
    //             const img = document.getElementById('img');
    //             alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
    //             if (window.webkit) {
    //                 window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
    //             } else {
    //                 console.log("webkit or something undefined")
    //             }
    //         });
    //     }, 0)

    //     // Вызываем ререндер
    //     setFirstRender(false);
    // }, [])

    useEffect(() => {
        onBeforeLoad_handler();
        const complete = () => {
            window.removeEventListener('load', complete)
            var img = document.getElementById('img');
            // console.log(`${img.offsetWidth}x${img.offsetHeight}`);
            alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            if (window.webkit) {
                window.webkit.messageHandlers.jsHandler.postMessage(`Image size: ${img.offsetWidth}x${img.offsetHeight}`)
            } else {
                console.log("webkit or something undefined")
            }
        }

        // console.log(document.readyState === 'complete');

        if (document.readyState === 'complete') {
            setTimeout(complete);
        } else {
            window.addEventListener('load', complete)
            // console.log(global);
        }
    }, [])
    
    // useEffect(() => {
    //     onBeforeLoad_handler()
    
    //     function onLoad(callback){
    //         if (document.readyState === 'complete') {
    //             setTimeout(callback,10);
    //         } else {
    //             window.addEventListener("load", callback);
    //         }
    //     }
    //     onLoad(function(){
    //         const img = document.getElementById('img');
    //         alert(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
    //         if (window.webkit) {
    //             window.webkit.messageHandlers.jsHandler.postMessage(`Page loaded. Image size: ${img.offsetWidth}x${img.offsetHeight}`)
    //         } else {
    //             console.log("webkit or something undefined")
    //         }
    //     });
    //     return () => window.removeEventListener('load', onLoad); 
    // })
    
        
    function onBeforeLoad_handler () {
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

   
    return (<>
                <img id="img" src={logo} className="App-logo" alt="logo" />

    </>)
    
}



export default Picture;