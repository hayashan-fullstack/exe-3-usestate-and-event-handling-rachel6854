import React, { useState ,useRef} from 'react';
import ReactDOM from 'react-dom';
export const App = (props)=>{
    const [second, setSecond] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [houres, setHoures] = useState(0)
    const timeout=useRef(null)
   timeout.current= setTimeout(() => {
        if(second>59)
        {
            setSecond(0)
            setMinutes(minutes + 1)
        }
        else{
            setSecond(second + 1)
        }
        if(minutes>59)
        {
            setMinutes(0)
            setHoures(houres + 1)  
        }
        
    },1)
    
    const restart = () => {
        clearTimeout(timeout.current)
        setSecond(0)
        setMinutes(0)
        setHoures(0)
    }
    return (
        <div style={{ margin: '1%',color:'darkred' ,backgroundColor:'pink',padding:300}}>
            <h1 > Timer</h1>
            <h2> {houres}:{minutes}:{second}</h2>
            <h2> </h2>
            <br />
            <button onClick={restart} style={{blockSize:100,fontSize:50,color:'white',borderColor:'white',backgroundColor:'darkred'}}>restart</button>
            <br/>
        </div>
    )
}