import 'whatwg-fetch'
import 'es6-promise'

export const fetchGet = url => (
    fetch(url,{
        method:'GET',
        credentials:'include',//credentials: 'include'表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie，需要时得手动指定
        mode:'cors',
        headers:{
            'Accept':'application/json, text/plain , */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
);

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



export const fetchPost = (url, paramsObj) =>(
    fetch(url,{
        method:'POST',
        credentials:'include',
        mode:'cors',
        headers:{
            'Accept':'application/json, text/plain , */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:obj2params(paramsObj)
    })
);