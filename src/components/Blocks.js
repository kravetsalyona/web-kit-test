import { useEffect,useRef } from "react";
import '../styles/blocks.css'

export default function Blocks(){
    const requestRef = useRef();

   useEffect(() => {
     test()
     requestRef.current = requestAnimationFrame(tick)
     return ()=> cancelAnimationFrame(requestRef.current);

    },[])
    function getListContent(){
        let result = [];
        for ( let i = 0; i <= 200; i++){
            let box = document.createElement('div');
            box.classList.add('box');
            result.push(box);
            
        }
        return result;

    }
   
    const test = () => {
        const container = document.getElementById('container');
        let blocks = getListContent()
        container.append(...blocks);
        return blocks;
    }
    const tick = () => {
        test().forEach(block => {
            block.style.height = `${block.offsetHeight+1}px`
        });
        requestRef.current = requestAnimationFrame(tick);
        
    }
    

  return (<>
            <div id="container" className="App-container" />
            {/* <button onClick={tick}>test!</button> */}
            
        
      
  </>)
  }
  