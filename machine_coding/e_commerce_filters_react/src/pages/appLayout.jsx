import { Outlet } from 'react-router-dom';

import Home from './home';

const AppLayout = () => {
    return (
        <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-row items-center justify-between font-mono'>
                <div className='text-2xl'>E-Commerce Store</div>
                <div>
                    <input type='text' placeholder='Search Product...' className='text-2xl'/>
                </div>
            </div>
            <Home />
        </div>
    )
};

export default AppLayout;
