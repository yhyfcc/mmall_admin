import util from '../util/util';
import qs from 'qs';

let service = {
    login(data) {
        let validateResult = this.checkLoginInfo(data);
        if(validateResult){
            return Promise.reject(validateResult);
        }
        return util.request({
            url: '/manage/user/login.do',
            method: 'post',
            data: qs.stringify(data)
        });
    },
    logout(){
        return util.request({
            url: '/user/logout.do',
            method: 'post'
        })
    },
    getUserList(data){
        return util.request({
            url: '/manage/user/list.do',
            method: 'post',
            data: qs.stringify(data)
        })
    },
    checkLoginInfo(data){
        let username = data.username.trim();
        let password = data.password.trim();
        if(typeof username !== 'string' || username.length === 0){
            return "Username can't be empty";
        }
        if(typeof password !== 'string' || username.length === 0){
            return "Password can't be empty";
        }
        return '';
    }
};

export default service;