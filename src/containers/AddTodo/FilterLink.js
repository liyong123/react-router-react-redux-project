import React, {Component} from "react"
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/addToDoAction'
import { Button } from 'antd'
/*import get from 'lodash/get'*/

const StateName = 'visibilityFilterReducer';
class FilterLink extends Component {
    render () {
        const { active, setVisibilityFilter, filter} = this.props;
       /* const todos = get(this.props,'todos',555);
        console.log("StateName:",this.props[StateName] );
        console.log("todos:",todos );*/

        return (
            <Button
                type={ active ? 'primary' : 'default' }
                onClick={()=>{setVisibilityFilter(filter)}}
               /* disabled={active}*/
                /*style={{
                    marginLeft: '4px',
                    backgroundColor: active ? '#ccc' : '#0366EE'
                }}*/
            >
                {this.props.children}
            </Button>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state[StateName],
    [StateName]: state[StateName],
    todos: state.addToDoReducer
});

const mapDispatchToProps =   {
  setVisibilityFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)
