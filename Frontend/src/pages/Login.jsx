import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const loginInitialValues = {
    username: '',
    password: ''
  };
  const signupInitialValues = {
    name: '',
    username: '',
    password: ''
  };

  const navigate = useNavigate()

  const [account, toggleAccount] = useState('login');
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState('');

  const toggleSignup = () => {
    toggleAccount('signup');
  };
  const toggleLogin = () => {
    toggleAccount('login');
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    try {
      console.log('here')
      //let response = await API.userLogin(login)
      if (true) {
        setError('')
        //localStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`)
        //localStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)
        //setAccount({ name: response.data.name, username: response.data.username })
        setIsAuthenticated(true);
        navigate('/')
      } else {
        setError('Something went wrong! please try again later');
      }
    } catch (error) {
      setError('Something went wrong! please try again later');
    }
  }

  const signupUser = async () => {
    try {
      //let response = await API.userSignup(signup)
      if (true) {
        setError('')
        setSignup(signupInitialValues)
        toggleLogin()
      } else {
        setError('Something went wrong! please try again later');
      }
    } catch (error) {
      setError('Something went wrong! please try again later');
    }
  }

  return (
    <div className='w-96 mx-auto mt-12 bg-white rounded-lg shadow-lg'>
      <img src="https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png" alt="Login" className='w-20 mx-auto mt-10' />
      <div className='py-8 px-10 flex flex-col'>
        {account === 'login' ? (
          <>
            <input
              type="text"
              placeholder='Enter Username'
              name='username'
              value={login.username}
              className='mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600'
              onChange={(e) => { onValueChange(e) }}
            />
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              value={login.password}
              className='mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600'
              onChange={(e) => { onValueChange(e) }}
            />

            {error && (<p className='text-xs text-red-500 mt-2 font-semibold'>{error}</p>)}

            <button
              className='bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300'
              onClick={() => loginUser()}
            >
              Login
            </button>
            <p className='text-gray-500 text-center my-4 text-sm'>OR</p>
            <button
              className='bg-white text-blue-600 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 shadow-md'
              onClick={toggleSignup}
            >
              Create an Account
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder='Enter Name'
              name='name'
              value={signup.name}
              className='mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600'
              onChange={(e) => { onInputChange(e) }}
            />
            <input
              type="text"
              placeholder='Enter Username'
              name='username'
              value={signup.username}
              className='mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600'
              onChange={(e) => { onInputChange(e) }}
            />
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              value={signup.password}
              className='mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600'
              onChange={(e) => { onInputChange(e) }}
            />

            {error && (<p className='text-xs text-red-500 mt-2 font-semibold'>{error}</p>)}

            <button
              className='bg-white text-blue-600 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 shadow-md'
              onClick={() => signupUser()}
            >
              Signup
            </button>
            <p className='text-gray-500 text-center my-4 text-sm'>OR</p>
            <button
              className='bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300'
              onClick={toggleLogin}
            >
              Already have an account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login