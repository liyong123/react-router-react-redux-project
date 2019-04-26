import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../../actions/addToDoAction'
import { Button, Input , Form } from 'antd'
const FormItem = Form.Item;
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
       /* if (!this.inputDom.value.trim()) {
            return
        }
        console.log("dom:", this.inputDom);
        addTodo(this.inputDom.value);
        this.inputDom.value = ''*/

        this.props.form.validateFields((error, values)=>{
            if (!error) {
                addTodo(values.inputTest)
            }
        })
    };

    getValueTest = event => {
        event.preventDefault();
        /*console.log(event.target.name + ':' + event.target.value)*/
    };
    render () {
        const { getFieldDecorator } = this.props.form;
      return (
          <div>
              <Form layout='inline' onSubmit={ this.getValue}>
                {/*  <input  name='inputTest'
                          onChange={ this.getValueTest }
                          ref={
                            input => {
                              this.inputDom = input
                          }}
                          style={{width:300}}
                  />*/}
                  <FormItem>
                      {
                          getFieldDecorator("inputTest",{
                             rules:[{ required: true, message: '必填' }]
                          })(
                              <Input  style={{width:300}} />
                          )
                      }
                  </FormItem>
                  <FormItem>
                      <Button htmlType="submit">Add Todo</Button>
                  </FormItem>
              </Form>
          </div>
      )
    }
}

const WrappedAddItem = Form.create()(AddTodo);

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    // addTodo: value => dispatch(addTodo(value)),
    addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedAddItem)
