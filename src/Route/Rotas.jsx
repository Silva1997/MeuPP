import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import App from '../App';
import { Menu } from 'antd';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import App1 from '../Pagina/usuario/Cadrasto';

const { SubMenu } = Menu;

function CustomMenu() {
  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <TiHomeOutline color='#000' size={20} />,
      link: '*',
    },
    {
      label: 'Perfil',
      key: 'profile',
      icon: <FaRegUser color='#000' size={20}/>,
      link: '/Usuario',
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: <CiSettings color='#000' size={22} />,
      children: [
        { label: 'General', key: 'general' },
        { label: 'Account', key: 'account' },
      ],
    },
  ];

  return (<div>

<Menu mode="horizontal" theme="light">
      {items.map(item => (
        item.children ? (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map(child => (
              <Menu.Item key={child.key}>{child.label}</Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        )
      ))}
          </Menu>
          <Outlet />
  </div>
  
        
  );
}

export default function Rotas() {
  return (
    <>
     
      <Routes>
       <Route element={<CustomMenu />}>
       <Route  exact path='*' element={<App />} />
        <Route exact path='Usuario'  element={<App1/>} />
       </Route>
      </Routes>
    </>
  );
}
