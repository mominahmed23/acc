import React from 'react'
import { Button, Col, Input, Row, Select, Typography } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
export default function TimeLog() {
    return (
        <div className="px-2 py-3" >
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={24} lg={24}><Typography.Title  level={5}>Add Time Log</Typography.Title></Col>
       <Col xs={24} md={24} lg={12}  ><label className='mb-5'>Clients *</label> <Select  style={{ width: '100%' }}/></Col>
       <Col xs={24} md={24} lg={12} ><label>Project *</label> <Select style={{ width: '100%' }}/></Col>
       <Col xs={24} md={24} lg={12} > <label>Select Date *</label><Input disabled placeholder="Select Date"/></Col>
       <Col xs={24} md={24} lg={12} > <label> Time(Hours) *</label><Input/></Col>
       <Col xs={24} md={24} sm={24} lg={24}><label>Task Details *</label><TextArea/></Col>
       <Col xs={24} md={24} sm={24} lg={4}><Button  style={{backgroundColor:"#b5050e" ,color:"white",borderRadius:"5px"}} block >SAVE</Button></Col>
        </Row>
        </div>
    )
}
