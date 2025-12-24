
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './shared/components/AuthLayout/AuthLayout'
import NotFound from './shared/components/NotFoud/NotFound'
import Login from './AuthModule/component/Login/Login'
import Register from './AuthModule/component/Register/Register'
import ForgetPass from './AuthModule/component/ForgetPass/ForgetPass'
import ChangePass from './AuthModule/component/ChangePass/ChangePass'

import Resetpass from './AuthModule/component/RestetPass/Resetpass'
import VerfiyAccount from './AuthModule/component/VerfiyAccount/VerfiyAccount'
import MasterLayout from './shared/components/MasterLayout/MasterLayout'
import RecipeList from './RecipeModule/component/RecipeList/RecipeList'
import Dashboard from './DashboardModule/components/Dashboard/Dashboard'
import RecipeData from './RecipeModule/component/RecipeData/RecipeData'
import CategeriesList from './CategeriesModule/components/CategeriesList/CategeriesList'
import CategeriesData from './CategeriesModule/components/CategeriesData/CategeriesData'
import UsersList from './UsersModule/components/UsersList/UsersList'
import { ToastContainer } from 'react-toastify'
import NoData from './shared/components/NoData/NoData'
import ProtectedRoute from './shared/components/ProtectedRoute/ProtectedRoute'


function App() {
  const routes = createBrowserRouter([{
    path: '',
    element: <AuthLayout></AuthLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, element: <Login></Login> },
      { path: 'login', element: <Login></Login> },
      { path: 'register', element: <Register></Register> },
      { path: 'forget-pass', element: <ForgetPass></ForgetPass> },
      { path: 'change-pass', element: <ChangePass></ChangePass> },

      { path: 'reset-pass', element: <Resetpass></Resetpass> },
      { path: 'verfiy-account', element: <VerfiyAccount></VerfiyAccount> }

    ]

  },
  {
    path: 'dashboard',
    element: <ProtectedRoute><MasterLayout/></ProtectedRoute>,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, element: <Dashboard></Dashboard> },
      { path: 'recipes', element: <RecipeList></RecipeList> },
      { path: 'receipe-data', element: <RecipeData></RecipeData> },
      { path: 'categories', element: <CategeriesList></CategeriesList> },
      { path: 'categpries-data', element: <CategeriesData></CategeriesData> },
      { path: 'users', element: <UsersList></UsersList> },
      { path: 'noData', element: <NoData></NoData> },
      { path:"/dashboard/recipes/edit/:id", element:<RecipeData></RecipeData>} 

    ]
  }])

  return (
    <>

      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
