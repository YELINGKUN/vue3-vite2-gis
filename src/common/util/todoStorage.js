/*
 * @Author: lincoln
 * @Date: 2022-03-23 22:44:21
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-03-27 23:14:42
 * @FilePath: \VUE3-DEMO\todolist\src\util\todoStorage.js
 * @Description: 
 * 
 */
const local_key = "todomvc";

// 生成一个随机的任务编号
export function generateId() {
  return Date.now() + Math.random().toString(16).substring(2, 4);
}

// 获取所有数据
export function fetch() {
  let result = localStorage.getItem(local_key);
  if ("undefined" != result) {
    return JSON.parse(result);
  }
  return [];
}

export function save(todos) {
  localStorage.setItem(local_key, JSON.stringify(todos));
}