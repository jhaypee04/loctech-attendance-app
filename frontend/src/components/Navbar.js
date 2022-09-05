import { useState } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [ open, setOpen ] = useState(false)

    return ( 
        <>
            <nav className="bg-light_blue sm:py-3 sm:pl-2 sm:flex justify-between items-center overflow-hidden">
                <div className="logo  w-4/12 sm:w-1/12 ">
                    <Link to='/'>
                        <img src="images/loctech_logo_red.png" alt="" />
                    </Link>
                </div>
                <div onClick={()=>{setOpen(!open)}} className="burgar_menu font-medium text-2xl absolute right-8 top-6 sm:hidden cursor-pointer">
                    { open ? 'Close' : 'Menu'}
                </div>
                <div className="menu sm:pr-5">
                    <ul className={`sm:flex gap-2 left-0 absolute sm:static w-full text-white transition-all duration-500 ease in ${open ? 'top-16' : 'top-[-490px]'}`}>
                        <li className=" bg-darkest_purple sm:bg-inherit mt-2 sm:mt-0 sm:text-darkest_purple p-2 font-medium cursor-default">Welcome Mr Uzomzii</li>
                        <li className=" bg-red p-2 cursor-pointer transition ease-in-out delay-100 hover:translate-y-1 duration-500 ">
                            <Link to='/addNewClassroom'>Add new classroom</Link>
                        </li>
                        <li className=" bg-darkest_purple p-2 cursor-pointer transition ease-in-out delay-100 active:translate-y-1  hover:bg-dark_blue duration-500">
                            <Link to='/register'>Register</Link>
                        </li>
                        <li className=" bg-darkest_purple p-2 cursor-pointer transition ease-in-out delay-100 active:translate-y-1  hover:bg-dark_blue duration-500">
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className=" bg-darkest_purple p-2 cursor-pointer transition ease-in-out delay-100 active:translate-y-1  hover:bg-dark_blue duration-500">
                            <Link to='/'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;