import React from 'react';
import { Routes, Route ,Outlet,Link} from 'react-router-dom';
import App from '../App';
import { Menu } from 'antd';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


const { SubMenu } = Menu;

// function CustomMenu() {
//   return (
//    <>
   
//    <Menu mode="horizontal">
//       <Menu.Item key="home" icon={<TiHomeOutline color='#000' size={20} /> } >
//             <Link to={'/'} title='Home'>Home</Link>
//       </Menu.Item>
//       <Menu.Item key="profile"  icon={<FaRegUser  color='#000' size={20}/>} >
//       <Link to={'/'} title='Home'>Perfil</Link>
//       </Menu.Item>
//       <SubMenu key="settings" icon={<CiSettings  color='#000' size={20} />}  title="Settings">
//         <Menu.Item key="general">General</Menu.Item>
//         <Menu.Item key="account">Account</Menu.Item>
//       </SubMenu>
//     </Menu>
//        <App/>
//        <Outlet/>
//    </>
//   );
// }

function CustomMenu() {
  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <TiHomeOutline color='#000' size={20} />,
      link: '/',
    },
    {
      label: 'Perfil',
      key: 'profile',
      icon: <FaRegUser color='#000' size={20}/>,
      link: '/',
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: <CiSettings color='#000' size={20} />,
      children: [
        { label: 'General', key: 'general' },
        { label: 'Account', key: 'account' },
      ],
    },
  ];
  const [current, setCurrent] = React.useState('home');

  return (
    <>
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
      {/* <Menu theme='light' onClick={()=>{console.log("Okz")}} selectedKeys={[current]} mode="horizontal"  items={items} />; */}
      
       <Outlet />
    </>
  );
}




export default function Rotas (){
  return(
    <>
    <Routes>
<Route element={<CustomMenu/>}>
<Route   exact path='/' element={<App/>}/>
</Route>

    </Routes>
    </>
  )
}
//  function Root() {
//     return (
//       <>
//         <div id="sidebar">
//           <h1>React Router Contacts</h1>
//           <div>
//             <form id="search-form" role="search">
//               <input
//                 id="q"
//                 aria-label="Search contacts"
//                 placeholder="Search"
//                 type="search"
//                 name="q"
//               />
//               <div
//                 id="search-spinner"
//                 aria-hidden
//                 hidden={true}
//               />
//               <div
//                 className="sr-only"
//                 aria-live="polite"
//               ></div>
//             </form>
//             <form method="post">
//               <button type="submit">New</button>
//             </form>
//           </div>
//           <nav>
//             <ul>
//               <li>
//                 <a href={`/contacts/1`}>Your Name</a>
//               </li>
//               <li>
//                 <a href={`/contacts/2`}>Your Friend</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div id="detail"></div>
     
//       </>
//     );
//   }
