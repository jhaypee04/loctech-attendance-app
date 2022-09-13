import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const [togglePassword, setTogglePassword] = useState('password')
    const [login, setLogin] = useState(false)

    const handleSubmit = (e) => {
     e.preventDefault()
     const loginInfo = {email, password}
     console.log(loginInfo)

     fetch('http://localhost:4000/login', {
          method: "POST",
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
     })
     .then((response) => response.json())
          .then((data) => {
               console.log('Success:', data);
               setLogin(true)
          })
          .catch((error) => {
               console.error('Error:', error);
          });
    }

    return (
       <>
            <Navbar />
            <div className="container sm:flex">
               <div className="two-circles sm:bg-two-circles bg-contain  sm:w-8/12 test h-screen hidden sm:block"></div>
               <div className=" bg-two-circles bg-contain test">
                    <form onSubmit={handleSubmit} className='form' method='POST'>
                         <label htmlFor="email">Email: </label>
                         <input type="email" id='email' name='email' placeholder='youremail@mailer.com' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>

                         <label htmlFor="password">Password: </label>
                         <input type="password" id='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>

                         <input type="submit" value="Login" className=''/>
                    </form>
                    {login && <Redirect to='/dashboard' push={true} />}
               </div>
            </div>
       </>
     );
}
 
export default Login;