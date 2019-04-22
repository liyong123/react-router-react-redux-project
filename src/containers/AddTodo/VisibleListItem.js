import React, {Component} from 'react'
import PropTypes from 'prop-types';

class VisibleListItem extends Component {
    render () {

        const { onClick, completed, text , id} = this.props;
        return (
            <li
                onClick={onClick}
                style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {text + id}
            </li>
        )
    }
}

VisibleListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default VisibleListItem
