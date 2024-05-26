import { Outlet } from 'react-router-dom';
import Header from './components/header';

const AppLayout = () => {
    return (
        <div className='layout'>
            <h2>React Router DOM</h2>
            <Header/>
            <Outlet />
        </div>
    )
}

export default AppLayout;