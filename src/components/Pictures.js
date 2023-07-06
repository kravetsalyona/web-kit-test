import pic1 from '../image/castle.jpg'
import pic2 from '../image/coffee.jpg'
import pic3 from '../image/dolina.jpg'
import pic4 from '../image/sphera.jpg'
import "../styles/pictures.css";

export default function Title(){
   
  return (<>
            <div >
            <img id="img1" src={pic1} className="App-pic" alt="pic1" />
            <img id="img2" src={pic2} className="App-pic" alt="pic2" />
            <img id="img3" src={pic3} className="App-pic" alt="pic3" />
            <img id="img4" src={pic4} className="App-pic" alt="pic4" />
            </div>
        </>)
  }
  