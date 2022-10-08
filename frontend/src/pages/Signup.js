const Signup = () => {
  return (
    <>
      <div className="container bg-gray-100 sm:w-3/4 mx-auto">
        <h1 className="bg-gray-200 text-center py-2 my-4">Sign up</h1>

        <div className="sm:flex sm:justify-around">
          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
            <label>Name:</label>
            <input
              type="text"
              name="week"
              className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
            />
          </div>

          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
            <label>Email:</label>
            <input
              type="email"
              name="week"
              className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
            />
          </div>
        </div>

        <div className="sm:flex sm:justify-around">
          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
            <label>Create a Password:</label>
            <input
              type="text"
              name="week"
              className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
            />
          </div>

          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
            <label className="sm:w-2/4">Role:</label>
            <select
              name="gender"
              className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
            >
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center ">
          <input
            type="submit"
            className="sm:w-1/4 w-2/4 bg-gray-50 border-2 border-gray-400 px-1 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
