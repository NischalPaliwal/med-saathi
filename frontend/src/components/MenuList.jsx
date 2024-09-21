import { Menu } from 'antd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';

const MenuList = ({ darkTheme }) => {
  return (
    <div>
      <Menu  theme={darkTheme ? 'dark' : 'light'} className='menu-bar'>
        <Menu.Item key='dashboard' icon={<DashboardIcon />} >Dashboard</Menu.Item>
        <Menu.Item key='doctors' icon={<MedicalServicesIcon />} >Doctors</Menu.Item>
        <Menu.Item key='patients' icon={<PersonIcon />} >Patients</Menu.Item>
        <Menu.Item key='updataData' icon={<UpdateIcon />} >Update Data</Menu.Item>
        <Menu.Item key='inventory' icon={<InventoryIcon />} >Inventory</Menu.Item>
        <Menu.Item key='reports' icon={<AssignmentIcon />} >Reports</Menu.Item>
        <Menu.Item key='billing' icon={<AttachMoneyIcon />} >Billing</Menu.Item>
        <Menu.Item key='setting' icon={<SettingsIcon />} >Settings</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuList;