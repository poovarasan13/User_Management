// //Samp lePage
import SamplePage from '../Components/Pages/PageLayout/SimplePage';

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/pages/sample-page/:layout`, Component: <SamplePage /> },
];
