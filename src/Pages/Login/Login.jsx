import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { login, setLoading, googleSignIn } = useAuth()
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                console.log(result.user);
                setLoading(false)
            })
            .catch(error => {
                console.log(error.code);
            })
    }
    //google signin
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.code);
            })
    }
    return (
        <div className='w-full '>
            <div className='bg-base-200 shadow-md mx-auto max-w-[320px] p-7 rounded-2xl'>
                <h2 className='text-xl font-semibold text-center mt-5 mb-3'>Login to account</h2>
                <p className='text-center mb-5'>Access to our all services or service
                    providers </p>
                <form className='w-full' onSubmit={handelLogin}>
                    {/* email  */}
                    <div>
                        <label className="label">Email</label>
                        <input type="email"
                            name='email'
                            className="input"
                            placeholder="example@gmail.com" />
                    </div>
                    {/* password  */}
                    <div>
                        <label className="label">Password</label>
                        <input type="password"
                            name='password'
                            className="input"
                            placeholder="******" />
                    </div>
                    {/* forget password */}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                </form>
                <div className='text-center my-4'>
                    <p className=''>or</p>
                    {/* Google */}
                    <button
                        onClick={handelGoogleSignIn}
                        className="btn w-full py-3 my-3 bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <Link to={'/auth/register'} className='text-blue-600'>Create new Account</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;