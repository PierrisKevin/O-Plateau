import React from "react";

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
        }
        this.loadTime = this.loadTime.bind(this);
        this.timer = null
    }
    loadTime(){
        setInterval(()=>{
            this.setState({date : new Date()})
        },1000)
    }
    componentDidMount(){
        this.timer = window.setInterval(()=>{
            this.setState({date : new Date()})
        },1000)
    }
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    render(){
        const {date} = this.state;
        return(
            <>
            <h1>{date.toLocaleString()}</h1>
            </>
        )
    }
}

export default Clock;