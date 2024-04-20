//公用方法
let _params = (param) =>{
    var pStr = window.location.hash.toString() || window.location.search.toString(),
        r = new RegExp("[\?&]*" + param + "=([^&]+)"),
        m = pStr.match(r);
    if (m) return m[1].replace('"', '');
    else return '';
};

//返回模块接口
export {
    _params
}
