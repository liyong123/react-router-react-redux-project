import React , {Component} from 'react'
import AddBtnGrp from './AddBtnGrp'
import AddItem from './AddItem'
import VisibleTodoList from './VisibleTodoList'

class App extends Component {
    render () {

        return (
            <div>
                <AddItem />
                <VisibleTodoList />
                <AddBtnGrp />
            </div>
        )
    }
}

export default App
