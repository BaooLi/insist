let Qs = require('Qs')
let CryptoJS = require('crypto-js')
 let format = (params) => Qs.stringify(params)
// let ary = ['ab','ac','ad','aba','abb'];
// let obj= {
//     ab:'ee',
//     age:'ff',
//     ac:'ws',
//     ad:'23',
//     aba:45,
//     abb:123
// }
 let sortParams =(params)=> {
    let ary = Object.keys(params);
    ary.sort((a,b)=> a.toString().localeCompare(b.toString(),'zh-CN'))
    let obj = {}
    ary.forEach((item,index)=>{
        obj[item] = params[item]
    })
    return obj;
}

// [ 'ab', 'aba', 'abb', 'ac', 'ad' ]
// { ab: 'ee', aba: 45, abb: 123, ac: 'ws', ad: '23', age: 'ff' }
// console.log(sortParams(obj));
let url='http://10.31.3.188:8085/product/videoEffect/getLineData?start_dt=20180901&end_dt=20180902&token=bdcd95aea239b102e5850c142f1dd3f4'
let ourl='/product/videoEffect/getLineData?end_dt=20180902&start_dt=20180901KhPQP12ZX62KAvNl'
let params={
    start_dt:20180901,
    end_dt:20180902,
}
let authorizeKey = 'KhPQP12ZX62KAvNl';
let url1='/product/videoEffect/getLineData?'

 let tokenStr = CryptoJS.MD5(ourl.split('?')[0].toString() +format(sortParams(params))+ authorizeKey)
