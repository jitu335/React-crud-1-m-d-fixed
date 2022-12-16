import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Employees from './components/Employees';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

function App() { 
  return ( 
    <div className="App"> 
      
      <h1></h1>

      <Router>
        <Routes>
          <Route path='/' element={<Home/> } /> 

           <Route path='/create' element={<Add/>} />  
           <Route path='/edit' element={<Edit/>} />  
        </Routes>
      </Router>
 
      
    
   
    </div>
  );
}

export default App;
