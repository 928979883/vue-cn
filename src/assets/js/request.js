// const { resolve } = require("path");
// var api = 'http://114.117.192.203:8013/website/';
/* var api = 'https://manager.whwater.com:8900/website/'; */

// var api = 'https://manager.whwater.com:8900/website/';

var urlInfo = window.location.href;
if(urlInfo.indexOf("10.200.16.137") >= 0 ) { //判断url地址中是否包含字符串
    //console.log("1" + urlInfo);
    var apiRes = 'http://10.200.16.137:9000/website/';
}else{
    //console.log("2" + urlInfo);
    var apiRes = 'https://manager.whwater.com:8900/website/';
}

function post(url, params){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiRes + url,
            headers:{
                'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8"
            },
            type: 'post',
            data: params,
            success: function(res){
                let data = JSON.parse(res);
                if(data.status == 0){
                    resolve(data)
                }else{
                    //alert(data.msg)
                    console.log(data.msg);
                }
            },
            error: function(err){
                /* console.log(555)
                apiRes = 'https://manager.whwater.com:8900/website/';
                post(url, params) */
            }
        })
    })
}

/* 20220210
function post(url, params, apiRes = 'https://10.200.16.138/website/'){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiRes + url,
            headers:{
                'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8"
            },
            type: 'post',
            data: params,
            success: function(res){
                let data = JSON.parse(res);
                if(data.status == 0){
                    resolve(data)
                }else{
                    alert(data.msg)
                }
            },
            error: function(err){
                console.log(555)

                post(url, params, 'https://manager.whwater.com:8900/website/')
            }
        })
    })
} 
*/
