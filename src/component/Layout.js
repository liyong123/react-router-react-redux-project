import React , {Component} from 'react'
import Menu from './BoardMenu'
import Header from './Header'
import Footer from './Footer'
import '../css/layout.css'
class Layout extends Component {
    render () {
        return (
            <div className='containerAll'>
                <Header/>
                <Menu/>
                <div className='containerChild'>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout