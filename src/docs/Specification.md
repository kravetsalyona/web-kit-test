# API для предзагрузки страниц
**Версия браузера**: `1.0.0`


## Введение
Для чего это нужно:
Механизм имитирует поведение нативного приложения.
Используется для редиректа с фоновой подгрузкой страницы, на которую вы хотите перевести пользователя.

Механизм реализуется посредством вызова метода `postMessage` следующих `messageHandlers`:
- `loonaStorage`
- `preloadPages`
- `preloadRedirect`

И передачи сообщения (объект) в формате `JSON string`. 

:::tip Обратите внимание
Объект должен соответствует протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0.
:::

## Методы
### loonaStorage метод "set"
Сохраняет `<значение>` для `<ключа>` в хранилище браузера Loona `loonaStorage`.

```javascript
window
    .webkit
    .messageHandlers
    .loonaStorage
    .postMessage(JSON.stringify({ "jsonrpc": "2.0",
                                    "method": "set",
                                    "params": {"key":   "<ключ>",
                                            "value": "<значение>"},
                                    "id":     1
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
    .postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                    "method" : "set",
                                    "params" : {"key" : "<ключ>"},
                                    "id" : 2,
                                })
                );
```

### preloadPages
Регистрирует `массив ссылок для перехода на другие сайты` для ключа `urls`. Массив состоит из одного и более элементов (`<ссылка для перехода>`, `<n-ая ссылка для перехода>`).

```javascript
{"jsonrpc" : "2.0", "method" : "preload", "params" : {"url" : ["dddddd"]}, "id" : 3}
window
    .webkit
    .messageHandlers
    .preloadPages
    .postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                    "method" : "preload",
                                    "params" : {"urls" : ["<ссылка для перехода>","<n-ая ссылка для перехода>"]},
                                        "id" : 3
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
    .postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                    "method" : "preload",
                                    "params" : {"url" : ["<ссылка для перехода>"]},
                                    "id" : 4,
                                })
                );
```
### didRecieveLoonaStorageResponse
Хранилище браузера Loona `loonaStorage` получило ответ.???

```javascript
window.addEventListener('message', didRecieveLoonaStorageResponse);
```
### didAddLoonaStorageResponse
Хранилище браузера Loona `loonaStorage` добавило значение по ключу.???

```javascript
window.addEventListener('message', didAddLoonaStorageResponse);
```

## 3 Примеры использования
### Предзагрузка страницы без аутентификации
На странице выведены две ссылки. 
Мы отправляем браузеру информацию о том, какие ссылки нужно предзагрузить. Затем, через 5 секунд, отправляем браузеру информацию на какую ссылку надо перейти(`https://dzen.ru/`).

```javascript
import { useEffect} from "react";
import "../styles/title.css";
import cn from "classnames";

export default function OursComponent(){

    const URLForHandOverNumberOne = 'https://dzen.ru/';
    const URLForHandOverNumberTwo = 'https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635';

  const [statusURLForHandOverNumberOne, setStatusURLForHandOverNumberOne] = useState(true);
  const [statusURLForHandOverNumberTwo, setStatusURLForHandOverNumberTwo] = useState(true);

    useEffect( () => {
        if (window?.webkit && webkit?.messageHandlers && messageHandlers?.preloadPages) {
        window
                .webkit
                .messageHandlers
                .preloadPages
                .postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                "method" : "preload",
                                                "params" : {"urls" : [URLForHandOverNumberOne, URLForHandOverNumberTwo]},
                                                    "id" : 3
                                            }
                                            )
                            );
        setTimeout(() => {window
                                .webkit
                                .messageHandlers
                                .loonaStorage
                                .postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                "method" : "get",
                                                                "params" : {"url" : [URLForHandOverNumberOne]},
                                                                "id" : 4
                                                            })
                                            );
        }, 5000)
        }
        
    },[])

    useEffect(() => {
    const didRecieveLoonaStorageResponse = () => {
        alert(`Я получаю значение из LoonaStorage`);
    }
    window.addEventListener('message', didRecieveLoonaStorageResponse);
    return () => window.removeEventListener('message', didRecieveLoonaStorageResponse);

    }, [])

    useEffect(() => {
    const didAddLoonaStorageResponse = () => {
        alert(`Я добавляю значение в LoonaStorage`);
    }
    window.addEventListener('message', didAddLoonaStorageResponse);
    return () => window.removeEventListener('storage', didAddLoonaStorageResponse);

    }, [])

return (<>
            <a className={cn({isDisabledLink: statusDzenURL}, {isDisabledLink: statusDzenURL})} href='https://dzen.ru/' >Ссылка на Дзен</a>
            <br/>
            <a className={cn({isDisabledLink: statusDzenWeatherURL}, {isDisabledLink: statusDzenWeatherURL})}  href='https://dzen.ru/pogoda/saint-petersburg?lat=59.938951&lon=30.315635' >Ссылка на Дзен-Погода в Санкт-Петербурге</a>
        </>)
}
```

### Предзагрузка страницы с аутентификацией