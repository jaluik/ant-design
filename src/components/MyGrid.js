import React from 'react'
import {Row, Col} from 'antd'

class myGrid extends React.Component{
    render(){
        return (
            <div>
                <Row >
                    <Col span = {12}>col-12</Col>
                    <Col span = {12}>col-12</Col>
                </Row>
            </div>
        )
    }
}

export default myGrid