import { useEffect } from "react";

export default function Title(){
  const title = 'Баллы Луны';
  const currentBalance = 'Текущий баланс';
  const countOfPoints = 100;
  useEffect( () =>{
    if (window.webkit) {
      window.webkit.messageHandlers.jsHandler.postMessage(`URL: ${'https://dzen.ru/'}`);
      window.webkit.messageHandlers.jsHandler.postMessage(`URL: ${'https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635'}`);
    }
    else {
      alert(`webkit: отсутствует`)
    }
  },[])
    

  
return (<>
    <h1>{title}</h1>
    <h2>{currentBalance}</h2>
    <p>{countOfPoints}</p>
    <a href='https://dzen.ru/'>Ссылка на Дзен</a>
    <a href='https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635'>Ссылка на Дзен-Погода</a>
</>)
}
