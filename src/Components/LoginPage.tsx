import { useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import SaasLoginOptions from './SaasLoginOptions';
import SelfHostedLoginOptions from './SelfHostedLoginOptions';

const LoginPage = () => {
    const [selectedOption, setSelectedOption] = useState<'saas' | 'self-hosted'>('saas');
    return (

        <div className="flex h-screen ">

            <div className="hidden relative w-full max-w-2xl p-8 mt-24 lg:block ">

                <div className="relative w-[70%] mb-4  bg-white shadow-2xl rounded-2xl">
                    <div className="flex items-center gap-0  p-6">
                        <img
                            src="https://framerusercontent.com/images/dPg31SgCdLwGMsUqh0jsRwrgPQU.png"
                            alt="CodeAnt Logo"
                            className="w-10 h-10"
                        />
                        <h2 className="text-lg font-bold text-gray-900">
                            AI to Detect & Autofix Bad Code
                        </h2>
                    </div>
                    <div className='border border-gray-200 border-t-1 '></div>

                    <div className="flex justify-between  p-6">
                        <div className="text-center">
                            <div className="text-xl font-bold">30+</div>
                            <div className="text-sm  text-gray-600 font-semibold">Language Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold">10K+</div>
                            <div className="text-sm text-gray-600 font-semibold">Developers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold">100K+</div>
                            <div className="text-sm text-gray-600 font-semibold">Hours Saved</div>
                        </div>
                    </div>
                </div>


                <div className="absolute right-40 top-[210px] bg-white p-6 shadow-2xl rounded-2xl">
                    <div className="flex flex-col items-center">

                        <div className="flex">
                            <div>
                                <div className="w-8 h-8 bg-purple-100 rounded-full mb-2 flex items-center justify-center">
                                    {/* <div className="w-4 h-4 bg-purple-500 rounded-full"></div> */}
                                    <img src="pie.png" alt="" />
                                </div>
                                <div className="text-sm text-gray-600 mb-1 font-semibold">Issues Fixed</div>
                                <div className="text-2xl font-bold mb-2">500K+</div>
                            </div>
                            <div className="flex flex-col items-center text-sm text-blue-600 font-semibold">
                                <div className='flex'>

                                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                                    14%
                                </div>
                                <span className="text-gray-600 ml-2">This week</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fixed -bottom-2 -left-8 w-64 h-64 opacity-20">

                    <img src="https://framerusercontent.com/images/dPg31SgCdLwGMsUqh0jsRwrgPQU.png" className='text-black' alt="" />
                </div>
            </div>
            <div className=" p-10 w-full bg-gray-100   ">

                <div className="w-full max-w-md bg-white m-auto p-4 mt-16  ">
                    <div className="text-center  mb-8">
                        <div className="flex justify-center mb-4">
                            <img src="https://framerusercontent.com/images/dPg31SgCdLwGMsUqh0jsRwrgPQU.png" alt="CodeAnt AI" className="h-12 w-12" />
                            <span className="text-2xl font-semibold ml-2">CodeAnt AI</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to CodeAnt AI</h2>
                    </div>






                    <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
                        <button
                            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ${selectedOption === 'saas'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setSelectedOption('saas')}
                        >
                            SAAS
                        </button>
                        <button
                            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ${selectedOption === 'self-hosted'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setSelectedOption('self-hosted')}
                        >
                            Self Hosted
                        </button>
                    </div>


                    {selectedOption === 'saas' ? <SaasLoginOptions /> : <SelfHostedLoginOptions />}




                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                    By signing up you agree to the{' '}
                    <a href="#" className="text-gray-900 font-medium hover:underline">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>

    );
};

export default LoginPage;