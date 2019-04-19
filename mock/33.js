let s='start_dt=20181116&end_dt=20181122&product=bobo'
let a = s.split('&')
console.log(a);// [ 'start_dt=20181116', 'end_dt=20181122', 'product=bobo' ]
let params ={};
a.forEach((item,index)=>{
    let key = item.split('=')[0]
    let value = item.split('=')[1]
    params[key]=value;
})
//console.log(params);//{ start_dt: '20181116', end_dt: '20181122', product: 'bobo' }

function parseUrl (url) {
    let oAry = url.split('&')
    let params = {}
    oAry.forEach((item, index) => {
        let key = item.split('=')[0]
        let value = item.split('=')[1]
        params[key] = value;
    })
    return params
}

console.log(parseUrl(s));