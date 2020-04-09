import axios from 'axios'


let util = {
    getUrlParam: (name) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name) ? urlParams.get(name) : null;
    },
    request(param){
        return axios.request(param)
            .then(res => {
                if(res.data.status === 0){
                    return Promise.resolve(res.data.data);
                }else if(res.data.status === 10){
                    this.doLogin();
                }else{
                    return Promise.reject(res.data.msg)
                }
            },rej => Promise.reject(rej.response));
    },
    doLogin(){
        window.location.href = '/login?redirect='+encodeURIComponent(window.location.pathname);
    },
    setLocalStorage(name,data){
        if(typeof data === 'object'){
            window.localStorage.setItem(name,JSON.stringify(data));
        }else if(typeof data === 'number' || 'string' || 'boolean'){
            window.localStorage.setItem(name,data);
        }else {
            alert("Can't store this type of item")
        }
    },
    getLocalStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else {
            return null;
        }
    },
    removeStorage(name){
        return window.localStorage.removeItem(name);
    }
};

export default util;