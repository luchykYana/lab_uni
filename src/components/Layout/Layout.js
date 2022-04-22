import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';

const Layout = () => {
    return (
        <div>
            <div><Header/></div>
            <div><Outlet/></div>
        </div>
    );
};

export {Layout};
