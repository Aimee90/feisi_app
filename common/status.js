let getStatus = (statusList, status) => {
	return undefined==status?statusList:statusList.find(item=>status == item.code).label
}

// ACC状态
let ACCStatus = [{code: 0, label: '不限'},{code: 1, label:'开启'},{code: 2, label: '关闭'}]
export const getACCStatus = (status) => getStatus(ACCStatus, status)

// 在线状态
let onlineStatus = [{code: 0, label: '不限'},{code: 1, label:'开启'},{code: 2, label: '关闭'}]
export const getOnlineStatus = (status) => getStatus(ACCStatus, status)

// 锁车状态
let lockStatus = [{code: 0, label: '未锁'},{code: 1, label:'已锁'}]
export const getLockStatus = (status) => getStatus(lockStatus, status)

// 调试状态
let debugStatus = [{code: 0, label:'不可调试'}, {code: 1, label:'可调试'}]
export const getDebugStatus = (status) => getStatus(debugStatus, status)

// 服务状态
let serviceStatus = [{code: 0, label: '未开通'},{code: 1, label: '已开通'},{code: 2, label: '暂停'},{code: 3, label: '到期'}]
export const getServiceStatus = (status) => getStatus(serviceStatus, status)