import 'whatwg-fetch'
import 'es6-promise'






export const fetchGet = url => {
    const optionsSelf = {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain , */*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    try {
        const token = localStorage.getItem('x-access-token');
        if (token) {
            optionsSelf.headers.token = token
        }
    } catch (e) {
        console.log("getTokenError:", e)
    }

   return fetch(url, optionsSelf)

};

const obj2params = obj =>{
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }
    if(result){
        result = result.slice(1)
    }
    return result;

};



export const fetchPost = (url, paramsObj) => {
    const optionsSelf = {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain , */*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: obj2params(paramsObj)
    };

    try{
        const token = localStorage.getItem('x-access-token');
        if (token) {
           optionsSelf.headers.token = token
        }
    } catch (e) {
        console.log("getTokenError:", e)
    }

    return fetch(url, optionsSelf)
};