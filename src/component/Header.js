import React, { Component } from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import '../css/header.css'
import { changeCollapsed } from '../actions/headerAction'
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '/icons/menuIcons',
});
class Header extends Component {

    menuCollapsed = () =>{
        const { collapsed, changeCollapsed } = this.props;
        changeCollapsed(!collapsed)

    };

    render(){

        return(
            <div className='headerAll'>
                <MyIcon type='icon-zhankai' onClick={this.menuCollapsed} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    collapsed:state.headerReducer.collapsed
});

const mapDispatchToProps = {
    changeCollapsed
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)