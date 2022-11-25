import axios from'axios'
const Employer_base_URI= 'http://localhost:8080/api/Employers';
class EmployerService
{
   getAllEmployers()
   {

    return axios.get(Employer_base_URI)
   }
   //this for add
   createEmployers(Employers)
   {

     return axios.post(Employer_base_URI,Employers);

   }
   deleteEmployer(empid)
   {

    return axios.delete(Employer_base_URI+'/'+empid);

   }
   getEmployerById(empid)
   {
     return axios.get(Employer_base_URI+'/'+empid);



   }
   updateEmployer(empid,employers)
   {

      return axios.put(Employer_base_URI+'/'+empid,employers)

   }
   
   
   
   
   

}
export default new EmployerService();