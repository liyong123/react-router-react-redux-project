import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../../actions/addToDoAction'

/*const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};*/

class AddTodo extends Component {
    getValue = event => {
        event.preventDefault();
        const { addTodo } = this.props;

        if (!this.inputDom.value.trim()) {
            return
        }
       /* console.log(this.inputDom.offsetHeight);*/
        addTodo(this.inputDom.value);
        this.inputDom.value = ''
    };

    getValueTest = event => {
        event.preventDefault();
        /*console.log(event.target.name + ':' + event.target.value)*/
    };
    render () {

      return (
          <div>
              <form onSubmit={ this.getValue}>
                  <input  name='inputTest'
                          onChange={ this.getValueTest }
                          ref={
                            input => {
                              this.inputDom = input
                          }}
                  />
                  <button type="submit">
                      Add Todo
                  </button>
              </form>
          </div>
      )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    // addTodo: value => dispatch(addTodo(value)),
    addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
