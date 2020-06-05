import { modules } from '../common/config.js'


export default {
	// 车辆列表
	list: `${modules.vehicle}`,
	// 车辆实时信息
	realTimeInfo: code => `${modules.vehicle}/monitorVehicleRealTimeInfo/${code}`,
	// 车辆工作参数
	trackData: vin => `${modules.vehicle}/getTrackData/${vin}`
}