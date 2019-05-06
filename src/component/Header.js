import React, { Component } from 'react'
import { Icon } from 'antd'
import '../css/header.css'
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1174346_hlrogrvsi9.js',
});
class Header extends Component {

    render(){

        return(
            <div className='headerAll'>
                <MyIcon type='icondssg-catalog' />
            </div>
        )
    }
}

export default Header