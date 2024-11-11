

import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/title.css";
// import MyPDF from './public/Nurlan_Saburov_02.pkpass';  
// import chargeSample from './public/Nurlan_Saburov_02.pkpass';
import { v4 as uuidv4 } from 'uuid';

let data = {
  "identityProviders":[
      {
          "loginUri": "https://online.if.test.vtb.ru/login?client_id=C2VYv3b6RHEig2n_56bfnn3GfI4a&redirect_uri=https://web-kit-test.vercel.app&response_type=code&scope=actualAddress%20gender%20inn%20registrationAddress%20birthDate%20birthPlace%20patronymic%20mobilePhone%20surname%20temporaryAddress%20name%20mainMobilePhone%20snils%20email%20rfPassport%20mdmId&state=fnnvjvn&consent_uri=https://ift-id.vtb.ru/authorize",
          "needAutoLogin": false,
          "icon": "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",
          "nativeAuthParams": {
        "online.if.test.vtb.ru": {
            "isTokenAvailable": true,
            "realm": "master"
        },
          "онлайн.втб.рф": {
            "isTokenAvailable": true,
            "realm": "guest"
        }
    },
          "name":"VTB ID"
      },
      {
          "name":"YANDEX ID",
          "icon":"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",
          "loginUri":"https://passport.yandex.by/auth?retpath=https%3A%2F%2Fyandex.by%2F&msid=1691416740914991-3835764046211306862-balancer-l7leveler-kubr-yp-sas-93-BAL-2090&origin=home_yaru_desktop_new"
      }
  ]
};

let dataTrue = {
  "identityProviders":[
      {
          "loginUri": "https://online.if.test.vtb.ru/login?client_id=C2VYv3b6RHEig2n_56bfnn3GfI4a&redirect_uri=https://web-kit-test.vercel.app&response_type=code&scope=actualAddress%20gender%20inn%20registrationAddress%20birthDate%20birthPlace%20patronymic%20mobilePhone%20surname%20temporaryAddress%20name%20mainMobilePhone%20snils%20email%20rfPassport%20mdmId&state=fnnvjvn&consent_uri=https://ift-id.vtb.ru/authorize",
          "needAutoLogin": true,
          "icon": "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",
          "nativeAuthParams": {
        "online.if.test.vtb.ru": {
            "isTokenAvailable": true,
            "realm": "master"
        },
          "онлайн.втб.рф": {
            "isTokenAvailable": true,
            "realm": "guest"
        }
    },
          "name":"VTB ID"
      },
      {
          "name":"YANDEX ID",
          "icon":"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",
          "loginUri":"https://passport.yandex.by/auth?retpath=https%3A%2F%2Fyandex.by%2F&msid=1691416740914991-3835764046211306862-balancer-l7leveler-kubr-yp-sas-93-BAL-2090&origin=home_yaru_desktop_new"
      }
  ]
};

let dataFalse = {
  "identityProviders":[
      {
          "loginUri": "https://online.if.test.vtb.ru/login?client_id=C2VYv3b6RHEig2n_56bfnn3GfI4a&redirect_uri=https://web-kit-test.vercel.app&response_type=code&scope=actualAddress%20gender%20inn%20registrationAddress%20birthDate%20birthPlace%20patronymic%20mobilePhone%20surname%20temporaryAddress%20name%20mainMobilePhone%20snils%20email%20rfPassport%20mdmId&state=fnnvjvn&consent_uri=https://ift-id.vtb.ru/authorize",
          "needAutoLogin": false,
          "icon": "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",
          "nativeAuthParams": {
        "online.if.test.vtb.ru": {
            "isTokenAvailable": true,
            "realm": "master"
        },
          "онлайн.втб.рф": {
            "isTokenAvailable": true,
            "realm": "guest"
        }
    },
          "name":"VTB ID"
      }
  ]
};




export default function Title(){

//   const downloadCSV (data){
//     var MIME_TYPE = "application/vnd.apple.pkpass";

//     var blob = new Blob([data], {type: MIME_TYPE});
//     window.location.href = window.URL.createObjectURL(blob);
// }
  
  useEffect(() => {
    const complete = (event) => {
        window.removeEventListener('load', complete)
        if (window.webkit) {
          window.webkit.messageHandlers.pageStateHandler.postMessage(JSON.stringify({state: 'READY'}))
        } else if (window.AndroidWebViewHandler) {
          const response = event.data;
          if (response.type === 'JWT_TOKEN_RESPONSE') {
            localStorage.setItem('loyalty_native_token', response.result);
          }
        }else  {
            console.log("webkit or something undefined")
        }
    }

    if (document.readyState === 'complete') {
        setTimeout(complete);
    } else {
        window.addEventListener('load', complete)
    }
}, [])

  return (<>
            <button className="favorite styled" onClick={() => {
              window
              .webkit
              .messageHandlers
              .loginViaIdentityProvidersHandler
              .postMessage( JSON.stringify(data));
            }}>Войти по ВТБID</button>
            <button className="favorite styled" onClick={() => {
              window
              .webkit
              .messageHandlers
              .loginViaIdentityProvidersHandler
              .postMessage( JSON.stringify(dataTrue));
            }}>Автологин true</button>
            <button className="favorite styled" onClick={() => {
              window
              .webkit
              .messageHandlers
              .loginViaIdentityProvidersHandler
              .postMessage( JSON.stringify(dataFalse));
            }}>Автологин false</button>
            <br />
            <button className="favorite android" onClick={() => {
              window.AndroidWebViewHandler?.sendMessage( JSON.stringify({ 
                id: uuidv4(),
                jsonrpc : '2.0',
                handler: 'getToken' }));
            }}>Кнопка для команды андроид(getToken)</button>
            <br />
            <button className="favorite android" onClick={() => {
              window.AndroidWebViewHandler?.sendMessage( JSON.stringify({
                id: uuidv4(),
                jsonrpc : '2.0',
                handler : 'routing',
                method : 'newTab',
                params : {
                  url: 'https://yandex.ru/pogoda/saint-petersburg?lat=59.938784&lon=30.314997',
                },
              }));
            }}>Кнопка для команды андроид(routing)</button>
              <br />
              <button className="favorite styled" onClick={() => {
              window.webkit.messageHandlers.initQrScanner.postMessage("");
            }}>initQrScanner</button>
              <br />
              {/* <a  href='https://www.youtube.com/watch?v=sUAPupkWVik' >Ссылка на Дзен</a>
              <br />
              <button onclick="downloadFile('Nurlan_Saburov_02.pkpas', './Nurlan_Saburov_02.pkpas')">Скачать файл</button>
              <br />
              <input type="button" value="Download Now!" onclick="window.location = 'Nurlan_Saburov_02.pkpass"></input> */}
              {/* <Link to="/Nurlan_Saburov_02.pkpass" target="_blank" download>Download</Link> */}
                
              {/* <a href={myPDF} download="My_File.pdf"> Download Here </a>   */}
              <br />
              {/* <a href={chargeSample} download="your file name">Download</a> */}
              <a href = "Nurlan_Saburov_02.pkpass" download = "Nurlan_Saburov_02.pkpass">Скачать билет</a>


  </>)
}
