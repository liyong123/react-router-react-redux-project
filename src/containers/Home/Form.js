import React, {Component} from 'react'
import { connect } from 'react-redux'
import { formItemValueChange, clearFormItemValue, uploadFile} from '../../actions/homeAction'
import { postTest } from "../../actions/apiTestAction";
import get from 'lodash/get'
/*class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}*/

const StateName = 'form';
class Form extends Component {
    handleChange = event => {
       const { name, value } = event.target;
       const { formItemValueChange } = this.props;
       formItemValueChange(name,value)
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const { clearFormItemValue, postTest } = this.props;
        const age = get(this.props[StateName], 'age', '');
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
        }

    };
    uploadFile = e =>{
        e.preventDefault();
        this.props.uploadFile(e)
    };
    render () {
        const { age , job } = this.props[StateName];

        return (
            <div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
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
                    </form>
                </div>
                <div>
                    <input type='file' onChange={this.uploadFile}/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    [StateName]:state.homeReducer.form
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
)(Form);
