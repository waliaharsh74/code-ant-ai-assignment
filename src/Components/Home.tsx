import { Search, RefreshCw, Home, Code, Cloud, Book, Settings, Phone, LogOut, X, Menu, Database, Plus } from 'lucide-react';
import { useState } from 'react';

type Repository = {
    name: string;
    isPublic: boolean;
    technology: string;
    size: string;
    lastUpdated: string;
};

const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const repositories: Repository[] = [
        { name: 'design-system', isPublic: true, technology: 'React', size: '7320 KB', lastUpdated: '1 day ago' },
        { name: 'codeant-ci-app', isPublic: false, technology: 'Javascript', size: '5871 KB', lastUpdated: '2 days ago' },
        { name: 'analytics-dashboard', isPublic: false, technology: 'Python', size: '4521 KB', lastUpdated: '5 days ago' },
        { name: 'mobile-app', isPublic: true, technology: 'Swift', size: '3096 KB', lastUpdated: '3 days ago' },
        { name: 'e-commerce-platform', isPublic: false, technology: 'Java', size: '6210 KB', lastUpdated: '6 days ago' },
        { name: 'blog-website', isPublic: true, technology: 'HTML/CSS', size: '1876 KB', lastUpdated: '4 days ago' },
        { name: 'social-network', isPublic: false, technology: 'PHP', size: '5432 KB', lastUpdated: '7 days ago' },
    ];

    const Sidebar = () => (
        <div className={`fixed inset-0 bg-white z-40 w-full transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64`}>
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                <div className="flex items-center">
                    <img src=" https://framerusercontent.com/images/dPg31SgCdLwGMsUqh0jsRwrgPQU.png" alt="CodeAnt AI" className="h-8 w-8 mr-2" />
                    <span className="text-xl font-semibold">CodeAnt AI</span>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="lg:hidden"
                >
                    <X className="h-6 w-6 text-gray-500" />
                </button>
            </div>

            <div className="px-4 py-3 border-b border-gray-200">
                <button className="w-full text-left flex items-center justify-between">
                    <span className="text-sm text-gray-700">Harsh Walia</span>
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <nav className="px-2 py-4 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-600 text-white">
                    <Home className="h-5 w-5 mr-3" />
                    Repositories
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                    <Code className="h-5 w-5 mr-3" />
                    AI Code Review
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                    <Cloud className="h-5 w-5 mr-3" />
                    Cloud Security
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                    <Book className="h-5 w-5 mr-3" />
                    How to Use
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                </a>
            </nav>

            <div className="absolute bottom-0 w-full border-t border-gray-200">
                <nav className="px-2 py-4 space-y-1">
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                        <Phone className="h-5 w-5 mr-3" />
                        Support
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                        <LogOut className="h-5 w-5 mr-3" />
                        Logout
                    </a>
                </nav>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}


            <Sidebar />


            <div className="flex-1 flex flex-col min-h-screen">

                <div className="lg:hidden flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center">
                        <img src="https://framerusercontent.com/images/dPg31SgCdLwGMsUqh0jsRwrgPQU.png" alt="CodeAnt AI" className="h-8 w-8 mr-2" />
                        <span className="text-xl font-semibold">CodeAnt AI</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2"
                    >
                        <Menu className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                <div className="flex-1 overflow-auto">
                    <div className="p-4">
                        <div className="flex justify-between">


                            <div className="mb-4">
                                <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
                                <p className="text-sm text-gray-500">{repositories?.length} total repositories</p>
                            </div>


                            <div className="flex gap-2 mb-4">
                                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <RefreshCw className="h-4 w-4 mr-2" />

                                    Refresh All
                                </button>
                                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Repository
                                </button>
                            </div>
                        </div>


                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Repositories"
                                    className="block  pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>


                        <div className="space-y-4">
                            {repositories.map((repo) => (
                                <div key={repo.name} className="border-b border-gray-200 py-4 last:border-b-0">
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-1">
                                            <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
                                            <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800
                                                `}>
                                                {repo.isPublic ? 'Public' : 'Private'}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                                                {repo.technology}
                                            </div>
                                            <span className='flex gap-1'>
                                                <Database className="h-6 w-3 text-gray-500" />
                                                {repo.size}</span>
                                            <span>Updated {repo.lastUpdated}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage;