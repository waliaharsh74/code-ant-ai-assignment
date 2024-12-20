export type SidebarProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Repository = {
    name: string;
    isPublic: boolean;
    technology: string;
    size: string;
    lastUpdated: string;
};