import React,{Component} from "react";
import { connect } from 'react-redux'
import VisibleListItem from './VisibleListItem'
import { toggleTodo, visibilityFilters } from '../../actions/addToDoAction'

const getVisibleTodos = (todoList, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todoList;
    case visibilityFilters.SHOW_COMPLETED:
      return todoList.filter(t => t.completed);
    case visibilityFilters.SHOW_ACTIVE:
      return todoList.filter(t => !t.completed);
    default:
      throw new Error('未知的 filter: ' + filter)
  }
};



class VisibleTodoList extends Component {
    render () {
        const { addToDoReducer, toggleTodo } = this.props;
        return (
            <ul>
                {addToDoReducer.map(todo =>(
                        <VisibleListItem
                            key={todo.id}
                            {...todo}
                            onClick={() => toggleTodo(todo.id)}
                        />
                    )
                )}
            </ul>
        )
    }
}


const mapStateToProps = state => ({
  addToDoReducer: getVisibleTodos(state.addToDoReducer, state.visibilityFilterReducer)
});

const mapDispatchToProps = {
  toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)
