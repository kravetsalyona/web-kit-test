# API для предзагрузки страниц
**Версия браузера**: `1.0.0`


## Введение
Механизм имитирует поведение нативного приложения.
Передача массива URL для предзагрузки на стороне нативного приложения, нативиный переход между предзагруженными страницами, передача и сохранение данных в loonaStorage, который так же находится на стороне нативного приложения.

Механизм реализуется посредством вызова метода `postMessage` следующих `messageHandlers`:
- `loonaStorage`
- `preloadPages`
- `preloadRedirect`

И передачи сообщения (объект) в формате `JSON string`. 

:::tip Обратите внимание
Объект должен соответствовать протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0.
:::

## Методы
### loonaStorage метод "set"
Сохраняет `<значение>` для `<ключа>` в хранилище браузера Loona `loonaStorage`.

```javascript
window
    .webkit
    .messageHandlers
    .loonaStorage
    .postMessage(
        JSON.stringify({
            "jsonrpc": "2.0",
            "method": "set",
            "params": {"key":   "<ключ>",
                    "value": "<значение>"},
            "id" : 1,
        })
    );
```

### loonaStorage get
Получает `<значение>` по `<ключу>` из хранилища браузера Loona `loonaStorage`.

```javascript
window
    .webkit
    .messageHandlers
    .loonaStorage
    .postMessage(
        JSON.stringify({
            "jsonrpc" : "2.0",
            "method" : "set",
            "params" : {"key" : "<ключ>"},
            "id" : 2,
        })
    );
```

### preloadPages
Регистрирует `массив ссылок для перехода на другие сайты` для ключа `urls`. Массив состоит из одного и более элементов (`<ссылка для перехода>`, `<n-ая ссылка для перехода>`).

```javascript
window
    .webkit
    .messageHandlers
    .preloadPages
    .postMessage(
        JSON.stringify({
            "jsonrpc" : "2.0",
            "method" : "preload",
            "params" : {"urls" : ["<ссылка для перехода>","<n-ая ссылка для перехода>"]},
                "id" : 3,
        })
    );
```
### preloadRedirect
Регистрирует `массив с одной <ссылкой для перехода>` для ключа `url`.

```javascript
window
    .webkit
    .messageHandlers
    .preloadRedirect
    .postMessage(
        JSON.stringify({ 
            "jsonrpc" : "2.0",
            "method" : "preload",
            "params" : {"url" : "<ссылка для перехода>"},
            "id" : 4,
        })
    );
```
### didRecieveLoonaStorageResponse
Хранилище браузера Loona `loonaStorage` получило ответ.???

```javascript
window.addEventListener('message', didRecieveLoonaStorageResponse);
```

## 3 Примеры использования
### Предзагрузка страницы без аутентификации
На странице выведены две ссылки. Мы хотим, чтобы браузер предзагрузил одну страницу `https://dzen.ru/` и пользователь потом по ней перешёл.???

Первое, отправляем браузеру информацию о том, какие ссылки нужно предзагрузить. Затем, через 5 секунд, отправляем браузеру информацию на какую ссылку надо перейти(`https://dzen.ru/`).

```javascript
import { useEffect} from "react";
import cn from "classnames";

import "../styles/title.css";

const URL_FOR_HAND_OVER_NUMBER_ONE = 'https://dzen.ru/';
const URL_FOR_HAND_OVER_NUMBER_TWO = 'https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635';

const POST_MESSAGE_DELAY = 5000;

export default function OursComponent(){
    const [statusURLForHandOverNumberOne, setStatusURLForHandOverNumberOne] = useState(true);
    const [statusURLForHandOverNumberTwo, setStatusURLForHandOverNumberTwo] = useState(true);

    const didRecieveLoonaStorageResponse = (event: MessageEvent<JsonRpcResponse<unknown>>) => {
        alert(`Я получаю значение из LoonaStorage`);
    }

    function handleEvent (event: MessageEvent<JsonRpcResponse<unknown>>) {
        subscribers.forEach((fn) => fn(event.data));
    }

    useEffect( () => {
        if (window.webkit?.messageHandlers?.preloadPages) {
            window
                .webkit
                .messageHandlers
                .preloadPages
                .postMessage(
                    JSON.stringify({
                        "jsonrpc" : "2.0",
                        "method" : "preload",
                        "params" : {"urls" : [URL_FOR_HAND_OVER_NUMBER_ONE, URL_FOR_HAND_OVER_NUMBER_TWO]},
                            "id" : 3,
                    })
                );

            setTimeout(() => { 
                window
                    .webkit
                    .messageHandlers
                    .preloadRedirect
                    .postMessage(
                        JSON.stringify({
                            "jsonrpc" : "2.0",
                            "method" : "get",
                            "params" : {"url" : URL_FOR_HAND_OVER_NUMBER_ONE},
                            "id" : 4,
                        })
                    );
            }, POST_MESSAGE_DELAY)
        }

        window.addEventListener('message', didRecieveLoonaStorageResponse);

        return () => {
            
            window.removeEventListener('message', didRecieveLoonaStorageResponse);
            window.removeEventListener('storage', didAddLoonaStorageResponse);
        }
    },[])

    return (
        <>
            <a 
                className={cn({isDisabledLink: statusDzenURL}, {isDisabledLink: statusDzenURL})}
                href='https://dzen.ru/'
            >
                Ссылка на Дзен
            </a>
            <br/>
            <a
                className={cn({isDisabledLink: statusDzenWeatherURL}, {isDisabledLink: statusDzenWeatherURL})}
                href='https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635'
            >
                Ссылка на Дзен-Погода в Санкт-Петербурге
            </a>
        </>
    )
}
```

### Предзагрузка страницы с аутентификацией