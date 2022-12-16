import 'bootstrap/dist/css/bootstrap.min.css';
import react from "react"; 
import {Button, Form} from 'react-bootstrap' 
import {v4 as uuid } from 'uuid' 
import {Link, useNavigate} from 'react-router-dom' 
import React, { Fragment, useState } from "react";
import Employees from './Employees'; 


function Add () {

const [name, setName]=useState('')   
    const [age, setAge]=useState('')  

    let history = useNavigate() 

       const handleSubmit = (e) => { 

        e.preventDefult()

        const ids = uuid();

        let uniqueId = ids.slice(0,8) 
        
        let a = name,
         b = age

         Employees.push({id: uniqueId, name: a, age: b})
         
         history('/'); 
       }



return (

<>

<h3>fghdf</h3>

<Form className= 'd-grid gap=2' style={{margin: '15rem'}}>

<Form.Group className="mb-3" controlId="formName">
<Form.Control type='text' placeholder="Enter name" required onChange= {(e)=> setName(e.target.value)}>  
</Form.Control>
</Form.Group>

<Form.Group className="mb-3" controlId="formage"> 
<Form.Control type='text' placeholder="Enter name" required onChange= {(e)=> setAge(e.target.value)}>  
</Form.Control> 

</Form.Group>

<Button onClick={()=> handleSubmit(e)} type='submit' >submit</Button> 
</Form>

</>


)
}

export default Add;












