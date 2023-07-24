export default function Title(){
  const title = 'Баллы Луны';
  const currentBalance = 'Текущий баланс';
  const countOfPoints = 100;
  const buttonName = 'Получить токен'
  const handleClick = () => {
    let dataToken = localStorage.getItem('WEBBOT/RWT');
    if (dataToken && window.webkit) {
      window.webkit.messageHandlers.jsHandler.postMessage(`Token: ${dataToken}`);
      alert(`Token: ${dataToken}`)
    }
    else {
      alert(`Token: отсутствует`)
    }

  }
return (<>
    <h1>{title}</h1>
    <h2>{currentBalance}</h2>
    <p>{countOfPoints}</p>
    <button onClick={handleClick}>{buttonName}</button>
</>)
}
