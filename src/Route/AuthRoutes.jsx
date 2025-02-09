import ComingSimple from '../Components/Pages/ComingSoon/ComingSimple';
import CreatePwd from '../Components/Pages/Auth/CreatePwd';
import ForgetPwd from '../Components/Pages/Auth/ForgetPwd';
import LoginOne from '../Components/Pages/Auth/LoginOne';
import LoginSweetalert from '../Components/Pages/Auth/LoginSweetalert';
import LoginTooltip from '../Components/Pages/Auth/LoginTooltip';
import LoginTwo from '../Components/Pages/Auth/LoginTwo';
import LoginValidation from '../Components/Pages/Auth/LoginValidation';
import Maintenance from '../Components/Pages/Auth/Maintenance';
import RegisterBgImg from '../Components/Pages/Auth/RegisterBgImg';
import RegisterSimple from '../Components/Pages/Auth/RegisterSimple';
import RegisterVideo from '../Components/Pages/Auth/RegisterVideo';
import UnlockUser from '../Components/Pages/Auth/UnlockUser';
import ErrorPage1 from '../Components/Pages/ErrorPages/ErrorPage400';
import ErrorPage2 from '../Components/Pages/ErrorPages/ErrorPage401';
import ErrorPage3 from '../Components/Pages/ErrorPages/ErrorPage403';
import ErrorPage4 from '../Components/Pages/ErrorPages/ErrorPage404';
import Logins from '../Auth/Signin';
import LoginForm from '../Components/Pages/Auth/LoginForm';
import ComingBgImg from '../Components/Pages/ComingSoon/ComingBgImg';
import ComingBgVideo from '../Components/Pages/ComingSoon/ComingBgVideo';
import Error500 from '../Components/Pages/ErrorPages/ErrorPage500';
import Error503 from '../Components/Pages/ErrorPages/ErrorPage503';

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Logins /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple`, Component: <LoginForm /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-img`, Component: <LoginOne /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img`, Component: <LoginTwo /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation`, Component: <LoginValidation /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-tooltip`, Component: <LoginTooltip /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/login-sweetalert`, Component: <LoginSweetalert /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple`, Component: <RegisterSimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img`, Component: <RegisterBgImg /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/register-video`, Component: <RegisterVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user`, Component: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`, Component: <ForgetPwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd`, Component: <CreatePwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance`, Component: <Maintenance /> },

  //Coming-soon
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, Component: <ComingSimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/coming-bg-img`, Component: <ComingBgImg /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/coming-bg-video`, Component: <ComingBgVideo /> },

  //Error
  { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, Component: <ErrorPage1 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, Component: <ErrorPage2 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, Component: <ErrorPage3 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, Component: <ErrorPage4 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, Component: <Error500 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, Component: <Error503 /> },
];
