import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getMenuData } from '../actions/menuAction'
import { Menu, Icon as _Icon } from 'antd'
import { Link } from 'react-router-dom'
import get from 'lodash/get'
import '../css/menu.css'

const StateName = 'menuReducer';
const { SubMenu, Item }= Menu;
const Icon =  _Icon.createFromIconfontCN({
    scriptUrl: '/icons/menuIcons.js',
});
class BoardMenu extends Component {

     componentDidMount(){
        const {getMenuData} = this.props;
        getMenuData()
     }

     render(){
         const menuData = get(this.props[StateName], 'menuData', []);
         return (
             <div className='menuAll' >
                 {
                    menuData.length > 0 ? (
                            <Menu
                                mode="inline"
                            >
                                {
                                    menuData.length > 0 && menuData.map(item => {
                                        if (item.children && item.children.length > 0) {
                                            return (
                                                <SubMenu key={item.name} title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
                                                    {
                                                        item.children.map( item2 => {
                                                            return (
                                                                <Item key={item2.name}>
                                                                    <Link to={`${item2.url}`}>
                                                                        {item2.name}
                                                                    </Link>
                                                                </Item>
                                                            )
                                                        })
                                                    }
                                                </SubMenu>
                                            )
                                        }else{
                                            return (
                                                <Item key={item.name}>
                                                    <span>
                                                        <Icon type={item.icon}/>
                                                        <span>{item.name}</span>
                                                    </span>
                                                </Item>
                                            )
                                        }
                                    })
                                }
                            </Menu>
                        )
                        : <div>暂无数据</div>
                 }
             </div>
         )
     }
}

const mapStateToProps = state => ({
    [StateName]: state[StateName]
});
const mapDispatchToProps = {
    getMenuData
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardMenu)