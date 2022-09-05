import Navbar from './Navbar'

const LandingPage = () => {
    return ( 
        <>
            <Navbar />
            <main className='landingPage'>
                <div className="container sm:flex sm:flex-row-reverse">
                    <section className="sm:w-8/12 sm:text-left text-right">
                        <h1 className=" text-4xl sm:text-5xl tracking-wide pt-5 mr-2 sm:mr-0">CLASS REGISTRY</h1>
                        <p className=" mr-4 sm:mr-0">Plus up your tech skills with one click</p>
                    </section>
                    <aside className="bg-hero w-full bg-contain sm:bg-auto sm:w-9/12 test h-screen "></aside>
                    
                </div>
            </main>
        </>
     );
}

export default LandingPage