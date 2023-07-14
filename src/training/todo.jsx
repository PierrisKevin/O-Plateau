import React, {useState, useEffect} from "react";

function useRequests(url){
    const [resp, setResp] = useState({});

    useEffect(()=>{
        (async function(){
            const response = await fetch(url);
            const dataResp = await response.json();
            if(response.ok){
                setResp(dataResp)
            }
            else{
                alert("Fretching failed")
            }
        })()
    })
    if (resp) return resp;
    return "Aucun donne..."
}

function Todos(){
    const [todo, setTodo] = useState([])
    useEffect(()=>{
        (async function(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            const dataResp = await response.json();
            if(response.ok){
                setTodo(dataResp);
            }
            else{
                console.log("erreur de connexion ou de la prise du donne")
            }
        })()
    },[])
    return(
        <ul>
            {todo.map( (data)=> <li>{data.title}</li> )}
        </ul>
    )
}

export default Todos;