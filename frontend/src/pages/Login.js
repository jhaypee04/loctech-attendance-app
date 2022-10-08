import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('instructor')
  const { login, error, isLoading } = useLogin()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email,password,role)
    console.log(email,password,role)
  }

  return (
    <>
      <div className="container bg-gray-100 sm:w-3/4 mx-auto">
        <h1 className="bg-gray-200 text-center py-2 my-4">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="sm:flex sm:justify-around">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Email:</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2">
              <label>Role:</label>
              <select
                onChange={(e) => setRole(e.target.value)}
                value={role}
                className="sm:w-3/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              >
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              disabled={isLoading}
              type="submit"
              className="sm:w-1/4 w-2/4 bg-gray-50 border-2 border-gray-400 px-1 cursor-pointer"
            > Log in</button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </form>
        
      </div>
    </>
  );
};

export default Login;
