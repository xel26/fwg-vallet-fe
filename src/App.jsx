import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import { persistor, store } from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import EnterPin from './pages/EnterPin'
import Dashboard from './pages/Dashboard'
import HistoryTransaction from './pages/HistoryTransaction'
import Transfer from './pages/Transfer'
import TransferDetail from './pages/TransferDetail'
import TopUp from './pages/TopUp'
import Profile from './pages/Profile'
import ChangePin from './pages/ChangePin'
import ChangePassword from './pages/ChangePassword'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/> 
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/enter-pin',
    element: <EnterPin/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: 'history-transaction',
    element: <HistoryTransaction/>
  },
  {
    path: '/transfer',
    element: <Transfer/>
  },
  {
    path: '/transfer-detail/:id',
    element: <TransferDetail/>
  },
  {
    path: 'top-up',
    element: <TopUp/>
  },
  {
    path: 'profile',
    element: <Profile/>
  },
  {
    path: 'profile/change-pin',
    element: <ChangePin/>
  },
  {
    path: 'profile/change-password',
    element: <ChangePassword/>
  }
])


function App() {
  return (
    <RouterProvider router={router}/>

    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <RouterProvider router={router}/>
    //   </PersistGate>
    // </Provider>
  )
}

export default App
