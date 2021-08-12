import React from 'react'
import {Row, Col} from "antd";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
export default function Homepage() {
    return (
        <div>
            <Row>
                <Col lg={5} md={12} sm={24}><Sidebar /></Col>
                <Col lg={12} md={12} sm={24}><Navbar /> </Col>
            </Row>
        </div>
    )
}
