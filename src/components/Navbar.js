import React from 'react'
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import { Avatar} from 'antd';
const { TabPane } = Tabs;
export default function Navbar() {
    
    
    return (
        <>
       <div className="d-flex justify-align-end"> 
            <Avatar size={60}>RJ</Avatar>
            <div style={{position:"absolute" , top: "15px",
             left: "80px" , fontSize:"20px"}}>Name</div> 
            </div>     
      {
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Details" key="1" />
          <TabPane tab="Jobs Details" key="2" />
        </Tabs>
      }
    
        </>
    )
}
