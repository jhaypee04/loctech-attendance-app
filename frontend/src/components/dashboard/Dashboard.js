import { useState } from 'react'
import Navbar from '../Navbar';
import Header from './Header';
import Nav from './Nav'
import Tabs from './Tabs';

const Dashboard = () => {
    const [ tabToggler, setTabToggler ] = useState('tab1')

    const handleClick = (id) => {
        setTabToggler(id)
    }
    return (
        <>
            <Navbar />
            <div className="parent-container px-3 bg-zinc-200 w-full mx-auto">
                <Header />
                <Nav handleClick={handleClick} />
                <Tabs tabToggler={tabToggler} />
            </div>
        </>
     );
}
 
export default Dashboard;