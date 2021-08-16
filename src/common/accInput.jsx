import React from 'react'
import { Input , Typography} from 'antd';
const { Text } = Typography;
export default function accInput() {
    return (
        <div>
            <div>
                <Text type="secondary">Ant (Design)<span style={{color:'red'}}>*</span></Text><br />
                <Input style={{ width: "60%"  ,marginTop:'5px' }} placeholder="Basic usage" />
            </div>
        </div>
    )
}
