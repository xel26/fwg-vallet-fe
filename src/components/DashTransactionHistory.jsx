import defaultProfile from '../assets/media/default-profile.png'

const DashTransactionHistory = ({name, amount, type, picture}) => {
  const transfer = 'transfer'
  const income = 'income'
  return(
    <>
      <div className="flex flex-row gap-x-6">
        <div className="lg:self-start">
          <img
            src={picture? `${import.meta.env.VITE_BACKEND_URL}/uploads/profiles/${picture}` : defaultProfile}
            alt="profile"
            className="w-14 h-14"
          />
        </div>
        <div className="flex flex-row gap-x-6 lg:flex-col xl:flex-row">
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold text-dark">{name}</p>
            <p className="text-secondary">{type === "income" ? income : transfer}</p>
          </div>
          <div>
            <div className={`${type === "income" ? 'text-[#1EC15F]': 'text-[#D00000]'}`}>RP.{amount.toLocaleString('id')}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashTransactionHistory