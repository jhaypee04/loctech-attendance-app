import {useState} from 'react'
import Navbar from './Navbar'

const Login = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const [togglePassword, setTogglePassword] = useState('password')

    return (
       <>
            <Navbar />
            <div className="container sm:flex">
               <div className="two-circles sm:bg-two-circles bg-contain  sm:w-8/12 test h-screen hidden sm:block"></div>
               <div className=" bg-two-circles bg-contain test">
                    <form className='form'>
                         <label htmlFor="email">Email: </label>
                         <input type="email" id='email' name='email' placeholder='youremail@mailer.com'/>

                         <label htmlFor="password">Password: </label>
                         <input type="password" id='password' name='password' />

                         <input type="submit" value="Login" className=''/>
                    </form>
               </div>
            </div>
       </>
     );
}
 
export default Login;