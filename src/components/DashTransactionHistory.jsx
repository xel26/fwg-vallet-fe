import defaultProfile from '../assets/media/default-profile.png'

const DashTransactionHistory = ({name, amount, type, picture}) => {
  return(
    <>
      <div className="flex justify-between items-center">
        <div>
          <img
            // src={picture? `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${picture}` : defaultProfile}
            src={picture? picture : defaultProfile}
            alt="profile"
            className="sm:w-14 sm:h-14 w-12 h-12 rounded-lg object-cover"
          />
        </div>

          <div className="flex flex-col w-20 whitespace-nowrap overflow-hidden">
            <p className="font-semibold text-dark text-sm sm:text-base">{name.split(' ')[0]}</p>
            <p className="text-[#4F5665] text-sm sm:text-base">{type === "income" ? 'transfer' : 'send'}</p>
          </div>

            <div className={`${type === "income" ? 'text-[#1EC15F]': 'text-[#D00000]'} text-sm sm:text-base`}>{type === "income" ? '+' : '-'}RP.{amount.toLocaleString('id')}</div>
      </div>
    </>
  )
}

export default DashTransactionHistory