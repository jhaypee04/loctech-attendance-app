import {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const [togglePassword, setTogglePassword] = useState('password')
    const [register, setRegister] = useState(false)
//     const [registrationInfo, setRegistrationInfo] = useState({fullName,email,password})

//     useEffect(()=>{
     //    fetch('http://localhost:4000/register')
     //    .then((response)=>{
     //        return response.json()
     //    })
     //    .then((result)=>{
     //        setData(result)
     //    })
//     },[])

    const handleSubmit = (e) => {
          e.preventDefault()
          const registrationInfo = {fullName, email, password}
          console.log(registrationInfo)

          fetch('http://localhost:4000/register', {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(registrationInfo)
          })
          .then((response) => response.json())
          .then((data) => {
               console.log('Success:', data);
               setRegister(true)
          })
          .catch((error) => {
               console.error('Error:', error);
          });
    }

    return (
       <>
            <Navbar />
            {/* {registrationInfo.fullName} */}
            <div className="container sm:flex">
               <div className="two-circles sm:bg-two-circles bg-contain  sm:w-8/12 test h-screen hidden sm:block"></div>
               <div className=" bg-two-circles bg-contain test">
                    <form onSubmit={handleSubmit} className='form' method='POST'>
                         <label htmlFor="fullname">Full Name: </label>
                         <input type="text" id='fullname' name='fullname' placeholder='fullname' onChange={(e)=>{setFullName(e.target.value)}} value={fullName}/>

                         <label htmlFor="email">Email: </label>
                         <input type="email" id='email' name='email' placeholder='youremail@mailer.com' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>

                         <label htmlFor="password">Password: </label>
                         <input type="password" id='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>

                         <input type="submit" value="Register" className=''/>
                    </form>
                    {register && <Redirect to='/dashboard' push={true} />}
               </div>
            </div>
       </>
     );
}
 
export default Register;