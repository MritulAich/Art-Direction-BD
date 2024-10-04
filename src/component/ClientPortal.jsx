import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";

const ClientPortal = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booking/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            })
                            const remaining = booking.filter(cof => cof._id !== _id);
                            setBooking(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div className="text-right flex flex-col items-end lg:mr-40">
            <h3 className="text-2xl m-5 mb-0">🤗Welcome {user?.displayName}</h3>
            <h2 className="text-lg m-5 mt-0">We are pleased to have you onboard.</h2>


            <div className="overflow-x-clip lg:max-w-3xl">
                <table className="table bg-slate-100">
                    <thead>
                        <tr className="text-lg bg-black bg-opacity-20">
                            <th>Service</th>
                            <th>Package</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {booking.length > 0 ? (
                        booking.map(bookingItem =>
                            <tbody key={bookingItem._id}>
                                <tr className="text-lg">
                                    <td>{bookingItem.service}</td>
                                    <td>{bookingItem.photographyPackage || bookingItem.cinematographyPackage || bookingItem.comboPackage}</td>
                                    <td>{bookingItem.date}</td>
                                    <td className="flex flex-row gap-1">
                                        <div>
                                            <Link to={`/update/${bookingItem._id}`}>
                                                <div className="btn bg-green-600 text-xl tooltip tooltip-bottom pt-3" data-tip='Update'><GrUpdate /></div>
                                            </Link>
                                        </div>
                                        <div onClick={() => handleDelete(bookingItem._id)} className="btn bg-red-500 text-black text-xl tooltip tooltip-bottom pt-3" data-tip='Delete'><MdDelete /></div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    ) :
                        <tbody>
                            <tr>
                                <td colSpan="4" className="text-center">No bookings available</td>
                            </tr>
                        </tbody>
                    }
                </table>

            </div>
        </div >
    );
};

export default ClientPortal;