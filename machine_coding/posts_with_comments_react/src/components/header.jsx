import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                gap: '10px',
                margin: '20px 0px'
            }}
        >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </div>
    )
};

export default Header;
