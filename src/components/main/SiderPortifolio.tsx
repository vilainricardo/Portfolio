import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to="/about">About me</Link>, '1', <PieChartOutlined />,[
        getItem(<Link to="/about/education">Formação</Link>, '1.1'),
        getItem('Habilidades', '1.2'),
        getItem('Outras Experiencias', '1.3'),
    ]),
    getItem(<Link to="/GameProjectsMain">Game Projects</Link>, '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const SiderPortfolio = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    return (

        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
                <img src="/assets/images/photo.jpg" 
                     width={collapsed ? "50px" :"100px"} 
                     height={collapsed ? "50px" :"100px"} 
                     alt="Profile" />
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>

    );

}

export default SiderPortfolio;