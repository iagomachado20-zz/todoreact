import Main from "./pages/main";
import FormBase from './pages/form/form';

const routesConfig = [

    { 
        path: '/', 
        component: Main, 
        exact: true,
        title: 'Home'
    },
    { 
        path: '/formulario', 
        component: FormBase, 
        exact: true,
        title: 'Formulario'
    }
];

export default routesConfig;