import { Link } from "react-router-dom";

const Navbar = () => {

    const Navlinks = <>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/packages'>Packages</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-amber-400 rounded-box z-[1] mt-3 w-52 p-2">
                        {Navlinks}
                    </ul>
                </div>

                <Link to='/' className="ml-10 text-5xl dancing-script-nameplate">Art Direction BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-10">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;