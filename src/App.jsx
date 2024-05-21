import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
import ForgotPin from './pages/ForgotPin'
import CreateNewPin from './pages/CreateNewPin'
import EnterPin from './pages/EnterPin'
import Dashboard from './pages/Dashboard'
import HistoryTransaction from './pages/HistoryTransaction'
import Transfer from './pages/Transfer'
import TransferDetail from './pages/TransferDetail'
import TopUp from './pages/TopUp'
import Profile from './pages/Profile'
import ChangePin from './pages/ChangePin'
import ChangePassword from './pages/ChangePassword'
import EnterNewPin from './pages/EnterNewPin'
import { VerifyPin } from './components/PrivateRoute'


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
    path: '/create-new-password',
    element: <CreateNewPassword/>
  },
  {
    path: '/forgot-pin',
    element: <ForgotPin/>
  },
  {
    path: '/create-new-pin',
    element: <CreateNewPin/>
  },
  {
    path: '/enter-pin',
    element: <EnterPin/>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>
  },
  {
    path: 'history-transaction',
    element: <PrivateRoute><HistoryTransaction/></PrivateRoute>
  },
  {
    path: '/transfer',
    element: <PrivateRoute><Transfer/></PrivateRoute>
  },
  {
    path: '/transfer-detail/:id',
    element: <PrivateRoute><TransferDetail/></PrivateRoute>
  },
  {
    path: 'top-up',
    element: <PrivateRoute><TopUp/></PrivateRoute>
  },
  {
    path: 'profile',
    element: <PrivateRoute><Profile/></PrivateRoute>
  },
  {
    path: 'profile/change-pin',
    element: <PrivateRoute><ChangePin/></PrivateRoute>
  },
  {
    path: 'profile/enter-new-pin',
    element: <VerifyPin><EnterNewPin/></VerifyPin>
  },
  {
    path: 'profile/change-password',
    element: <PrivateRoute><ChangePassword/></PrivateRoute>
  }
])


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  )
}

export default App
