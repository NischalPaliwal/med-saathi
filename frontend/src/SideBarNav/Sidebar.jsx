import { Button, Layout, theme } from 'antd';
import Logo from '../components/Logo';
import MenuList from '../components/MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from 'react';
import { ToggleThemeButton } from '../components/ToggleThemeButton';
import Dashboard from "../SideBarNav/dashboard";
import Patients from "../SideBarNav/patients";
import Reports from "../SideBarNav/reports";
import Patient2 from "../SideBarNav/patient-non-uhi";
import BeforeIntroPage from "../Onboarding/BeforeIntroPage";
import IntroPage from "../Onboarding/IntroPage";
// import Settings from "../SideBarNav/settings";
// import Billing from "../SideBarNav/billing";
import Inventory from "../SideBarNav/inventory";
import Doctors from "../SideBarNav/doctors";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const { Header, Sider } = Layout;

function Sidebar() {

  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: { colorBgContainer }
  } = theme.useToken();
  
  return (
    <>
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, borderBottom: '1px solid #ddd', height: 65 }}>
            <Button type='text' className='toggle' onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
            <div style={{
              position: 'absolute',
              right: 35,
              top: 12,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <input 
             type='text'
             placeholder='Search here'
             style={{ width: 400, height: 40 }}
             >
            </input>
            <SearchIcon style={{ marginLeft: 15 }}/>
            <AccountCircleIcon style={{ marginLeft: 25 }}/>
            </div>
          </Header>
          <IntroPage/>
        </Layout>
      </Layout>
    </>
  );
};

export default Sidebar;