import moment from 'moment'
import Taro from '@tarojs/taro'


export const DESHMOBILE = '0755-23919844'


/**系统信息 */
let systemInfo = {}



export function getSysInfo() {
    return systemInfo
}

export function setSystemInfo(info) {
    logMsg('系统信息', info)
    systemInfo = info
}

export function showToast(title) {
    Taro.showToast({
        title,
        icon: 'none',
        duration: 2000
    });
}

export function logMsg(...msg) {
    if (process.env.NODE_ENV !== 'production')
        console.log(...msg)
}

export function strNotNull(str) {
    if (str == undefined || str == null || str.length == 0)
        return false;
    else
        return true;
}


export function isObjEmpty(obj) {
    for (var i in obj) { // 如果不为空，则会执行到这一步，返回false
        return false
    }
    return true // 如果为空,返回true
}

export function dateFormat(timestamp, formatStr = "YYYY-MM-DD HH:mm:ss") {

    let comTime = moment.unix(timestamp).format(formatStr)
    logMsg(`转换后的时间 ${comTime}`)
    return comTime
}

export function urlEncode(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }
    return paramStr;
}

/**
 * 乘法精度问题
 * @param num1
 * @param num2
 * @returns {number}
 */
export function mul(num1, num2) {
    let m = 0, s1 = num1.toString(), s2 = num2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
        m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

export function div(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {
    }
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {
    }
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}

export function add(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

export function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

/*日期转化*/
export function convertDate(date, formate) {
    if (strNotNull(date))
        return moment(date).format(formate)
}

//UTC 时间转化
export function utcDate(utc, formate) {
    if (strNotNull(utc))
        return moment.unix(utc).format(formate)
}
