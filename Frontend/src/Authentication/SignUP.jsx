import React, { useState } from 'react';
import './Authentication.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignUP() {
    document.title = 'ShopLand || SignUp'

    const alert = {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    };

    const navigate = useNavigate();
    const createAccount = () =>{
        navigate('/Login');
    };

    const [eye, setEye] = useState('fa-eye-slash');
    const [input, setInput] = useState('password');
    const eyeToggle = () =>{
        setEye(`${eye === 'fa-eye-slash' ? 'fa-eye' : 'fa-eye-slash'}`);
        setInput(`${input === 'password' ? 'text' : 'password'}`);
    };


    // backend functionality start
    //   localStorage.setItem('UserInfo', 'user Not login');

    const [inputData, setInputData] = useState({
        name : '',
        email : '',
        password : ''
    })
    const handleChange = (e) =>{
        setInputData({...inputData, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const { name, email, password } = inputData;

        if(name.length < 3){
            toast.error('Name must be at least 3 character!', alert);
        }
        else if(!email.includes('@gmail.com') || !email === ''){
            toast.error('Please enter a valid email!', alert);
        }
        else if(password.length < 6){
            toast.error('Password must be at least 6 character!', alert);
        }
        else{
            const {data} = await axios.post('https://react-e-commerce-backend-i8qa.onrender.com/api/auth/signup',{
                name,
                email,
                password
            })
            console.log(data)
            if(data.status === 'true'){
                toast.success('Account create successfully', alert);
                localStorage.setItem('UserInfo', JSON.stringify(data.user));
                setTimeout(()=>{
                    navigate('/');
                }, 2000);
            }
            if(data.status === 'false'){
                toast.error(data.msg, alert);
            }
        }
    }
  // backend functionality end
  return (
    <div>
      <Navbar/>
      <div className="container">
          <h5>
            <Link to='/'><i className="text-dark fa-solid fa-house"></i></Link>
            / SignUP
          </h5>
          <div className='authentication-form-aria'>
              <form onSubmit={handleSubmit} className='authentication'>
                  <p className='m-0 text-primary'>Create your account</p>

                  <label htmlFor="name">Name</label>
                  <input onChange={handleChange} type="text" name="name" id="name" placeholder='Your name..' autoFocus />

                  <label htmlFor="email">Email</label>
                  <input onChange={handleChange} type="email" name="email" id="email" placeholder='Your email..' />

                  <label htmlFor="password">Password</label>
                  <input onChange={handleChange} type={`${input}`} name="password" id="password" className='password-inp-box' placeholder='Your password..'  />
                  <i onClick={eyeToggle} className={`fa-solid ${eye} eye-toggle`}></i>

                  <button className='mt-4 submit-btn' type='submit'>Submit</button>
                  <p className='do-not-have-account'>Already have an account?</p>
                  <button className='submit-reserve-btn' onClick={createAccount}>Login</button>
              </form>
          </div>
      </div>
      <ToastContainer 
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition = {Bounce}
            />
      <Footer/>
    </div>
  )
}

export default SignUP