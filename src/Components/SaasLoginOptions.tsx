const SaasLoginOptions = () => (
    <div className="space-y-3 w-full max-w-md">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="github.png" alt="GitHub" className="w-5 h-5" />
            <span>Sign in with Github</span>
        </button>
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="bitbucket.png" alt="Bitbucket" className="w-5 h-5" />
            <span>Sign in with Bitbucket</span>
        </button>
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="azure.png" alt="Azure DevOps" className="w-5 h-5" />
            <span>Sign in with Azure DevOps</span>
        </button>
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="gitlab.png" alt="GitLab" className="w-5 h-5" />
            <span>Sign in with GitLab</span>
        </button>
    </div>
);
export default SaasLoginOptions;