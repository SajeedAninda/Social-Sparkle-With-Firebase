import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
    let error = useRouteError();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center  space-y-4">
                <h1 className="text-6xl font-bold text-[#033430]">404</h1>
                <p className="text-2xl font-bold text-[#033430]">Oops! Page not found</p>
                <p className="text-[#033430]">
                    The page that you are looking for might not exist or removed. Please try later.
                </p>
                <p>
                    <i className='font-bold text-[#033430]'>Error Message: {error.statusText || error.message}</i>
                </p>
                <div>
                    <Link to={"/"}>
                        <button className="px-5 py-3 font-bold rounded-lg text-gray-100 bg-[#033430] hover:text-[#033430] hover:bg-white border-2 border-[#033430]">
                            Go Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;