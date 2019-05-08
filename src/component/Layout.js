import React , {Component} from 'react'
import {connect} from 'react-redux'
import Menu from './BoardMenu'
import Header from './Header'
import Footer from './Footer'
import get from 'lodash/get'
import '../css/layout.css'


class Layout extends Component {
    render () {
        const collapsed = get(this.props.headerReducer, 'collapsed', false);
        return (
            <div className='containerAll'>
                <Header/>
                <Menu/>
                <div className={`${'containerChild'} ${collapsed ? 'containerChild2' : ''}`}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   headerReducer : state.headerReducer
});

export default connect(mapStateToProps)(Layout)