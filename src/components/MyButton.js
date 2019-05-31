import React,{Component} from 'react'
import { Button, Icon} from 'antd'

const ButtonGroup = Button.Group

class MyButton extends Component{
    handleClick(e){
        console.log(e);
    }
    render(){
        return ( 
            
            <div className = 'myButton'>
                <Button type = 'primary'>默认按钮</Button>
                <Button type = 'danger'>默认按钮</Button>
                <Button type = 'dashed'>默认按钮</Button>
                <Button icon = 'user' >搜索按钮</Button>
                <Button icon = 'user' shape = 'circle' type= 'primary'></Button>
                <Button icon = 'user' block >搜索按钮</Button>
                <div>
                <Button icon='download' shape='round' size = 'small'>这是一个下载</Button>
                <Button icon='download' shape='round' >这是一个下载</Button>
                <Button icon='download' shape='round' size = 'large'>这是一个下载</Button>
                </div>
                <div>
                    <ButtonGroup shape = 'round'>
                        <Button>Cancle</Button>
                        <Button>Confirm</Button>
                        <Button>Cancle</Button>
                        <Button onClick = {this.handleClick}>Cancle</Button>
                    </ButtonGroup>
                </div>
                <Button><Icon type='left' spin/></Button>
                <Button><Icon type='weibo' /></Button>
                <Button><Icon type='weibo' style = {{ fontSize : 22, color : 'red'}}/></Button>

            </div>
        )
    }
}
export default MyButton
