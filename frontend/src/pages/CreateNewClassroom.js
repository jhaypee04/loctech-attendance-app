const CreateNewClassroom = () => {
  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">+Create New Classroom</div>

        <form className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Class Name</label>
            <input
              type="text"
              name="classname"
              className="sm:w-3/4 w-full border-gray-400 border-2 pl-2"
            />
          </div>

          <div className="bg-gray-300 mt-4 pb-1">
            <h1 className="border-b-2 border-white text-center">
              Select The Class Days
            </h1>

            <div>
              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Monday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Tuesday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Wednesday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Thursday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Friday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Saturday</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Sunday</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Number of Weeks</label>
            <input
              type="number"
              name="classduration"
              className="sm:w-3/4 w-full border-gray-400 border-2 pl-2"
            />
          </div>

          <div className="text-center">
            <input
              type="submit"
              className="bg-gray-300 border-2 border-gray-400 mt-2 py-0.5 px-4 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNewClassroom;
