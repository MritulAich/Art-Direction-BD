import { Helmet } from "react-helmet";
import { BsFillCameraFill } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431782/459412821_1054210130047773_2001546740444766039_n.jpg_fs87r3.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="lg:mb-[120px] md:mb-[80px]">
                    <div>
                        <h1 className="mb-3 text-5xl text-fuchsia-300">Art Direction BD</h1>
                        <small className="text-sm">PHOTOGRAPHY || CINEMATOGRAPHY || EVENT PLANNER</small>
                    </div>

                    <p className="mt-20 mb-5 text-4xl font-semibold">Packages and Deals</p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

                        <div class="w-96 bg-white border border-green-300 bg-opacity-10 py-5 gap-4 text-center flex flex-col items-center">
                            <BsFillCameraFill className="text-4xl text-white" />
                            <h2 class="text-xl font-semibold text-white">Photography</h2>
                            <p>Freeze Every Memory</p>
                            <Link to='/photography' class="btn btn-warning">More</Link>
                        </div>

                        <div class="w-96 bg-white border border-green-300 bg-opacity-10 py-5 gap-4 text-center flex flex-col items-center">
                            <ImVideoCamera className="text-4xl text-white" />
                            <h2 class="text-xl font-semibold text-white">Cinematography</h2>
                            <p>Capturing Cinematic Magic</p>
                            <Link to='/cinematography' class="btn btn-warning">More</Link>
                        </div>

                        <div class="w-96 bg-white border border-green-300 bg-opacity-20 py-5 gap-4 text-center flex flex-col items-center md:col-span-2 lg:col-span-1 md:mx-auto">
                            <LiaPhotoVideoSolid className="text-4xl text-white" />
                            <h2 class="text-xl font-semibold text-white">Combo</h2>
                            <p>Crafting Visual Masterpieces</p>
                            <Link to='/comboPackages' class="btn btn-warning">More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Services</title>
            </Helmet>
        </div>
    );
};

export default Services;