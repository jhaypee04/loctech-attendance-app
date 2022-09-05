import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const HomePage = () => {
    return ( 
        <>
            <Navbar />
            <main>
                <div className="grid sm:grid-cols-3 gap-10 justify-around p-10">
                    <Link to='/dashboard'>
                        <div className="cards bg-black col-span-1 p-40 sm:p-20">Card1</div>
                    </Link>
                    <div className="cards bg-black col-span-1 p-40 sm:p-20">Card2</div>
                    <div className="cards bg-black col-span-1 p-40 sm:p-20">Card3</div>
                    <div className="cards bg-black col-span-1 p-40 sm:p-20">Card4</div>
                    <div className="cards bg-black col-span-1 p-40 sm:p-20">Card5</div>
                    <div className="cards bg-black col-span-1 p-40 sm:p-20">Card6</div>
                </div>
            </main>
        </>
     );
}
 
export default HomePage;