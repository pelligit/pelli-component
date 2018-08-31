import React, {Component} from 'react';
import './WechatMsgItem.css';

class WechatMsgItem extends Component{
    constructor(props){
        super(props);

        // const w = document.body.off
    }

    render(){
        return (
            <div className='wechat-msg-item-container'>
                <div className='wechat-msg-actions'>
                    <div>{this.props.data.time}</div>
                </div>
                <div className='wechat-msg-icon'>{this.props.data.icon}</div>
                <div className='wechat-msg-infos'>
                    <div className='wechat-msg-infos-title'>{this.props.data.title}</div>
                    <div className='wechat-msg-infos-brief'>{this.props.data.brief}</div>
                </div>
                
            </div>
        );
    }
}

export default WechatMsgItem;