import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const notify = () => toast.error('Sorry! Infos are not matching');

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => { 
                console.log(res.user);
                navigate('/booking');
            })
            .catch(err => { console.log(err) })
    }


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                toast('You have logged in successfully');
                navigate('/booking');
            }
            )
            .catch(err => { notify() })
    }


    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="flex flex-col justify-center items-center my-16">
                <div className="w-full max-w-md lg:max-w-lg p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-800">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                    <p className="text-center text-gray-600">Don't have an account?
                        <a href="/signUp" rel="noopener noreferrer" className="focus:underline hover:underline font-semibold"> Sign up here</a>
                    </p>

                    <form onSubmit={handleLogin} className="space-y-8 mt-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email </label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password </label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                            </div>
                        </div>
                        <button className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Login</button>
                    </form>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full text-gray-600" />
                        <p className="px-3 text-gray-600">OR</p>
                        <hr className="w-full text-gray-600" />
                    </div>

                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div></div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;