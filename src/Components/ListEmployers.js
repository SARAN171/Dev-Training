import React,{UseState,useEffect, useState} from 'react'
import EmployerService from '../Services/EmployerService'
import {Link} from 'react-router-dom'
const ListEmployers=()=>
{

   const[employers,setemployers]=useState([])


   useEffect(
        ()=>
        {
           getAllEmployers();

        },[]


   )


   const getAllEmployers=()=>
   {


    EmployerService.getAllEmployers().then(
           (Response)=>
           {
               setemployers(Response.data);

           }

    ).catch(
        error=>
        {

            console.log(error);
        }
    )
   }

 const deleteEmployers=(empid)=>
 {
     EmployerService.deleteEmployers(empid).then(
         (Response)=>
         {

            getAllEmployers();

         }


     ).catch(
         error=>
         {

           console.log(error);

         }



     )



 }


       return(
        <div className='container'>
        <h2>Employer Details</h2>
        <br></br>
        <br></br>
        <Link to="/addemployers" className="btn btn-primary mb-2">Add New Employer</Link>
        <br></br>
        <table className='table table-bordered'>

         
        
         <thead>    
       
        <th>Employer name</th>
        <th>Employer Email</th>
        <th>Employer date</th>
        <th>Employer Address</th>
        <th>Employer number</th>
        <th>Actions</th>
        </thead>
        <tbody>
            {
               employers.map(
                  employers=>
                  <tr key={employers.id}>
                  <td>{employers.id}</td>
                  <td>{employers.empname}</td>
                  <td>{employers.email}</td>
                  <td>{employers.date}</td>
                  <td>{employers.mobnum}</td>
                  <td>{employers.empaddress}</td>
                
                  <td>
                  <Link to={`/updateemployers/${employers.id}`} className="btn btn-primary mb-2">UpdateEmployers</Link>
                  <button type="button" onClick={()=>deleteEmployers(employers.id)}class="btn btn-Danger">Delete</button>&nbsp;
                 </td>
                 </tr>
                )
            }
             </tbody>
             </table>
        </div>
    )
}
export default ListEmployers