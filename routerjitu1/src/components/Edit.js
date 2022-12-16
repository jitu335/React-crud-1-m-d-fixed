import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useEffect } from "react"; 
import {Button, Form} from 'react-bootstrap' 
import {v4 as uuid } from 'uuid' 
import {Link, useNavigate} from 'react-router-dom' 
import React, { Fragment, useState } from "react";
import Employees from './Employees'; 


function Edit () {

    const [name, setName]=useState('')   
    const [age, setAge]=useState('')
    const [id, setId]=useState('')  

    let history = useNavigate() 

    var index = Employees.map(function(e) { 
        return e.id 
        
        } ).indexOf(id); 


        const handleSubmit = (e) => { 

            e.preventDefult()

            
            let a = Employees[index];  
            a.Name = name;  
            a.age = age; 
             
            
            history('/'); 
           }

           useEffect (()=> { 
 
          setName(localStorage.getItem('Name')) 
          setAge(localStorage.getItem('age')) 
          setId(localStorage.getItem('Id'))  
           }, [])

return (

<>
<h3>fghdf</h3> 

<Form className= 'd-grid gap=2' style={{margin: '15rem'}}>

<Form.Group className="mb-3" controlId="formName">
<Form.Control type='text' placeholder="Enter name" value={name} required onChange= {(e)=> setName(e.target.value)}>  
</Form.Control>
</Form.Group>

<Form.Group className="mb-3" controlId="formage"> 
<Form.Control type='text' placeholder="Enter name" value={age} required onChange= {(e)=> setAge(e.target.value)}>  
</Form.Control> 

</Form.Group>

<Button onClick={()=> handleSubmit(e)} type='submit' >Update</Button> 
</Form> 


</>

)

}

export default Edit;
