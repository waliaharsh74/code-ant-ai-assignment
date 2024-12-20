import { Search, RefreshCw, Menu, Database, Plus } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { repositories } from '../Data';
import useSearch from '../hooks/useSearch';


const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { searchText, filteredRepo, handleSearchChange } = useSearch();

    return (
        <div className="flex h-screen bg-gray-50">

            <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
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
                    <div className="p-4 bg-white m-5">
                        <div className="flex flex-col lg:flex-row justify-between">


                            <div className="mb-4 ">
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
                                    value={searchText}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    className="block  pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>


                        <div className="space-y-4">
                            {filteredRepo.map((repo) => (
                                <div key={repo.name} className="border-b border-gray-200 p-4 last:border-b-0 hover:bg-gray-100">
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