import React , {Component} from 'react';

class Detail extends Component {
    render () {
        return (
            <div>
                <span>这是detail页面</span>
                <span>
                    {this.props.match.params.id != null ? "，id为"+this.props.match.params.id:null}
                </span>
            </div>
        )
    }
}

export default Detail