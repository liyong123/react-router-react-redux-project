export const changeCollapsed = (collapsed) => async dispatch => {
    dispatch({
        type: 'CHANGE_COLLAPSED',
        collapsed
    })
};