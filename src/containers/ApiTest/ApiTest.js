import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {getTestData, getJsonTestData} from '../../actions/apiTestAction'

class ApiTest extends Component {

    componentDidMount(){
        const { getTestData, getJsonTestData} = this.props;
        getTestData();
        getJsonTestData();
    }
    render() {
        const {getReqValue, getJsonReqValue} = this.props;

        return (
            <div>
                <div>{getReqValue}</div>
                <div>{getJsonReqValue.status}</div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getReqValue: state.apiTestReducer.getReqValue,
    getJsonReqValue: state.apiTestReducer.getJsonReqValue
});

const mapDispatchToProps = {
    getTestData,
    getJsonTestData
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiTest)