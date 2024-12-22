import { Key } from "lucide-react";
import { Link } from "react-router-dom";

const SelfHostedLoginOptions = () => (
    <div className="space-y-3 w-full max-w-md">
        <Link to="/home" className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="gitlab.png" alt="GitLab" className="w-5 h-5" />
            <span>Self Hosted GitLab</span>
        </Link>
        <Link to="/home" className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Key className="w-5 h-5" />
            <span>Sign in with SSO</span>
        </Link>
    </div>
);
export default SelfHostedLoginOptions