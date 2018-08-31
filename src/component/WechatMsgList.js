import React, {Component} from 'react';
import WechatMsgItem from './WechatMsgItem';

class WechatMsgList extends Component{
    render(){
        return (
            <div className='wechat-msg-list-container'>
                {
                    this.props.list.map((item, index) => (
                        <WechatMsgItem data={item} key={index} />
                    ))
                }
            </div>
        );
    }
}

export default WechatMsgList;