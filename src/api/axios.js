let base = 'http://localhost:9090'; //后台服务器的请求地址

export const postRequest=(url, params)=>{
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}

