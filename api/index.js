import request from '../common/request.js'
import { formatGetUri } from '../common/utils.js'
import user from './user.js'
const api = {}

// 获取用户信息
api.getUsers = () => {
	
}
// 页面登录
api.login = params => request.$post(user.login, params)
// 页面登出
api.logout = params => request.$post(user.logout, params)

export default api

