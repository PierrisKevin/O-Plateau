function Boiling({celsius}){
    let response = (celsius>=100) ? <p>L'eau bout</p> : <p>L'eau ne bout pas</p>
    return response;
}

export default Boiling;