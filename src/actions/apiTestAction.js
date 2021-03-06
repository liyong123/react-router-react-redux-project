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
        console.error("网络故障:",err);
        return
    }
    try{
        if (req.ok){ //避免404与500这样的响应
            res = await req.text();
        }else{
            //如果ok为false，比如404、500,打印出状态码，即以前的statuscode
            console.error('后台服务出错，Code：' + req.status);
            return
        }
    }catch(err){
        console.error("接口数据有误:",err);
        return
    }

    if (res){
        await dispatch({
            type:'GET_REQ_VALUE',
            res,
        });
    }



};

export const getJsonTestData  = () => async dispatch => {
    let req,res;
    try{
        req = await fetchGet(apiUrl + 'getJsonTest');
    }catch(err) {
        console.log("网络故障:",err);
        return
    }

    try{
        if (req.ok){
            res = await req.json();
        }else{
            console.error('后台服务出错，Code：' + req.status);
            return
        }

    }catch(err){
        console.log("接口数据有误:",err);
        return
    }

    if(res.status&&res.status === 400){ //此处的status是res的，注意和上面req.status（statusCode）的区别
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
        console.log("网络故障:",err);
        return
    }
    try{
        if (req.ok){
            res = await req.json();
        }else{
            console.error('后台服务出错，Code：' + req.status);
            return
        }
    }catch(err){
        console.log("接口数据有误:",err);
        return
    }
    console.log('res:',res);

};

export const login = (obj) => async  dispatch => {
    let req, res;
    try{
        req = await fetchPost((apiUrl + 'login'),obj);
    }catch(err) {
        console.log("网络故障:",err);
        return
    }
    try{
        if (req.ok){
            res = await req.json();
        }else{
            console.error('后台服务出错，Code：' + req.status);
            return
        }
    }catch(err){
        console.log("接口数据有误:",err);
        return
    }

    if(res.status&&res.status === 400){ //此处的status是res的，注意和上面req.status（statusCode）的区别
        localStorage.setItem('x-access-token',"ssss");//登录成功 将token或者openid保存到storage中，其他接口的header要带上此值
    }else {

    }

};
/* //async 返回的是一个promise对象（异步）
async function basicDemo() {
    let result = await Math.random();
    console.log(result);
}
console.log(basicDemo());*/
