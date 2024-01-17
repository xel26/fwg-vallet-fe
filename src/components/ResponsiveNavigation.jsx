import { FiLogOut, FiRotateCcw, FiSend, FiUsers, FiUpload, FiPieChart } from 'react-icons/fi'
import { Link } from "react-router-dom";


const ListNavigation = ({ path, value }) => {
    return (
        <Link to={`/${path}`} className={` flex flex-col items-center gap-1 ${document.URL.includes(path) ? 'bg-[#764abc] text-white' : 'text-[#4F5665]'} rounded p-2`}>
            {value === "Dashboard" ? (
                <FiPieChart size={18} />
            ) : value == "Transfer" ? (
                <FiSend size={18} />
            ) : value == "History" ? (
                <FiRotateCcw size={18} />
            ) : value == "Top Up" ? (
                <FiUpload size={18} />
            ) : value == "Profile" ? (
                <FiUsers size={18} />
            ) : <FiLogOut size={18} color="#D00000" />}
            <div className={`${value == "Keluar" ? 'text-[#D00000]' : ''} text-xs whitespace-nowrap`}>{value}</div>
        </Link>
    );
}

const ResponsiveNavigation = () => {
    return (
        <aside className="bg-[#E8E8E85D] sm:hidden flex justify-between h-fit">
            <ListNavigation path="dashboard" value="Dashboard" />
            <ListNavigation path="transfer" value="Transfer" />
            <ListNavigation path="history-transaction" value="History" />
            <ListNavigation path="top-up" value="Top Up" />
            <ListNavigation path="profile" value="Profile" />
            <ListNavigation path="#" value="Keluar" />
        </aside>
    )
}

export default ResponsiveNavigation