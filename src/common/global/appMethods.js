// 这里主要是通用方法集合
export const appMethods = {
    // 生成一个随机的任务编号
    getRandomId() {
        return Date.now() + Math.random().toString(16).substring(2, 4);
    }
}
