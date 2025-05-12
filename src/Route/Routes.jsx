// //Samp lePage
// import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import Category from '../Components/Pages/User/Category';
import Dashboard from '../Components/Pages/User/Dashboard';
import UserPage from '../Components/Pages/User/UserPage'
export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/pages/dashboard`, Component: <Dashboard/>},  
  { path: `${process.env.PUBLIC_URL}/pages/user-list`, Component: <UserPage /> },  
  { path: `${process.env.PUBLIC_URL}/pages/user-category`, Component: <Category/> },  
  
];
