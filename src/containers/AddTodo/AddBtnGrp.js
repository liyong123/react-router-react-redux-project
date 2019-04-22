import React , { Component } from 'react'
import FilterLink from './FilterLink'
import { visibilityFilters } from '../../actions/addToDoAction'

class Footer extends Component {

    render () {
        return (
            <div>
                <span>Show: </span>
                <FilterLink filter={visibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        )
    }
}

export default Footer
