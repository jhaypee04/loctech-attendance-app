import data from './db/Navdb'

const Nav = ({ handleClick }) => {
    return ( 
        <>
            <div className='nav flex gap-3 overflow-x-scroll '>
                { data.map((tab) => {
                    const { id, tabName } = tab
                    return (
                        <span  
                            key={id} 
                            className="tab-toggler p-2 mt-2 text-white bg-darkest_purple  transition ease-in-out delay-100 hover:translate-y-1  hover:bg-dark_blue duration-1000 "
                            onClick={ () => { handleClick(id)}}
                        >
                            {tabName}
                        </span>
                    )
                })}
            </div>
        </>
     );
}
 
export default Nav;