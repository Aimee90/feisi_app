<template>
	<view class="content m-collapse">
		<uni-collapse :accordion="true">
			 <uni-collapse-item title="基础信息" open>
				<scroll-view class="m-collapse-row" 
					v-for="(c, index) in columns" 
					:key="index">
					<text class="title">{{c.text}}</text>
					<text>{{data[c.key]}}</text>
				</scroll-view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import { vehicle } from '@/common/mock.js'
	import { getDebugStatus, getServiceStatus } from '@/common/status.js'
	export default {
		data() {
			return {
				columns: [],
				data: {}
			};
		},
		created() {
			this.columns=[
				{
					text: '机编号',
					key: 'vin'
				},{
					text: '终端编号',
					key: 'terminalCode'
				},{
					text: 'SIM卡号',
					key: 'simCard'
				},{
					text: '所属机构',
					key: 'orgName'
				},{
					text: '车辆类型',
					key: 'vehicleType'
				},{
					text: '注册日期',
					key: 'registDate'
				},{
					text: '客户名称',
					key: 'customerName'
				},{
					text: '客户电话',
					key: 'contractNumber'
				},{
					text: '调试状态',
					key: 'debugStatu'
				},{
					text: '调试时间',
					key: ''
				},{
					text: '服务状态',
					key: 'serviceStatus'
				},{
					text: '服务时间',
					key: ''
				},{
					text: '融资机构',
					key: 'financeName'
				}
			]
			this.data = vehicle.monitorVehicleBaseInfo
		}
	}
	
</script>

<style lang="scss">
	@import '@/components/m-block/collapse.scss'
</style>
