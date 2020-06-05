export const vehicle  = {
	list: [{ //车辆列表        "id": "159",        "vin": "TLKS0007",        "terminalCode": "TLKS0007",        "cardCode": "1202004170005",        "orgName": "特雷克斯",        "typeName": "TLKSExcavator",        "modelName": "TLKSE140LC",        "acc": 1,        "dataUpdateTime": "1589254166440",        "updateTime": "2020-05-12 11:29:26",        "gpsAddress": '江苏省南京市',        "lock": 1,        "saleStatus": null,        "customerName": null,        "phoneNumber": null,        "totalWorkTime": 134.0,        "gps": 1,        "terminalStatus": null,        "oneLevelLock": 1,        "twoLevelLock": 0,        "threeLevelLock": 0,        "gpsTime": null,        "lon": null,        "lat": null,        "lastLon": null,        "lastLat": null,        "lockStatus": {            "RELAY_LOCK_1": 1        },        "signalStrength": "26",        "testStatus": 1,        "online": 1    }],
	monitorVehicleRealTimeInfo: {// 车辆实时信息	    "lock": 0,	    "oneLevelLock": 1,	    "twoLevelLock": 0,	    "threeLevelLock": 0,	    "lockStatus": {	        "RELAY_LOCK_1": 1	    },	    "id": "104",	    "onlineStatus": 0,	    "acc": 1,	    "faultStatus": 0,	    "gps": 1,	    "dataUpdateTime": "1589255721549",	    "debugEndTime": null,	    "debugStartTime": null,	    "description": null,	    "gpsAddress": "江苏省南京市",	    "gpsArea": "新北区",	    "gpsCity": "常州市",	    "gpsProvince": "江苏省",	    "gpsTime": "1589255719000",	    "lastLat": 31.847710,	    "lastLon": 119.910789,	    "lat": 31.847710,	    "lon": 119.910789,	    "totalWorkTime": "27",	    "vin": "TLKS0007",	    "signalStrength": "24"	},
	trackData: { //车辆工作参数		"time": 12,		"rt": null,		"itemVMList": [{			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "VIN",			"functionId": null,			"name": "机编号",			"offset": null,			"rate": null,			"unit": null,			"value": "TLKS0004",			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "UPDATETIME",			"functionId": null,			"name": "工况时间",			"offset": null,			"rate": null,			"unit": null,			"value": "2020-04-28 13:48:52",			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "ADDRESS",			"functionId": null,			"name": "位置",			"offset": null,			"rate": null,			"unit": null,			"value": null,			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "FootSwitchStatus",			"functionId": null,			"name": "脚踏开关状态()",			"offset": null,			"rate": null,			"unit": null,			"value": null,			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "MachineCollectionStatus",			"functionId": null,			"name": "机器收藏状态()",			"offset": null,			"rate": null,			"unit": null,			"value": null,			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "Keyswitch status",			"functionId": null,			"name": "钥匙开关状态()",			"offset": null,			"rate": null,			"unit": null,			"value": null,			"description": null		}, {			"id": null,			"bitLength": null,			"bitStart": null,			"code": null,			"dataFormat": null,			"enName": "Engine controller status",			"functionId": null,			"name": "发动机控制器状态()",			"offset": null,			"rate": null,			"unit": null,			"value": null,			"description": null		}]	},	monitorVehicleBaseInfo: {//车辆基本信息	    "lock": null,	    "oneLevelLock": null,	    "twoLevelLock": null,	    "threeLevelLock": null,	    "lockStatus": null,	    "id": "159",	    "vin": "TLKS0007",	    "terminalCode": "TLKS0007",	    "simCard": null,	    "orgName": null,	    "financeName": "久保田融资",	    "financeId": null,	    "vehicleModelId": null,	    "vehicleModel": "TLKSE140LC",	    "vehicleTypeId": null,	    "vehicleType": "TLKSExcavator",	    "totalWorkTime": null,	    "acc": null,	    "gps": null,	    "dataUpdateTime": null,	    "gpsTime": null,	    "gpsAddress": null,	    "serviceStatus": 1,	    "serviceStartDate": null,	    "serviceEndDate": null,	    "servicePeriod": 12,	    "contractNumber": "1232581364",	    "customerName": "JQK",	    "customerId": null,	    "alarmName": "RST",	    "alarmNumber": "1786112233",	    "phoneNumber": "17864113322",	    "debugStatus": 1,	    "debugBeginTime": null,	    "debugEndTime": null,	    "registDate": "2020-05-09",	    "serviceDate": "2020-05-07 ~ 2021-05-07",	    "debugDate": "2020-05-07 ~ 2020-06-30",	    "loanPeriod": null,	    "saleDate": null,	    "saleMethod": null,	    "saleStatus": 1,	    "seller": null,	    "organizationId": null,	    "lon": null,	    "lat": null,	    "builder": "",	    "lockList": []	},
	
}

export const fault = {
	ageQuerySingleVehicleAlarm: [//车辆当前故障
	    {
	        "id": "1259035509791916032",
	        "vin": "TLKS0004",
	        "terminalCode": null,
	        "simCard": null,
	        "itemNum": 0,
	        "spnFmiNum": 0,
	        "alarmState": null,
	        "address": "江苏省南京市建邺区建邺区新城科技园富春江东街67号天泽信息科研楼",
	        "alarmName": null,
	        "faultCode": null,
	        "spnName": null,
	        "spn": null,
	        "fmi": null,
	        "fmiName": null,
	        "beginTime": "1591279798641",
	        "duration": null,
	        "endTime": null,
	        "spnFmi": "239632.21",
	        "tla": null,
	        "frequency": 0,
	        "dataUpdateTime": null,
	        "lastLon": null,
	        "lastLat": null,
	        "alarmType": 2,
	        "lat": null,
	        "lon": null,
	        "alarmCode": null,
	        "orgName": null
	    },
	    {
	        "id": "1259652209981784064",
	        "vin": "TLKS0004",
	        "terminalCode": null,
	        "simCard": null,
	        "itemNum": 0,
	        "spnFmiNum": 0,
	        "alarmState": null,
	        "address": "江苏省南京市建邺区建邺区新城科技园富春江东街67号天泽信息科研楼",
	        "alarmName": null,
	        "faultCode": null,
	        "spnName": null,
	        "spn": null,
	        "fmi": null,
	        "fmiName": null,
	        "beginTime": "1591279798641",
	        "duration": null,
	        "endTime": null,
	        "spnFmi": "239632.21",
	        "tla": null,
	        "frequency": 0,
	        "dataUpdateTime": null,
	        "lastLon": null,
	        "lastLat": null,
	        "alarmType": 2,
	        "lat": null,
	        "lon": null,
	        "alarmCode": null,
	        "orgName": null
	    }
	],
	pageQueryAlarmFaultList: [	     {	        "id": "1259652209981784064",	        "vin": "TLKS0004",	        "terminalCode": null,	        "simCard": null,	        "itemNum": 0,	        "spnFmiNum": 0,	        "alarmState": 0,	        "address": "江苏省南京市建邺区建邺区新城科技园富春江东街67号天泽信息科研楼",	        "alarmName": null,	        "faultCode": null,	        "spnName": null,	        "spn": null,	        "fmi": null,	        "fmiName": null,	        "beginTime": "1589012384000",	        "duration": null,	        "endTime": null,	        "spnFmi": "239632.21",	        "tla": "46",	        "frequency": 0,	        "dataUpdateTime": null,	        "lastLon": null,	        "lastLat": null,	        "alarmType": 2,	        "lat": null,	        "lon": null,	        "alarmCode": null,	        "orgName": "特雷克斯"		}	],
}