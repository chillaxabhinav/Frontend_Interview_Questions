import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='flex flex-row items-center justify-between p-4 font-mono'>
            <div className='text-2xl'>E-Commerce Store</div>
            <div>
                <input type='text' placeholder='Search Product...' className='text-2xl'/>
            </div>
            <Outlet />
        </div>
    )
};

export default AppLayout;
