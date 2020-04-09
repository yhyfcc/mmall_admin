import util from '../util/util';
import qs from 'qs';

let service = {
    getIndexStatistics(){
        return util.request({
            url: '/manage/statistic/base_count.do',
            method: 'post',
        });
    }
};

export default service;