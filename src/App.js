import './App.css';
import MainContent from './Components/MainContent';
import DetailContent from './Components/DetailContent';
import Login from './Components/Login';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LayoutDashboard from './Sidebar/LayoutDashboard';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Cookies from 'js-cookie';
import FormCreateData from './Components/FormCreateData';
import ChangePassword from './Components/ChangePassword';

function App() {

  let AuthLogin = (param) => {
    if (Cookies.get('token') === undefined) {
      return param.children
    } else if (Cookies.get('token') !== undefined) {
      return <Navigate to='/' />
    }

  }
  let DashboardRoute = (param) => {
    if (Cookies.get('token') === undefined) {
      return <Navigate to={'/login'} />
    } else if (Cookies.get('token') !== undefined) {
      return param.children
    }
  }

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/detailjob/:Id' element={<DetailContent />} />

            <Route path='/login' element={
              <AuthLogin>
                <Login />
              </AuthLogin>
            } />

            <Route path='/register' element={<Register />} />
            <Route path='/changepassword' element={<ChangePassword />} />

            <Route path='/dashboard/list-job-vacancy' element={
              <DashboardRoute>
                <LayoutDashboard>
                  <Dashboard />
                </LayoutDashboard>
              </DashboardRoute>
            } />

            <Route path='/dashboard/list-job-vacancy/create' element={
              <DashboardRoute>
                <LayoutDashboard>
                  <FormCreateData />
                </LayoutDashboard>
              </DashboardRoute>
            } />

          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
