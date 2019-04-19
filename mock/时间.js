let moment = require('moment');
// 获取昨天的开始结束时间
function getYesterday () {
    let date = []
    date.push(moment().subtract('days', 1).format('YYYY-MM-DD'))
    date.push(moment().subtract('days', 1).format('YYYY-MM-DD'))
    return date
}
// 获取最近七天的开始结束时间
function getLast7Days () {
    let date = []
    date.push(moment().subtract('days', 7).format('YYYY-MM-DD'))
    date.push(moment().subtract('days', 1).format('YYYY-MM-DD'))
    return date
}
// 获取最近30天的开始结束时间
function getLast30Days () {
    let date = []
    date.push(moment().subtract('days', 30).format('YYYY-MM-DD'))
    date.push(moment().subtract('days', 1).format('YYYY-MM-DD'))
    return date
}
// 获取上一周的开始结束时间
function getLastWeekDays () {
    debugger
    let date = []
    let weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天  周日为一周中的第一天
    let start = moment().subtract(weekOfday + 7, 'days').format('YYYY-MM-DD') // 周一日期
    let end = moment().subtract(weekOfday + 1, 'days').format('YYYY-MM-DD') // 周日日期
    date.push(start)
    date.push(end)
    return date
}
// 获取上一个月的开始结束时间
function getLastMonthDays () {
    let date = []
    let start = moment().subtract('month', 1).format('YYYY-MM') + '-01'
    let end = moment(start).subtract('month', -1).add('days', -1).format('YYYY-MM-DD')
    date.push(start)
    date.push(end)
    return date
}
// 获取当前周的开始结束时间
function getCurrWeekDays () {
    let date = []
    let weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天 周日为一周中的第一天
    let start = moment().subtract(weekOfday, 'days').format('YYYY-MM-DD') // 周一日期
    let end = moment().add(7 - weekOfday - 1, 'days').format('YYYY-MM-DD') // 周日日期
    date.push(start)
    date.push(end)
    return date
}
// 获取当前月的开始结束时间
function getCurrMonthDays () {
    let date = []
    let start = moment().add('month', 0).format('YYYY-MM') + '-01'
    let end = moment(start).add('month', 1).add('days', -1).format('YYYY-MM-DD')
    date.push(start)
    date.push(end)
    return date
}

console.log(getCurrMonthDays());