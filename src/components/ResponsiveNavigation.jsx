import { FiLogOut, FiRotateCcw, FiSend, FiUsers, FiUpload, FiPieChart } from 'react-icons/fi'
import { Link } from "react-router-dom";


const ListNavigation = ({ path, value }) => {
    return (
        <Link to={`/${path}`} className={` flex flex-col items-center gap-[10px] ${document.URL.includes(path) ? 'bg-[#764abc] text-white' : 'text-[#4F5665]'}  rounded p-2`}>
            {value === "Dashboard" ? (
                <FiPieChart size={20} />
            ) : value == "Transfer" ? (
                <FiSend size={20} />
            ) : value == "History" ? (
                <FiRotateCcw size={20} />
            ) : value == "Top Up" ? (
                <FiUpload size={20} />
            ) : value == "Profile" ? (
                <FiUsers size={20} />
            ) : <FiLogOut size={20} color="#D00000" />}
            <div className={`${value == "Keluar" ? 'text-[#D00000]' : ''}`}>{value}</div>
        </Link>
    );
}

const ResponsiveNavigation = () => {
    return (
        <aside className="bg-[#E8E8E8] sm:hidden flex justify-between">
            <ListNavigation path="dashboard" value="Dashboard" />
            <ListNavigation path="transfer" value="Transfer" />
            <ListNavigation path="history-transaction" value="History" />
            <ListNavigation path="top-up" value="Top Up" />
            <ListNavigation path="profile" value="Profile" />
        </aside>
    )
}

export default ResponsiveNavigation