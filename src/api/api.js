function fakeLogin(name, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'admin' && password === '12345678') {
                resolve({ code: 200, message: '登录成功' });
            } else {
                resolve({ code: 303, message: '账号或密码错误' });
            }
        }, 1000); // 模拟1秒钟后返回结果
    });
}
export { fakeLogin };