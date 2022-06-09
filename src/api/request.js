import request from '../axios/axios'

export default {
    getRequest(url, query) {
        return request({
            url: url,
            method: 'get',
            params: query
        })
    },
    postRequest(url, obj) {
        return request({
            url: url,
            method: 'post',
            data: obj
        })
    },
    putRequest(url, obj) {
        return request({
            url: url,
            method: 'put',
            data: obj
        })
    },
    deleteRequest(url, obj) {
        return request({
            url: url,
            method: 'delete'
        })
    }
}
