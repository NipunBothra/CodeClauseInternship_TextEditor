import React, { useState } from 'react'

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const[btntext, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () =>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Me</h1>
        <div className='container my-3'>
            <h2 className='my-3'>Name: Nipun Bothra</h2>
            <h2 className='my-3'>email: nipunbothra129@gmail.com</h2>
        </div>
        <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
}
