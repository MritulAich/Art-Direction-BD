import { Link } from "react-router-dom";

const Photography = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-6 pt-20">
            <div className="mb-12 text-center poppins-regular-italic">
            <h1 className="text-4xl font-semibold">Photography Packages</h1>
            <p>Preserve your cherished moments with our professional photographers.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                <div className="w-full p-6 bg-white border rounded-lg shadow-lg flex flex-col items-center transition transform duration-700 ease-in opacity-0 delay-200 first-card">
                    <h2 className="text-3xl font-semibold text-fuchsia-500 mb-4">Primary</h2>
                    <ul className="text-left mb-6">
                        <li className="mb-2">📷 1 Photographer.</li>
                        <li className="mb-2">👨🏻‍💼👨🏻‍💼 Choice of anyone from our senior photographers.</li>
                        <li className="mb-2">📸 Unlimited Clicks.</li>
                        <li className="mb-2">📦 Delivery of Raw + <span className="font-semibold">100</span> special edited pictures via Google Drive.</li>
                    </ul>
                    <p className="text-xl font-bold text-gray-700 mb-6">BDT 5,500/-</p>
                    <Link className="btn btn-warning">Book Now</Link>
                </div>

                <div className="w-full p-6 bg-white border rounded-lg shadow-lg flex flex-col items-center transition transform duration-700 ease-in opacity-0 delay-600 second-card">
                    <h2 className="text-3xl font-semibold text-fuchsia-500 mb-4">Standard</h2>
                    <ul className="text-left mb-6">
                        <li className="mb-2">📷 2 Photographers.</li>
                        <li className="mb-2">👨🏻‍💼👨🏻‍💼 Choice of anyone from our lead photographers.</li>
                        <li className="mb-2">📸 Unlimited Clicks.</li>
                        <li className="mb-2">📦 Delivery of Raw + <span className="font-semibold">200</span> special edited pictures via Google Drive.</li>
                    </ul>
                    <p className="text-xl font-bold text-gray-700 mb-6">BDT 8,500/-</p>
                    <Link className="btn btn-warning">Book Now</Link>
                </div>

                <div className="w-full p-6 bg-white border rounded-lg shadow-lg flex flex-col items-center transition transform duration-700 ease-in opacity-0 delay-900 third-card md:col-span-2 lg:col-span-1 md:mx-auto">
                    <h2 className="text-3xl font-semibold text-fuchsia-500 mb-4">Premium</h2>
                    <ul className="text-left mb-6">
                        <li className="mb-2">📷 3 Photographers.</li>
                        <li className="mb-2">👨🏻‍💼👨🏻‍💼 Choice of anyone from our CEO and Co-Founder.</li>
                        <li className="mb-2">📸 Unlimited Clicks.</li>
                        <li className="mb-2">📦 Delivery of Raw + <span className="font-semibold">300</span> special edited pictures via PenDrive.</li>
                    </ul>
                    <p className="text-xl font-bold text-gray-700 mb-6">BDT 13,500/-</p>
                    <Link className="btn btn-warning">Book Now</Link>
                </div>
            </div>
        </div>

    );
};

export default Photography;