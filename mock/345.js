let obj ={
    name:'李佳宝',
    age:9
}


function format(obj) {
    const params = []
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
        // 对于需要编码的文本（比如说中文）我们要进行编码
        params.push([key, decodeURIComponent(value)].join('='))
    })
    return params.join('&')
}
let s1 ='http://i.bi_matrix_web01.yixia.com:8081/ads/adsTotal/getData'
let reqPath = s1.split(':')[2].substr(4)
 let arr3=   ["20181120_全部_全部", "20181126_全部_全部", "20181127_全部_全部"]
 let arr4=   [ "20181126_全部_全部","20181029_全部_全部", "20181111_全部_全部"]

let abc=arr4.sort((a, b) => {
    return Number(a.substr(0, 8)) > Number(b.substr(0, 8))
})

console.log(abc);