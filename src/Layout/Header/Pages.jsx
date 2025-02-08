import { Film, Image, File } from 'react-feather';

export const errorPages = [

    { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' }
];
export const authPages = [
    { path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple`, type: 'link', title: 'Login Simple' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/login-img`, type: 'link', title: 'Login with Bg Img 1' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img`, type: 'link', title: 'Login with Bg Img 2' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation`, type: 'link', title: 'Login With Validation' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple`, type: 'link', title: 'Register Simple' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img`, type: 'link', title: 'Register With Bg Image 1' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/register-video`, type: 'link', title: 'Register With Video' },

];
export const usefullPages = [
    { path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user`, type: 'link', title: 'Unlock User' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`, type: 'link', title: 'Forget Password' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd`, type: 'link', title: 'Create Password' },
    { path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance`, type: 'link', title: 'Maintenance' }
];

export const comingsoonPages = [
    { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, title: 'Coming-soon', icon: File, type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, title: 'Coming-video', icon: Film, type: 'link' },
    { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, title: 'Coming-image', icon: Image, type: 'link' },
];