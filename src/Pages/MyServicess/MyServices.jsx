import React, { useEffect, useRef, useState } from 'react';
import useSecureAxios from '../../Hooks/useSecureAxios';
import useAuth from '../../Hooks/useAuth';
import { MdDelete, MdEditDocument } from "react-icons/md";
import { Link } from 'react-router';

const MyServices = () => {
    const { user } = useAuth()
    const instance = useSecureAxios()
    const [myservice, setMyService] = useState([])

    useEffect(() => {
        instance.get(`my-services?email=${user.email}`)
            .then(data => {
                setMyService(data.data);
            })
    }, [instance, user])


    // handel Delete
    const handelDelete = (id) => {
        console.log("delete", id);
    }
    return (
        <div className='max-w-7xl mx-auto px-5'>

            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Service Info</th>
                            <th>Category</th>
                            <th>Creading Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myservice.map((service, i) => <tr key={service._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={service.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{service.title}</h4>
                                    </div>
                                </div>
                            </td>
                            <td className=''>{service.Category}</td>
                            <td>{service.created_at}</td>
                            <th>
                                <Link to={`/update-service/${service._id}`} className="btn btn-primary text-xl px-5 mr-7"><MdEditDocument /></Link>
                                <button onClick={handelDelete} className="btn btn-error text-white text-xl px-5"><MdDelete /></button>
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyServices;