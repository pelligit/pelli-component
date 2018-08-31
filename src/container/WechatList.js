import React, {Component} from 'react';

import WechatMsgList from '../component/WechatMsgList';
import wechat_list_data from '../db/wechat-msg-list';

class WechatList extends Component{
    render(){
        return (
            <React.Fragment>
                <WechatMsgList list={wechat_list_data} />
            </React.Fragment>
        );
    }
}

export default WechatList;
