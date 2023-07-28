export default function Title(){
  const title = 'Баллы Луны';
  const currentBalance = 'Текущий баланс';
  const countOfPoints = 100;
  const aName = 'https://dzen.ru/'
  const handleClick = () => {
    // let dataToken = localStorage.getItem('WEBBOT/RWT');
    if (window.webkit) {
      window.webkit.messageHandlers.jsHandler.postMessage(`URL: ${'https://dzen.ru/'}`);
    }
    else {
      alert(`webkit: отсутствует`)
    }

  }
return (<>
    <h1>{title}</h1>
    <h2>{currentBalance}</h2>
    <p>{countOfPoints}</p>
    <a href='https://dzen.ru/'>Ссылка на Дзен</a>
</>)
}
