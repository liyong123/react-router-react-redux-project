import React, {Component} from 'react'
import { connect } from 'react-redux'
import { formItemValueChange, clearFormItemValue, uploadFile} from '../../actions/homeAction'
import { postTest } from "../../actions/apiTestAction";
/*import get from 'lodash/get'*/
import {Form, Input, InputNumber, Button} from 'antd'
const FormItem = Form.Item;

const StateName = 'ageJobForm';
class AgeJobForm extends Component {
    handleChange = event => {
       const { name, value } = event.target;
       const { formItemValueChange } = this.props;
       formItemValueChange(name,value)
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const { clearFormItemValue, postTest } = this.props;
        /*const age = get(this.props[StateName], 'age', '');
        const job = get(this.props[StateName], 'job', '');
        const objGrp = {
            age: age,
            job: job,
        };
        if( age!=='' && job!=='' ) {
            this.props.handleSubmit(this.props[StateName]);
            clearFormItemValue();
            postTest(objGrp);//post测试
        }else{
            alert('您有必填项未填写！')
        }*/
        this.props.form.validateFields((err, values)=> {
            if (!err) {
                this.props.handleSubmit(values);
                clearFormItemValue();
                postTest(values);//post测试
            }
        })

    };
    uploadFile = e =>{
        e.preventDefault();
        this.props.uploadFile(e)
    };
    render () {
        const { age , job } = this.props[StateName];
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div>
                    {/*<form onSubmit={this.onFormSubmit}>
                        <label>Age:</label>
                        <input
                            type="text"
                            name="age"
                            value={age}
                            onChange={this.handleChange}
                        />
                        <label>Job:</label>
                        <input
                            type="text"
                            name="job"
                            value={job}
                            onChange={this.handleChange}
                        />
                        <button type="submit">
                            submit
                        </button>
                    </form>*/}
                    <Form  onSubmit={this.onFormSubmit}>
                        <FormItem label="年龄">
                            {getFieldDecorator('age', {
                                initialValue:age,
                                rules:[{ required: true, message: '请输入您的年龄！'}]
                            })(
                                <InputNumber  style={{ width: 300 }} min={1} placeholder='年龄' />
                            )}
                        </FormItem>
                        <FormItem label="工作">
                            {getFieldDecorator('job', {
                                initialValue:job,
                                rules:[{ required: true, message: '请输入您的工作！'}]
                            })(
                                <Input style={{ width: 300 }} placeholder='工作' />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">添加</Button>
                        </FormItem>
                    </Form>
                </div>
                <div>
                    <input type='file' onChange={this.uploadFile}/>
                </div>
            </div>

        )
    }
}
const WrappedAgeJobForm = Form.create()(AgeJobForm);
const mapStateToProps = state => ({
    [StateName]:state.homeReducer.ageJobForm
});

const mapDispatchToProps = {
    formItemValueChange,
    clearFormItemValue,
    postTest,
    uploadFile
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedAgeJobForm);
