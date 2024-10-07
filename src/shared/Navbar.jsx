import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => { console.log(res.user) })
            .catch(err => { console.log(err) })
    }

    const Navlinks = <>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/booking'>Booking</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
    </>


    return (
        <div className='navbar poppins-regular sticky top-0 z-10 bg-[bisque]'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-amber-400 rounded-box z-[1] mt-3 lg:w-52 md:w-52 w-28 p-2">
                        {Navlinks}
                    </ul>
                </div>

                <Link to='/' className="lg:ml-10 md:ml-10 ml-4 lg:text-5xl md:text-4xl text-3xl dancing-script-nameplate">Art Direction BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-10">
                    {Navlinks}
                </ul>
            </div>

            <div className="navbar-end gap-3 lg:mr-8 md:mr-6 mr-2">
                {user ?
                    <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center"><Link to='/clientPortal' className="btn bg-[bisque] tooltip tooltip-left text-2xl text-blue-800 pt-2" data-tip='Client Portal'><CgProfile /></Link>
                    <button className="btn btn-outline" onClick={handleLogOut}>Logout<CiLogout /></button>
                    </div>
                    :
                    <Link to='/login'><button className="btn btn-primary btn-outline">Login<CiLogin /></button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;