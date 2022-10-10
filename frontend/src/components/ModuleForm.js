const ModuleForm = () => {
  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Module Form</div>

        <form className="bg-gray-200 my-1 px-2 py-2">
          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2">
            <label>Choose the Week</label>
            <select name="weekNo" className="sm:w-2/4 w-full bg-gray-400 ">
              <option value="week1">Week 1</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Select Day of Module</label>
            <select
              name="dayOfModule"
              className="sm:w-2/4 w-full bg-gray-400 "
            >
              <option value="Monday">Monday</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Insert Module</label>
            <input
              type="text"
              name="titleOfModule"
              className="sm:w-3/4 w-full border-4 border-gray-400 rounded-full p-1 px-4"
            />
          </div>
          {/* incude a hidden field for classname */}

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

export default ModuleForm;
