import { Home, Code, Cloud, Book, Settings, Phone, LogOut, X } from 'lucide-react';
import { SidebarProps } from '../types/index'
const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => (
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
export default Sidebar;