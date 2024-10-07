import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const formRef = useRef(null);

    const handleSubscribe = (e) => {
        e.preventDefault();
        toast("You've successfully been subscribed");
        formRef.current.reset();
    }

    return (
        <div className="card bg-none border-2 border-gray-600 mr-2 mb-2 w-96">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">Stay up-to-date with the latest updates and offers</h2>
                <form ref={formRef} className="join" onSubmit={handleSubscribe}>
                    <input
                        type="email" name="email"
                        placeholder="user@gmail.com"
                        className="input input-bordered join-item text-black" required/>
                    <button className="btn btn-secondary join-item">Subscribe</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Newsletter;