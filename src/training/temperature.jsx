import React from 'react';
import Boiling from './boiling'

class Temp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            temperature : '',
            faraday : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.reconVert = this.reconVert.bind(this)
    }

    handleChange(e){
        this.setState({
            temperature : e.target.value,
            faraday : parseInt(e.target.value) * 9/5 + 35
        })
    }
    reconVert(e){
        this.setState({
            faraday : e.target.value,
            temperature : parseInt(e.target.value - 32) * 5/9
        })
    }
    
    render(){
        const {temperature, faraday} = this.state;
        return(
            <>
            <div className="form-group">
                    <label htmlFor="celsus">Temperature en celcus</label>
                    <p><input type="text" name="celsus" id="celsus" value={temperature} onChange={this.handleChange}/></p>
            </div>
                <div className="form-group">
                    <label htmlFor="celsus">Temperature en Faraday</label>
                    <p><input type="text" name="celsus" id="celsus" value={faraday} onChange={this.reconVert}/></p>
                    <Boiling celsius={parseFloat(temperature)}/>
                </div>
        </>
        )
    }
}

export default Temp;