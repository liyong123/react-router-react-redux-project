import {apiUrl} from './index'
export const formItemValueChange = (name, value) => async dispatch => {
    dispatch({
        type: 'FORMITEM_VALUE_CHANGE',
        name,
        value
    })
};

export const clearFormItemValue = () => async dispatch => {
    dispatch({
        type: 'CLEAR_FORMITEM_VALUE',
    })
};

export const setCharacters = character => async dispatch => {
    dispatch({
        type: 'SET_CHARACTERS',
        character
    })
};

export const removeOneCharacter = (characters, index) => async dispatch => {
    dispatch({
        type: 'REMOVE_ONE_CHARACTER',
        characters,
        index
    })
};

export const uploadFile = e => async dispatch => {
    console.log("e:",e.target.files[0]);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file",file);
    formData.append('fileName', 'file');

    let res;
    try{
        res = await fetch(apiUrl + 'uploadFile', {
            method: 'POST',
            body:formData,
            headers:{
                'Accept':'application/json, text/plain , */*',
                "Content-Type": "multipart/form-data"
            },
        })
    } catch(err) {
        console.log('文件上传失败：', err);
        return;
    }


    let data;
    try {
        data = await res.json();
    } catch (err) {
        console.log('接口数据有误');
        return;
    }
    if(data){

    }
};