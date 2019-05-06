import {fetchGet} from '../fetch/createFetch';

export const getMenuData  = () => async dispatch => {
    let req,res;
    try{
        req = await fetchGet('/json/menu.json');
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

    if(res.data){
        await dispatch({
            type: 'GET_MENU_DATA',
            res: res.data,
        });
    }else{

    }

};