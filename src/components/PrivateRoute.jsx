import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const token = useSelector(state => state.auth.token)
		if(token){
			return (
				<>
					{children}
				</>
			)
		}else{
			return (
				<Navigate to={'/'} />
			)
		}

}


// eslint-disable-next-line react/prop-types
export const VerifyPin = ({children}) => {
	const pin = useSelector(state => state.verifyPin.data.success)
	if(pin){
		return (
			<>
				{children}
			</>
		)
	}else{
		return (
			<Navigate to={'/profile/change-pin'} />
		)
	}
}

export default PrivateRoute