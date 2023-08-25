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
                                 "id":     1}));
```

### loonaStorage get
Получает `<значение>` по `<ключу>` из хранилища браузера Loona `loonaStorage`.

```javascript
window.webkit.messageHandlers.loonaStorage.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "set",
                                                                        "params" : {"key" : "<ключ>"},
                                                                        "id" : 2,
                                                                      }
                                                                     )
                                                      );
```

### preloadPages
Сохраняет `<ссылку для перехода>` для ключа `<url>` в хранилище браузера Loona `loonaStorage`.

```javascript
window.webkit.messageHandlers.preloadPages.postMessage(JSON.stringify({ "jsonrpc" : "2.0",
                                                                        "method" : "set",
                                                                        "params" :  {"key" : "url",
                                                                                     "value" : `<ссылка для перехода>`
                                                                                    },
                                                                        "id" : 1,
                                                                       }
                                                                     )
                                                      );
```
### preloadRedirect
Получает `<ссылку для перехода>` для ключа `<url>` из хранилища браузера Loona `loonaStorage`.

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