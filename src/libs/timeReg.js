
export const  timeReg = (date) => {
    // 时间戳转化成标准格式
    // console.log(timeReg(1477808630404))
    // '2016-10-30 14:23:50
    const now = new Date(date)
    const y = now.getFullYear()
    const m = now.getMonth() + 1
    const d = now.getDate()
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + now.toTimeString().substr(0, 8)
  }
export const  fmtDate = (obj) => {
    // 北京时间转化成标准格式的 年月日
    // console.log(fmtDate("2018-04-25T07:30:18.140Z"))
    // '2018-04-25'
    const date = new Date(obj)
    const y = 1900 + date.getYear()
    const m = '0' + (date.getMonth() + 1)
    const d = '0' + date.getDate()
    return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length)
  }
export const  getNowFormatDate = (obj) => {
    // 北京时间转化成标准格式的 年月日时分秒
    // console.log(getNowFormatDate("2018-04-25T07:30:18.140Z"))
    // '2018-04-25 15:30:18'
    var date = new Date(obj)
    var seperator1 = '-'
    var seperator2 = ':'
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    var minuts = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + minuts + seperator2 + date.getSeconds()
    return currentdate
  }
export const  formatDateTime = (date) => {
    // 中国标准时间转化成标准格式的 年月日时分秒
    // console.log(formatDateTime("Fri Jul 20 2018 15:26:05 GMT+0800 (中国标准时间)"))
    // '2018-07-20 15:26:18'
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    var h = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  }
export const  formatDate = (date) => {
    // 中国标准时间转化成标准格式的 年月日时分秒
    // console.log(formatDateTime("Fri Jul 20 2018 15:26:05 GMT+0800 (中国标准时间)"))
    // '2018-07-20 15:26:18'
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    return y + '-' + m + '-' + d
  }
export const  formatTime = (date) => {
    // 中国标准时间转化成标准格式的 年月日时分秒
    // console.log(formatDateTime("Fri Jul 20 2018 15:26:05 GMT+0800 (中国标准时间)"))
    // '2018-07-20 15:26:18'
    var h = date.getHours()
    var minute = date.getMinutes()
    minute = minute < 10 ? ('0' + minute) : minute
    return h + ':' + minute
  }
  // 获取当前时间函数
export const  timeFormate = (temp) => {
    let year = new Date(temp).getFullYear();
    let month =new Date(temp).getMonth() + 1 < 10? "0" + (new Date(temp).getMonth() + 1): new Date(temp).getMonth() + 1;
    let date =new Date(temp).getDate() < 10? "0" + new Date(temp).getDate(): new Date(temp).getDate();
    let hour =new Date(temp).getHours() < 10? "0" + new Date(temp).getHours(): new Date(temp).getHours();
    let timer =new Date(temp).getMinutes() < 10? "0" + new Date(temp).getMinutes(): new Date(temp).getMinutes();
    return year + "年" + month + "月" + date +"日";
  }
export const week = () => {
    let date = new Date()
    return "星期" + "日一二三四五六".charAt(date.getDay())
}
