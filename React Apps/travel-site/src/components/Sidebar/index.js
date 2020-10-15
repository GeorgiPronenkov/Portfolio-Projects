import React from 'react';
import {
    // SidebarContainer,
    // Icon,
    // CloseIcon,
    // SidebarWrapper,
    // SidebarMenu,
    // SidebarLink,
    // SideBtnWrap,
    // SidebarRoute
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/*<SidebarLink to="about" onClick={toggle}>About</SidebarLink>*/}
                    {/*<SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>*/}
                    {/*<SidebarLink to="services" onClick={toggle}>Services</SidebarLink>*/}
                    {/*<SidebarLink to="Sign Up" onClick={toggle}>Sign Up</SidebarLink>*/}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
