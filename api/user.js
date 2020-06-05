import { modules } from '../common/config.js'

export default {
	// 用户登录
	login: `${modules.auth}/login`,
	// 退出
	logout: `${modules.auth}/logout`,
	// 当前用户信息
	currentAccount: `${modules.account}/current`
}