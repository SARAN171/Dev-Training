import React,{useState,useEffect} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import EmployerService from '../Services/EmployerService'

const AddEmployers=()=>{

    const[empname,setempname]=useState('')
    const[email,setemail]=useState('')
    const[date,setdate]=useState('')
    const[empaddress,setempaddress]=useState('')
    const[mobnum,setmobnum]=useState('')
   
    const history=useNavigate();
    ///const {id}=useparams();

    const saveemployer=(e)=>
    {

       e.preventDefault();
       const Employer={empname,email,date,empaddress,mobnum}

       EmployerService.createEmployers(Employer).then(
          
        (Response)=>
        {
           console.log(Response.data)
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
                <button className='btn btn-success' onClick={(e)=>saveemployer(e)}>saveemployer</button>
                <Link to='/listemployer' className='btn btn-danger'>Cancel</Link>






              </form>

              </div>

          </div>
      </div>

   )

}
export default AddEmployers