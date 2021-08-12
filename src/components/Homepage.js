import React from 'react'
import {Row, Col} from "antd";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
export default function Homepage() {
    return (
        <div>
            <Row>
                <Col lg={5} ><Sidebar /></Col>
                <Col lg={19} md={19} sm={19}><Navbar /> </Col>
            </Row>
        </div>
    )
}
