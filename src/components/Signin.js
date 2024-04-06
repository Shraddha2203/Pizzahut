import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [logerror,setLogerror]=useState(false)
  const navigate=useNavigate()
  function login(email,e)
  {
    let u={email,password}
    e.preventDefault()
    fetch("http://localhost:3000/users").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        resp2.find((r)=>{
          if(r.email===u.email && r.password===u.password)
            {
              localStorage.setItem("login",JSON.stringify(u))
              navigate('/')
              window.location.reload()
            }
          else
            {
              setLogerror(true)
            }
        })
        if(logerror==true)
        {
          alert("Please Enter Correct Details")
        }
      })
    })
  }

  return (
    <div className='container text-start mt-5'>
      <h1 className='text-center mb-4'  style={{ fontFamily: "brush script mt" }}>Login Form</h1>
      <Form onSubmit={(e)=>login(email,e)}>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} className='w-50' onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} className='w-50' onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className='mx-auto d-block'>
        Sign In
      </Button>
      </Form>
    </div>
  )
}

export default Signin