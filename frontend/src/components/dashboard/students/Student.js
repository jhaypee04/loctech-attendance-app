

const Student = () => {
    return ( 
        <>
            <div className="p-3 mt-2 text-white bg-dark_blue ">
                <div id="tab4" className="tabs">
                    <header>
                        Students Tab
                    </header>
                    <main>
                        <div className="accordion_container_student">
                            <div className="student_name">Mark Nwodo Augustine</div>

                            <div className="accordion_hidden_student">
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Email(P.)</aside>
                                    <section className='sm:col-span-3 bg-purple-900'>mark@google.com</section>
                                </div>
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Email(S.)</aside>
                                    <section>parent@google.com</section>
                                </div>
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Phone Number(P.)</aside>
                                    <section>07081232322</section>
                                </div>
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Phone Number(S.)</aside>
                                    <section>07081232322</section>
                                </div>
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Gender(S.)</aside>
                                    <section>Male</section>
                                </div>
                                <div className="student_other_details grid sm:grid-cols-4">
                                    <aside className='col-span-1 bg-teal-500'>Date Of Birth(S.)</aside>
                                    <section>01/08/2022</section>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default Student;