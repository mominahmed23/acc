import { Col, Row } from 'antd'
import { Table } from 'antd';
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import{LeftOutlined, RightOutlined} from "@ant-design/icons";
export default function MyRequests() {
    const columns = [
        {
          title: 'TimePeriod',
          dataIndex: 'name',
        },
        {
          title: 'Invo',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ];
      
    return (
        <div>
            
              <Row justify="center space-between" className="px-6">
      <Col><Avatar icon={<LeftOutlined/>}></Avatar></Col>
      <Col><h3>Aug,2021</h3></Col>
      <Col><Avatar icon={<RightOutlined/>}></Avatar></Col>
      
    </Row>
    
   
    <Table columns={columns} dataSource={data} size="middle" />
   
  
        </div>
    )
}


