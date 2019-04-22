import {fetchGet, fetchPost} from '../fetch/createFetch';
import {apiUrl} from './index'

/*export const getTestData = v  => async dispatch => {}*/
//1、async定义的函数返回的是一个promise对象，相当于外部函数之间都是异步关系
//2、async函数内部遇到await，代码就暂停执行了，等待其后的的promise（此处是fetch类方法）执行完毕，相当于内部await之间都是同步
/*3、当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject，
即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），
仅当网络故障时或请求被阻止时，才会标记为 reject。*/

export const getTestData  = () => async dispatch => {
    let req,res;
    try{
        req = await fetchGet(apiUrl + 'getTest');
    }catch(err) {
        console.log("Network Err:",err);
        return
    }
    try{
        res = await req.text();
    }catch(err){
        console.log("textErr:",err);
        return
    }

    await dispatch({
        type:'GET_REQ_VALUE',
        res,
    });

};

export const getJsonTestData  = () => async dispatch => {
    let req,res;
    try{
        req = await fetchGet(apiUrl + 'getJsonTest');
    }catch(err) {
        console.log("Network Err:",err);
        return
    }

    try{
        res = await req.json();
    }catch(err){
        console.log("jsonErr:",err);
        return
    }

    if(res.status&&res.status === 400){
       await dispatch({
            type:'GET_JSON_REQ_VALUE',
            res,
        });
    }else{

    }

};

export const postTest = obj => async (dispatch, getState) =>{
    /* console.log("state:",getState().homeReducer);//获取state*/
    let req, res;
    try{
        req = await fetchPost((apiUrl + 'postTest'),obj);
    }catch(err) {
        console.log("Network Err:",err);
        return
    }
    try{
        res = await req.json();
    }catch(err){
        console.log("jsonErr:",err);
        return
    }

    console.log('res:',res);

};

async function basicDemo() {
    let result = await Math.random();
    console.log(result);
}
console.log(basicDemo());