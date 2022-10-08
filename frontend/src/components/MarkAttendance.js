const MarkAttendance = () => {
  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Mark Attendance</div>

        <form className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Select a Week</label>
            <select name="week" className="sm:w-20 w-full bg-gray-400 ">
              <option value="week 1">Week 1</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Select Day of Attendance</label>
            <select
              name="dayOfAttendance"
              className="sm:w-20 w-full bg-gray-400 "
            >
              <option value="Monday">Monday</option>
            </select>
          </div>

          <div className="bg-gray-300 mt-4 pb-1">
            <h1 className="border-b-2 border-white text-center">
              Mark Students
            </h1>

            <div>
              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Michael</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Philip</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Joseph</label>
                <input type="checkbox" />
              </div>

              <div className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                <label>Uzomzii</label>
                <input type="checkbox" />
              </div>
            </div>
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

export default MarkAttendance;
