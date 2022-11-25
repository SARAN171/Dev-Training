import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Link}from  'react-router-dom'
import ListEmployers from './Components/ListEmployers';
import AddEmployers from './Components/AddEmployers';
import UpdateEmployers from './Components/UpdateEmployers';
function App() {
  return (
    <div className="Container">
      <BrowserRouter>
       <Routes>
      <Route exact path='/' element={<ListEmployers/>}></Route>
      <Route  path='/listemployer' element={<ListEmployers/>}></Route>
      <Route  path='/addemployers' element={<AddEmployers/>}></Route>
      <Route  path='/updateemployers/:id' element={<UpdateEmployers/>}></Route>



       </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
