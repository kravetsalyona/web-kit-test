
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/title.css";
import cn from "classnames";

export default function Title(){
  const title = 'Баллы Луны';
  const currentBalance = 'Текущий баланс';
  const countOfPoints = 100;
  const dzenURL = 'https://dzen.ru/';
  const dzenWeatherURL = 'https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635';
  const [statusDzenURL, setStatusDzenURL] = useState(true);
  const [statusDzenWeatherURL, setStatusDzenWeatherURL] = useState(true);

  useEffect( () => {
    if (window.webkit) {
      window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                              "method" : "set",
                                                                              "params" :  {"key" : "token", "value" : JSON.stringify( { "access_token": 'string',
                                                                                                                                        "refresh_token": 'string',
                                                                                                                                        "scope": 'string',
                                                                                                                                        "id_token": 'string'})},
                                                                                                                                        "id" : 1
      }));
      setTimeout(() => {
      window
            .webkit
            .messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                              "method" : "get",
                                                                              "params" : {"key" : "token"},
                                                                              "id" : 2
      }));
      }, 5000)
    }
    
  },[])

  useEffect(() => {
    const didRecieveLoonaStorageResponse = (event) => {
      alert(`Я получаю значение из LoonaStorage ${event}`);
    }
    window.addEventListener('message', didRecieveLoonaStorageResponse);
    return () => window.removeEventListener('message', didRecieveLoonaStorageResponse);
    
  }, [])

  useEffect(() => {
    const didAddLoonaStorageResponse = (event) => {
      alert(`Я добавляю значение в LoonaStorage ${event}`);
    }
    window.addEventListener('message', didAddLoonaStorageResponse);
    return () => window.removeEventListener('storage', didAddLoonaStorageResponse);
    
  }, [])

  return (<>
      <h1>{title}</h1>
      <h2>{currentBalance}</h2>
      <p>{countOfPoints}</p>
      <a className={cn({isDisabledLink: statusDzenURL}, {isDisabledLink: statusDzenURL})} href='https://dzen.ru/' >Ссылка на Дзен</a>
      <br/>
      <a className={cn({isDisabledLink: statusDzenWeatherURL}, {isDisabledLink: statusDzenWeatherURL})}  href='https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635' >Ссылка на Дзен-Погода</a>
  </>)
}
