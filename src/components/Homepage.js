import React from 'react'
import {Row, Col} from "antd";
import Sidebar from './Sidebar'
export default function Homepage() {
    return (
        <div>
            <Row>
                <Col lg={12} md={12} sm={24}><Sidebar /></Col>
            </Row>
        </div>
    )
}
