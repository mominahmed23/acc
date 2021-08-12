import React from 'react'
import { Card, Col, Row } from 'antd';
import { Typography, Space} from 'antd';
import { EditOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;

function PerDetail() {
    return (
    <div style={{position:'relative'}} className="site-card-wrapper">
        <h3>Personal Details</h3>
        <EditOutlined style={{position:'absolute' , top:'3px' , right:'15px'}} />
    <div className='mt-5'> 
    <Row gutter={16}>
      <Col span={8}>
      <div className>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>    
            
      </Col>
      <Col span={8}>
      <div className>
        <Text  type="secondary">Gender Name</Text><br></br>
        <Text strong>Male</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Contact Number</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Aadhaar Number</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>    
            
      </Col>
      <Col span={8}>
        <div className>
            <Text  type="secondary">Brithday</Text><br></br>
            <Text strong>27th September 1995</Text>  
        </div>
        <div className='mt-8'>
            <Text  type="secondary">Alternate Contact Number</Text><br></br>
        </div>
      </Col>
    </Row>
    </div>

    <div className='mt-3' style={{backgroundColor:'grey'}}> 
    <Row gutter={16} >
      <Col span={8}>
      <div className>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Full Name</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>    
            
      </Col>
      <Col span={8}>
      <div className>
        <Text  type="secondary">Gender Name</Text><br></br>
        <Text strong>Male</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Contact Number</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>
      <div className='mt-8'>
        <Text  type="secondary">Aadhaar Number</Text><br></br>
        <Text strong>Ali Raza</Text>  
      </div>    
            
      </Col>
      <Col span={8}>
        <div className>
            <Text  type="secondary">Brithday</Text><br></br>
            <Text strong>27th September 1995</Text>  
        </div>
        <div className='mt-8'>
            <Text  type="secondary">Alternate Contact Number</Text><br></br>
        </div>
      </Col>
    </Row>
    </div>      
    
  </div>
    )
}

export default PerDetail
