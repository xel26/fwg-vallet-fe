import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/login'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
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
    element: <PrivateRoute><ForgotPassword/></PrivateRoute>
  },
  {
    path: '/create-new-password',
    element: <PrivateRoute><CreateNewPassword/></PrivateRoute>
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
