import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='flex flex-row items-center justify-between p-4'>
            <div>E Commerce Store</div>
            <div>
                <input type='text' placeholder='Search Product here'/>
            </div>
            <Outlet />
        </div>
    )
};

export default AppLayout;
