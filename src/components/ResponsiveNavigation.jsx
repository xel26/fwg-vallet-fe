import { FiRotateCcw, FiSend, FiUsers, FiUpload, FiPieChart } from 'react-icons/fi'
import { Link } from "react-router-dom";


const ListNavigation = ({ path, value, logoutHandle }) => {
    return (
        <Link onClick={logoutHandle} to={`/${path}`} className={` flex flex-col items-center gap-1 ${document.URL.includes(path) ? 'text-[#764abc]' : 'text-[#4F5665]'}`}>
            {value === "Dashboard" ? (
                <FiPieChart size={18} />
            ) : value == "Transfer" ? (
                <FiSend size={18} />
            ) : value == "History" ? (
                <FiRotateCcw size={18} />
            ) : value == "Top Up" ? (
                <FiUpload size={18} />
            ) : (
                <FiUsers size={18} />
            )}
            <div className={`${value == "Keluar" ? 'text-[#D00000]' : ''} text-xs whitespace-nowrap`}>{value}</div>
        </Link>
    );
}

const ResponsiveNavigation = () => {
    return (
        <aside className="bg-[#E8E8E85D] sm:hidden flex justify-around fixed left-0 bottom-0 w-full py-2 z-40 bg-white shadow-[0px_-3px_5px_0px_rgba(0,0,0,0.08)]">
            <ListNavigation path="dashboard" value="Dashboard" />
            <ListNavigation path="transfer" value="Transfer" />
            <ListNavigation path="history-transaction" value="History" />
            <ListNavigation path="top-up" value="Top Up" />
            <ListNavigation path="profile" value="Profile" />
        </aside>
    )
}

export default ResponsiveNavigation