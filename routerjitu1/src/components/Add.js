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

        e.preventDefault();  

        const ids = uuid(); 

        let uniqueId = ids.slice(0,8)  
        
        let a = name, 
         b = age 

         Employees.push({id: uniqueId, Name: a, age: b}) 
         
         history('/'); 
       }



return (
<>
<Form className= 'd-grid gap=2' style={{margin: '15rem'}}>

<Form.Group className="mb-3" controlId="formName">
<Form.Control  placeholder="Enter name" required onChange= {(e)=> setName(e.target.value)}>  
</Form.Control>
</Form.Group>

<Form.Group className="mb-3" controlId="formage"> 
<Form.Control  placeholder="Enter age" required onChange= {(e)=> setAge(e.target.value)}>  
</Form.Control> 
</Form.Group>

<Button onClick={(e)=> handleSubmit(e)} type='submit' >submit</Button> 

</Form>
</>

)
}
export default Add;












