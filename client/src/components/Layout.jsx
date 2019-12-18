
import React from 'react';
import SideBar from './SideBar';

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <div className="layout-first">
                    <SideBar />
                </div>
                <div className="layout__second">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Layout;