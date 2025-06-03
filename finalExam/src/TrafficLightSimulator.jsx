import { useState } from "react"
import { useEffect } from "react"
function TrafficLightSimulator()
{
    const [red,setRed]=useState('red')
    const [yellow,setYellow]=useState('yellow')
    const [green,setGreen]=useState('green')
    


    useEffect(()=>{
        setInterval(()=>{
            let value=document.getElementById('red')
            value.style='background-color:grey'
        },3000)
    },[])
    return(<>
        <p>Taffic Light Simulator</p>
    <div id="main">
            <div id="red"></div>
            <div id='yellow'></div>
            <div id="green"></div>
        </div>
    </>)
}
export default TrafficLightSimulator