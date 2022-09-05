

const Week = () => {
    return ( 
        <>
            {/* <!-- Weeks Tab --> */}
            <div className=" pb-2 mt-2 text-white bg-dark_blue">
                <div id="tab1" className="tabs show">
                    <header className="mb-2 border-b-2 py-2 pl-3">Weeks Tab</header>
                    <main className='grid sm:grid-cols-4 px-3 pt-1 '>
                        <aside className='col-span-1 sm:pr-4 '>
                            <div className="select-header text-center py-2">
                                Choose a Week
                            </div>
                            <div className="form-container">
                                    <div className="module">
                                        <form action="#">
                                            <select className="form-select  w-full  pl-2 py-2 mb-2 text-black font-medium font-[Poppins]" >
                                                {/* <!-- The Options should be DYNAMICALLY SET from the number of weeks the instructor inserted while filling the Create new class form --> */}
                                                <option >Choose a Week</option>
                                                <option value="week1">Week 1</option>
                                                <option value="week2">Week 2</option>
                                                <option value="week3">Week 3</option>
                                                <option value="week4">Week 4</option>
                                                <option value="week5">Week 5</option>
                                                <option value="week6">Week 6</option>
                                                <option value="week7">Week 7</option>
                                                <option value="week8">Week 8</option>
                                                <option value="week9">Week 9</option>
                                                <option value="week10">Week 10</option>
                                                <option value="week11">Week 11</option>
                                                <option value="week12">Week 12</option>
                                            </select>
                                        </form>
                                    </div>
                            </div>
                        </aside>
                        <section  className='col-span-1 sm:col-span-3 '>
                            <h1 className=" bg-red  text-center py-2">Days</h1>
                            <div className="bg-darkest_purple">
                                <div className="day  border-b-2 border-red pb-3 hover:bg-dark_blue hover:border-x-2" >
                                    <div className="day-header pl-2 py-2  transition ease-in-out delay-100 hover:translate-x-1 duration-1000">
                                        Monday
                                    </div>
                                    <div className="form-container">
                                        <form action="">
                                            <div className="module px-2">
                                                <input type="text" className="form-control w-full  pl-2 py-2 mb-2 text-black font-medium font-[Poppins]" placeholder="Module" />
                                            </div>
                                            <div className="submit text-center">
                                                <input type="submit" className="btn bg-light_blue rounded-full px-3 py-1 cursor-pointer" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="day border-b-2 border-red pt-2 pb-3  hover:bg-dark_blue hover:border-x-2">
                                    <div className="day-header pl-2 pb-2 transition ease-in-out delay-100 hover:translate-x-1 duration-1000">
                                        Wednesday
                                    </div>
                                    <div className="form-container">
                                        <form action="">
                                            <div className="module  px-2">
                                                <input type="text" className="form-control w-full  pl-2 py-2 mb-2 text-black font-medium font-[Poppins]" placeholder="Module" />
                                            </div>
                                            <div className="submit text-center">
                                                <input type="submit" className="btn  bg-light_blue rounded-full px-3 py-1 cursor-pointer" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="day border-b-2 border-red pt-2  pb-3 hover:bg-dark_blue hover:border-x-2">
                                    <div className="day-header pl-2 pb-2 transition ease-in-out delay-100 hover:translate-x-1 duration-1000">
                                        Friday
                                    </div>
                                    <div className="form-container">
                                        <form action="">
                                            <div className="module  px-2">
                                                <input type="text" className="form-control w-full  pl-2 py-2 mb-2 text-black font-medium font-[Poppins]" placeholder="Module" />
                                            </div>
                                            <div className="submit text-center">
                                                <input type="submit" className="btn  bg-light_blue rounded-full px-3 py-1 cursor-pointer" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default Week;