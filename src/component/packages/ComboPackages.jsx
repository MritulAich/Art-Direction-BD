import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

const ComboPackages = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-fuchsia-300 mt-10 mb-3">Combo Packages</h1>
                    <p className="text-sm text-white">A perfect blend of photography and cinematography for your special moments.</p>
                </div>

                <Tabs className="bg-white bg-opacity-20 rounded-lg p-6">
                    <TabList className="flex justify-center text-neutral-content mb-6 tabs tabs-lifted">
                        <Tab className="px-4 text-white py-2 text-xl focus:outline-none focus:font-medium tab">Standard</Tab>
                        <Tab className="px-4 text-white py-2 text-xl focus:outline-none focus:font-medium tab">Premium</Tab>
                        <Tab className="px-4 text-white py-2 text-xl focus:outline-none focus:font-medium tab">Signature</Tab>
                    </TabList>


                    {/* Standard Packages */}
                    <TabPanel>
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md first-card transition transform duration-700 ease-in opacity-0 delay-600">
                                <h3 className="text-2xl font-bold mb-4">Classic</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 1 Senior Photographer</li>
                                    <li>🎥 1 Senior Cinematographer</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 100 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-blue-600">BDT 13,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md second-card transition transform duration-700 ease-in opacity-0 delay-600">
                                <h3 className="text-2xl font-bold mb-4">Traditional</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 1 Lead Photographer, 1 Senior Photographer</li>
                                    <li>🎥 1 Senior Cinematographer</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 150 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-blue-600">BDT 16,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md third-card transition transform duration-700 ease-in opacity-0 delay-300">
                                <h3 className="text-2xl font-bold mb-4">Dynamic</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 2 Lead Photographers, 1 Senior Photographer</li>
                                    <li>🎥 1 Senior Cinematographer</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 200 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-blue-600">BDT 19,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    {/* Premium Packages */}
                    <TabPanel>
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md first-card transition transform duration-700 ease-in opacity-0 delay-600">
                                <h3 className="text-2xl font-bold mb-4">Elite</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 2 Lead Photographers</li>
                                    <li>🎥 2 Senior Cinematographers</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 200 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-yellow-500">BDT 20,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md second-card transition transform duration-700 ease-in opacity-0 delay-500">
                                <h3 className="text-2xl font-bold mb-4">Unique</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 1 Photographer (CEO & Co-Founder)</li>
                                    <li>📷 2 Senior Photographers</li>
                                    <li>🎥 1 Chief Cinematographer, 1 Senior Cinematographer</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 300 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-yellow-500">BDT 24,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    {/* Signature Packages */}
                    <TabPanel>
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md first-card transition transform duration-700 ease-in opacity-0 delay-600">
                                <h3 className="text-2xl font-bold mb-4">Prestige</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 1 Photographer (CEO), 1 Photographer (Co-Founder), 1 Senior Photographer</li>
                                    <li>🎥 2 Chief Cinematographers</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 400 special edited pictures + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-yellow-500">BDT 30,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md second-card transition transform duration-700 ease-in opacity-0 delay-600">
                                <h3 className="text-2xl font-bold mb-4">Supreme</h3>
                                <ul className="list-disc pl-5 text-lg">
                                    <li>📷 1 Photographer (CEO), 1 Photographer (Co-Founder), 1 Lead Photographer</li>
                                    <li>🎥 2 Chief Cinematographers</li>
                                    <li>👨🏻‍💼 1 Drone Pilot</li>
                                    <li>📸 Unlimited Clicks</li>
                                    <li>📦 All pictures edited + RAW</li>
                                    <li>📦 Promo & Movie</li>
                                    <li>📁 Delivered via Pen Drive</li>
                                </ul>
                                <div className="flex flex-row justify-between">
                                    <p className="text-2xl font-bold mt-4 text-yellow-500">BDT 42,500/-</p>
                                    <Link to='/booking' className="btn btn-warning">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ComboPackages;