# Спецификация Loona Loading Page
##### Дата происхождения:
24 августа 2023г.
##### Обновлено:
25 августа 2023г.

##### Автор:
Рабочая группа LLP. (тут нужно будет указать рабочую почту, чтобы собирать ос) 

##### Совместимость:
Технология работает в браузере Loona с версиии v1.0.0(указать правдивую версию) .

```
Оглавление
1 Введение
2 Методы отправки PostMessage браузеру
3 Примеры использования
```

## 1 Введение
## 2 Методы отправки PostMessage браузеру
### loonaStorage set
Отправляет сообщение Браузеру о намерении сохранить по ключу значение в хранилище браузера Loona "loonaStorage".

Отправляемое сообщение это JSON объект сконвертированный в строку.
Обратите внимание: Объект должен соответсвовать протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0 .

```javascript
window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "set",
                                                                        "params" :  {"key" : "token",
                                                                                     "value" : yourstoken,
                                                                                    },
                                                                        "id" : 1,
                                                                      }
                                                                     )
                                                      );
```

### loonaStorage get
Отправляет сообщение Браузеру о намерении получить по ключу значение из хранилища браузера Loona "loonaStorage".

Получаемое сообщение это JSON объект сконвертированный в строку.
Обратите внимание: Объект должен соответсвовать протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0 .

```javascript
window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "token",
                                                                        "params" : {"key" : "token"},
                                                                        "id" : 2,
                                                                      }
                                                                     )
                                                      );
```

### preloadPages
Отправляет сообщение Браузеру о намерении сохранить по ключу значение url страницы в хранилище браузера Loona "loonaStorage".

Получаемое сообщение это JSON объект сконвертированный в строку.
Обратите внимание: Объект должен соответсвовать протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0 .

```javascript
window.webkit.messageHandlers.preloadPages.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "set",
                                                                        "params" :  {"key" : "url",
                                                                                     "value" : yoursURLForHandOver
                                                                                    },
                                                                        "id" : 1,
                                                                       }
                                                                     )
                                                      );
```
### preloadRedirect
Отправляет сообщение Браузеру о намерении получить по ключу значение url страницы из хранилища браузера Loona "loonaStorage".

Получаемое сообщение это JSON объект сконвертированный в строку.
Обратите внимание: Объект должен соответсвовать протоколу [JSON-RPC](https://www.jsonrpc.org/specification) версии 2.0 .

```javascript
window.webkit.messageHandlers.preloadPages.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "get",
                                                                        "params" : {"key" : "url"},
                                                                        "id" : 2,
                                                                       }
                                                                     )
                                                      );
```
## 3 Примеры использования
### Предзагрузка страниц с аутентификацией