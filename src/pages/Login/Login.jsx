import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../../components/Loader/Loader';
import LottieComp from '../../components/LottieComp/LottieComp';
import loginAnimation from '../../assets/images/lottie/login_animation.json'
import { useDispatch, useSelector } from 'react-redux';
import { customerLogin, messageClear } from '../../redux/reducers/auth/authReducers';
import toast from 'react-hot-toast';
import FadeLoader from 'react-spinners/FadeLoader'

const Login = () => {
    const [seePass, setSeePass] = useState(false);
    const dispatch = useDispatch();
    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    // handle login form value
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginData = {
            email,
            password,
        }
        dispatch(customerLogin(loginData))
    }

    // for show error or success message in toast
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage || 'Login Successful')
            dispatch(messageClear())
           if(userInfo){
            navigate('/')
           }
        }
        if (errorMessage) {
            toast.error(errorMessage || 'Not Successful')
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage])


    return (
        <div>
            {
                loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader />
                </div>
            }

            <Headers />
            <div className='bg-slate-200 dark:bg-slate-800 transition-colors duration-300'>
                <div className='w-full justify-center items-center p-10 sm:p-3'>
                    <div className='grid grid-cols-2 w-[60%] md-lg:w-[75%] lg:w-[80%] md:grid-cols-1 md:w-full mx-auto bg-white dark:bg-slate-800 transition-colors duration-300 rounded-md'>
                        <div className='p-8 sm:p-3'>
                            <h2 className='text-center w-full text-xl text-slate-600 dark:text-gray-100 font-bold'>Login</h2>
                            <div>
                                <form onSubmit={handleLogin} className='text-slate-600 dark:text-gray-100'>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor="email">Email</label>
                                        <input required type="email" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md dark:text-slate-600' id='email' name='email' placeholder='email' />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-4'>
                                        <label htmlFor="password">Password</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type={!seePass ? 'password' : 'text'}
                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md dark:text-slate-600' id='password' name='password' placeholder='password' />
                                            <div
                                                onClick={() => setSeePass(!seePass)}
                                                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 dark:text-slate-600">
                                                {
                                                    !seePass ? <FiEye /> : <FiEyeOff />
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {/* submit button */}
                                    <button
                                        disabled={loader ? true : false}
                                        type="submit"
                                        className={`px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md ${loader && 'bg-purple-400'} `}>
                                        {
                                            loader ? <Loader loadingText={'Logging in'} /> : 'Login'
                                        }
                                    </button>
                                </form>

                                <SocialLogin />
                            </div>
                            <div className='text-center text-slate-600 dark:text-gray-100 pt-1'>
                                <p>You have no account ? <Link className='text-blue-500' to='/register'>Register</Link></p>
                            </div>
                        </div>

                        <LottieComp Animation={loginAnimation} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;