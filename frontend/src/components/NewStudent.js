const NewStudent = () => {
  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Add New Student</div>

        <form className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-around">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Student Name:</label>
              <input
                type="text"
                name="week"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Student Email:</label>
              <input
                type="email"
                name="week"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-around">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Parent Name:</label>
              <input
                type="text"
                name="week"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Parent Phone No.:</label>
              <input
                type="number"
                name="week"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-around ">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Student Phone No.:</label>
              <input
                type="number"
                name="week"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Gender:</label>
              <select
                name="gender"
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2">
              <label className="">Date of Birth:</label>
              <input
                type="date"
                name="week"
                className="sm:w-3/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <input
              type="submit"
              className="sm:w-1/4 w-2/4 bg-gray-50 border-2 border-gray-400 px-1 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewStudent;
