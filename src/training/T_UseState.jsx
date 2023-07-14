import React, {useState} from "react";
import { useEffect } from "react";

function useIncrement(initial, pas){
    const [count, setCount] = useState(initial);
    const incrementer = ()=>{
        setCount(count => count + pas)
    }
    return [count, incrementer]
}
function useAutoIncrement(initial, pas){
    const [count, setCount] = useState(initial);
    useEffect(()=>{
        const timer = window.setInterval(()=>{
            setCount(count => count + pas)
        },1000)
        return function(){
            return window.clearInterval(timer)
        }
    }, [])
    return count;
}

function useToggle(valeur=true){
    const [toggle,setToggle] = useState(valeur)
    const changeToggle = ()=>{
        setToggle (toggle => (toggle) ? false : true)
    }
    return [toggle, changeToggle];
}

function Compteur(){
    // const [count,incrementer]=useIncrement(2,5);
    const count = useAutoIncrement(0,4)
    const [toggle, changeToggle] = useToggle(false)
    useEffect(()=>{
        document.title = count;
    })

    return (
        <>
        
        <p>Nombre : {count}</p>
        <p>Valuer du toggle : {String(toggle)}</p>
        <button onClick={changeToggle}>Changer l'activite</button>

        </>
    )
}

export default Compteur;