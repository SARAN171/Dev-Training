import React,{useState,useEffect} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import EmployerService from "../Services/EmployerService";

const UpdateEmployers=()=>
{
    const[empname,setempname]=useState('')
    const[email,setemail]=useState('')
    const[date,setdate]=useState('')
    const[empaddress,setempaddress]=useState('')
    const[mobnum,setmobnum]=useState('')
   
    const history=useNavigate();
    const {id}=useParams();


useEffect(
      ()=>{
        getEmployerById();



      },[]



)


 const getEmployerById=()=>
 { EmployerService.getEmployerById(id).then(
         (Response)=>
         {

           setempname(Response.data.empname)
           setemail(Response.data.email)
           setdate(Response.data.date)
           setempaddress(Response.data.empaddress)
           setmobnum(Response.data.mobnum)

         }





 ).catch(
        error=>
        {

          console.log(error)

        }
)
}
  const updateemployers=(e)=>
  {
    e.preventDefault();
    const Employer={empname,email,date,empaddress,mobnum}
    EmployerService.updateEmployer(id,Employer).then(
        (Response)=>
        {
           
            history('/listemployer');


        } 


    ).catch(
        error=>
          {
           console.log(error)
          }



    )



  }




  return(

    <div>
     <br></br>
     <br></br>

        <div className='container'>
            <div className='card-body'>
            <form>
              <div className='row'>
              <label>Employer Name</label>
              <input type="text" placeholder='Enter empname' name='empname' 
              className='form-control'
               value={empname} 
               onchange={(e)=>setempname(e.target.value)}></input>
             </div>
             <div className='row'>
              <label>Employer email :</label>
              <input type="text" placeholder='Enter  email' name='email' 
              className='form-control' 
              value={email}
               onchange={(e)=>setemail(e.target.value)}></input>
              </div>

            
              
              <div className='row'>
              <label>Employer date :</label>
              <input type="text" placeholder='Enter  date' name='date'
               className='form-control'
                value={date} 
                onchange={(e)=>setdate(e.target.value)}></input>
              </div>


              <div className='row'>
              <label>Employer mobnum :</label>
              <input type="text" placeholder='Enter mobnum' name='mobnum' 
              className='form-control'
               value={mobnum}
                onchange={(e)=>setmobnum(e.target.value)}></input>
              </div>

              <div className='row'>
              <label>Employer Address :</label>
              <input type="text" placeholder='Enter empaddress' name='empaddress'
               className='form-control'
                value={empaddress}
                 onchange={(e)=>setempaddress(e.target.value)}></input>
              </div>

              <br></br>
              <button className='btn btn-success' onClick={(e)=>updateemployers(e)} >UpdateEmployers</button>
              <Link to='/listemployer' className='btn btn-danger'>Cancel</Link>






            </form>

            </div>

        </div>
    </div>

 )

}
export default UpdateEmployers
