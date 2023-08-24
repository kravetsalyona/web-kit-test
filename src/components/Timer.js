import { useState, useLayoutEffect, } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = () => {
    setCount(c => c + increment);
  };

  useLayoutEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);




  // const URLForHandOver = 'https://dzen.ru/';

  // useEffect( () => {
  //   if (window.webkit) {
  //     window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
  //                                                                             "method" : "set",
  //                                                                             "params" :  {"key" : "URL", "value" : URLForHandOver},
  //                                                                             "id" : 1,}));
  //     setTimeout(() => {
  //     window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
  //                                                                             "method" : "get",
  //                                                                             "params" : {"key" : "URL"},
  //                                                                             "id" : 2,}));
  //     }, 5000)
  //   }
    
  // },[])

  // useEffect(() => {
  //   const didRecieveLoonaStorageResponse = (event) => {
  //     alert(`Я получаю значение из LoonaStorage ${event}`);
  //   }
  //   window.addEventListener('message', didRecieveLoonaStorageResponse);
  //   return () => window.removeEventListener('message', didRecieveLoonaStorageResponse);
    
  // }, [])

  // useEffect(() => {
  //   const didAddLoonaStorageResponse = (event) => {
  //     alert(`Я добавляю значение в LoonaStorage ${event}`);
  //   }
  //   window.addEventListener('storage', didAddLoonaStorageResponse);
  //   return () => window.removeEventListener('storage', didAddLoonaStorageResponse);
    
  // }, [])





  return (
    <>
      <h1>
        Timer: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />

    </>
  );
}



