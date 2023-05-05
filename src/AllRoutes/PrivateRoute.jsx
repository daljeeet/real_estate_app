import Login from '../pages/Login'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector((val)=>val.auth);
  if(isAuth){
    return children
  }else{
    return <Login/>
  }
}

export default PrivateRoute