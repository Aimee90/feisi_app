
let host = ""
if(process.env.NODE_ENV === 'development'){
	host = 'http://192.168.101.71:8000'
}else{
	host = 'http://192.168.101.71:8000'
}
// 程序信息，置空则不显示
export const info = {
	about: 'help/about', // "关于我们"的文档标识
	version: 'v1.0.0',
	copyright: 'TIZA.CN',
	license: 'ISC 2.0',
	author: 'ZOULIN',
}

export const modules = {
	auth: `${host}/app/system/auth`,
	account: `${host}/app/system/account`,
	vehicle: `${host}/app/vehicle/vehicle`
}
