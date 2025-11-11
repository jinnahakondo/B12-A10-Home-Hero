import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Components/Loader/Loader';

const Profile = () => {
    const { user, loading } = useAuth()

    // if (loading) {
    //     return <Loader />
    // }
    return (
        <div className='max-w-3xl rounded-2xl mx-5 md:mx-auto bg-white mt-20 p-7'>
            {/* user info */}
            <div className='flex gap-4 flex-col md:flex-row items-center mb-4 '>
                <img src="" className='rounded-full h-16 w-16' />
                <div>
                    <h3 className='text-lg font-semibold max-md:text-center'>{user.displayName}</h3>
                    <p className='text-gray-500'>{user.email}</p>
                </div>
            </div>
            <div className='h-0.5 w-full border border-gray-200'></div>
            {/* name  */}
            <div className='py-7 '>
                <h4 className='font-semibold'> Name</h4>
                <input type="text" name="name" className='border-b border-gray-300 outline-0 w-full text-gray-500' />
            </div>
            {/* email  */}
            <div className='pb-7 '>
                <h4 className='font-semibold'> email</h4>
                <input type="email" readOnly defaultValue='jinnahakodon@gmail.com' className='border-b border-gray-300 outline-0 w-full text-left text-gray-500' />
            </div>
            <div className='pb-7 '>
                <h4 className='font-semibold'> photo URL</h4>
                <input type="text" className='border-b border-gray-300 outline-0 w-full text-left text-gray-500' />
            </div>
            <button className="btn btn-primary mt-4 hover">Save Change</button>
        </div>
    );
};

export default Profile;