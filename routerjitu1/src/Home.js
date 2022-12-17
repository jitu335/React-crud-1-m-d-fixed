import react, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom'
import Employees from "./components/Employees";

function Home() {

    let history = useNavigate(); 

    const handleedit = (id, name, age)=> {
    
        localStorage.setItem('Name', name)  
        localStorage.setItem('age', age) 
        localStorage.setItem('id', id)  

    }

const handleDelete = (id)=> { 


var index = Employees.map(function(e) {  
return e.id 

} ).indexOf(id); 

Employees.splice(index, 1) 

history('/')  

}

  return (
    <>
      <Fragment>
        <div style={{ margin: "10rem" }}></div>

        <Table striped bordered hover size="sm"> 
          <thead>
            <tr>
              <th>Name</th>

              <th>Age</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Employees && Employees.length > 0 ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>  

                      <td>{item.age}</td> 
                      <td>
                        <Link to={`/edit`}> 
                        <Button onClick={()=>handleedit(item.id, item.Name, item.age)}>Edit</Button> 
                        </Link> 
                        &nbsp;
                        <Button onClick={()=>handleDelete(item.id)}>Delete</Button> 
                      </td> 

                    </tr>
                  );
                })
              : "No data available"} 
          </tbody>
        </Table>

        <br></br>

        <Link  to='/create'>  

        <Button size="lg">Create</Button> 

        </Link>
      </Fragment> 
    </>
  );
}

export default Home;
