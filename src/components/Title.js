import { useEffect, useState } from "react";

export default function Title(){
  const title = 'Баллы Луны';
  const currentBalance = 'Текущий баланс';
  const countOfPoints = 100;
  const dzenURL = 'https://dzen.ru/';
  const dzenWeatherURL = 'https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635';
  const [status, setStatus] = useState('true');
  useEffect( () =>{
    if (window.webkit) {
      window.webkit.messageHandlers.jsHandler.postMessage(`URL: ${dzenURL}`);
      window.webkit.messageHandlers.jsHandler.postMessage(`URL: ${dzenWeatherURL}`);
    }
    else {
      alert(`webkit: отсутствует`)
    }
    window.updateFromNative = (nativeData) => {
      if (nativeData === dzenURL) {
        setStatus(false);
        

      }
      

    }
  },[])
    

  
return (<>
    <h1>{title}</h1>
    <h2>{currentBalance}</h2>
    <p>{countOfPoints}</p>
    <a href='https://dzen.ru/' id="elemDzenURL" disabled={status}>Ссылка на Дзен</a>
    <br/>
    <a href='https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635'>Ссылка на Дзен-Погода</a>
</>)
}
