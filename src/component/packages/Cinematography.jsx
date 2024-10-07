import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cinematography = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-6 pt-16">
            
            <div className="text-center mb-10">
                <h1 className="text-5xl text-fuchsia-300 mt-10 mb-3">Cinematography Packages</h1>
                <p className="text-sm text-white">Capture the essence of your story with our expert cinematographers.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                <div className="bg-white bg-opacity-10 border rounded-lg p-6 text-center shadow-lg first-card transition transform duration-700 ease-in opacity-0 delay-200">
                    <h2 className="text-2xl font-semibold text-white mb-12 underline">Primary</h2>
                    <div className="flex flex-row items-center gap-6">
                        <div className="text-5xl mb-4 text-white w-28">
                            <img src="/public/videography1.png" alt="" />
                        </div>
                        <div>
                            <ul className="text-left text-white mb-4">
                                <li>🎥 1 Cinematographer</li>
                                <li>👨🏻‍💼👨🏻‍💼 Choice of anyone from our senior cinematographers</li>
                                <li>📦 Delivery of RAW + Promo & Movie by Google Drive</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg mb-3 font-semibold text-yellow-500">BDT 5,500/-</p>
                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                </div>


                <div className="bg-white bg-opacity-10 border rounded-lg p-6 text-center shadow-lg second-card transition transform duration-700 ease-in opacity-0 delay-600">
                    <h2 className="text-2xl font-semibold text-white mb-12 underline">Standard</h2>
                    <div className="flex flex-row items-center gap-6">
                        <div className="text-5xl mb-4 text-white w-28">
                            <img src="/public/videography2.png" alt="" />
                        </div>
                        <div>
                            <ul className="text-left text-white mb-4">
                                <li>🎥 2 Cinematographers</li>
                                <li>👨🏻‍💼👨🏻‍💼 Choice of anyone from our chief cinematographers</li>
                                <li>📦 Delivery of RAW + Promo & Movie by Google Drive</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg mb-3 font-semibold text-yellow-500">BDT 10,500/-</p>
                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                </div>


                <div className="bg-white bg-opacity-10 border rounded-lg p-6 text-center shadow-lg md:col-span-2 lg:col-span-1 third-card transition transform duration-700 ease-in opacity-0 delay-300">
                    <h2 className="text-2xl font-semibold text-white mb-12 underline">Premium</h2>
                    <div className="flex flex-row items-center gap-6">
                        <div className="text-5xl mb-4 text-white w-28">
                            <img src="/public/cameraman3.png" alt="" />
                        </div>
                        <div>
                            <ul className="text-left text-white mb-4">
                                <li>🎥 2 Chief Cinematographers</li>
                                <li>🛰 1 Drone Pilot</li>
                                <li>📦 Delivery of RAW + Promo & Movie by PenDrive</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg mb-3 font-semibold text-yellow-500">BDT 16,500/-</p>
                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                </div>
            </div>

            <Helmet>
                <title>Cinematography Packages</title>
            </Helmet>
        </div>
    );
};

export default Cinematography;