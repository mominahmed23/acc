import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined , CalendarOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Avatar} from 'antd';
const { SubMenu } = Menu;
export default function Sidebar() {
    const handleClick = e => {
        console.log('click ', e);
      };
    return (
        <>  
            <div>
            <div style={{position:"relative"}}>
            <Image className=" mt-10"  width={30} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/ >
            <div style={{position:"absolute" , top: "42px",
             left: "40px" , fontSize:"20px"}}>skuad</div>
            </div></div>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1" icon={<CalendarOutlined />}>
                Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />}>
                My Profile
                </Menu.Item>
                <Menu.Item key="3" icon={<CalendarOutlined />}>
                My Clients
                </Menu.Item>
                <SubMenu key="4" icon={<MailOutlined />} title="Time Tracking">
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="5" icon={<CalendarOutlined />}>
                Documents
                </Menu.Item>
                <hr style={{width:'220px'}} />
                <Menu.Item key="6" icon={<CalendarOutlined />}>
                My Payments
                </Menu.Item>
                <Menu.Item key="7" icon={<CalendarOutlined />}>
                Notifications(100)
                </Menu.Item>
                <Menu.Item key="8" icon={<CalendarOutlined />}>
                Account Settings
                </Menu.Item>
            </Menu>
            <div>
            <Avatar size={40}>USER</Avatar>
            </div>

        </> 
    )
}
