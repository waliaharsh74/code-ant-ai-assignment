// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="mt-4 text-lg text-gray-700">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
