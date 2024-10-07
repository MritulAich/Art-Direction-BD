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
        <div className="border-2 border-gray-600 mr-2 mb-2 rounded lg:w-96 md:w-96 w-72 ">
            <div className="p-3 md:p-6 lg:p-8 text-center space-y-2">
                <h2 className="lg:text-xl md:text-xl font-semibold">Stay up-to-date with the latest updates and offers</h2>
                <form ref={formRef} className="join" onSubmit={handleSubscribe}>
                    <input
                        type="email" name="email"
                        placeholder="user@gmail.com"
                        className="pl-1 -mr-4 join-item text-black" required/>
                    <button className="btn btn-secondary join-item">Subscribe</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Newsletter;