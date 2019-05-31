import React, {Component} from 'react'
import {Typography } from 'antd'



const Paragraph = Typography

class MyGraphy extends Component{

    onChange(value){
        this.setState({
            str: value
        })
    }

    state = {
        str: 'this is a editable text'
    }

    render(){
        return (
            <div>
                <Paragraph editable = {{ onChange : this.onChange}}>{this.state.str}</Paragraph>
                <Paragraph copyable = 'true'>This is a copyable text</Paragraph>
            </div>
        )
    }

}

export default MyGraphy