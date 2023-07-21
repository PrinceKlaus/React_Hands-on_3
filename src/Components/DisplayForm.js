import React, { Component } from 'react'
class DisplayForm extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value)
    }
    render(){
        return(
             <>
            <h1 className='up1'>EMPLOYEE FEEDBACK DATA</h1>
            <div className='box'>
            {this.props.value.map((item, index) => {
                return(
                    <p className='card' key ={index}>Name : {item.name} || Department : {item.dept} ||Rating : {item.Rating}</p>
                )
            })}
            <button className='btn2' onClick={this.props.toggleFunc}>Go Back</button>
            </div>
            </>
        )
    }
}
export default DisplayForm 