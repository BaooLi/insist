let Qs = require('Qs')
let CryptoJS = require('crypto-js')
// let format = (params) => Qs.stringify(params)
let format = (params) => JSON.stringify(params)
let sortParams = (params) => {
    let ary = Object.keys(params)
    ary.sort((a,b) => a.toString().localeCompare(b.toString(), 'zh-CN'))
    let obj = {}
    ary.forEach((item, index) => {
        obj[item] = params[item]
    })
    return obj
}
const authorizeKey = 'KhPQP12ZX62KAvNl'
let delEmptyParams = (params) => {
    for (let key in params) {
        if (params[key] === '') {
            delete params[key]
        }
    }
    return params
}
let generateToken = (url, params) => {
    let path = url.substr(39)
    let tokenStr = ''
    if (Object.keys(params).length === 0 && url.includes('?')) {
        let reqPath = path.split('?')[0]
        tokenStr = CryptoJS.MD5(reqPath.toString()  + authorizeKey)
    } else {
        params = delEmptyParams(params)
        if (url.includes('http://i.bi_matrix_web01.yixia.com:8085') || url.includes('http://i.bi_matrix_web01.yixia.com:8081')) {
            tokenStr = CryptoJS.MD5(path.toString() + format(sortParams(params)) + authorizeKey)
        } else if (url.includes('?')) {
            let reqPath = path.split('?')[0]
            tokenStr = CryptoJS.MD5(reqPath.toString() + format(sortParams(params)) + authorizeKey)
        }
    }
    return tokenStr
}
// http://i.bi_matrix_web01.yixia.com:8085/product/videoEffect/getLineData
// {start_dt: "20181024", end_dt: "20181122", product: "bobo"}
// {}
