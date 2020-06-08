<template>
	<view class="content m-collapse no-padding">
		<view class="m-collapse">
			<cover-view class="m-parent-cover f-gray-dark">发生地：南京市建邺区</cover-view>
			<map style="width: 100%; height: 300px;"></map>
		</view>
		<view class="m-collapse">
			<view class="m-collapse-row space-out" >
				<text>机编号</text>
				<text>HRNZP210AKPH02191</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>SIM卡号</text>
				<text>15951614693</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>终端编号</text>
				<text>TZB1900292B</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>所属机构</text>
				<text>约翰迪尔</text>
			</view>
		</view>
		<view class="m-collapse">
			<view class="m-collapse-row space-out" >
				<text>故障码</text>
				<text>SPN.FMI</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>TLA</text>
				<text>ATC</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>故障参数</text>
				<text>SPN Name</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>故障模式</text>
				<text>FMI Name</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>发生时间</text>
				<text>2020-5-10 12:23:45</text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>解除时间</text>
				<text></text>
			</view>
			<view class="m-collapse-row space-out" >
				<text>持续时长</text>
				<text></text>
			</view>
		</view>
	</view>
</template>


<script>
	import { vehicle } from '@/common/mock.js'
	import { getACCStatus, getLockStatus, getOnlineStatus } from '@/common/status.js'
	export default {
		data() {
			return {
				data: {}
			};
		},
		created() {
			this.data = vehicle.monitorVehicleRealTimeInfo
		},
		computed: {
			acc(){
				return getACCStatus(this.data.acc)
			},
			lock(){
				return getLockStatus(this.data.lock)
			},
			online(){
				return getOnlineStatus(this.data.onlineStatus)
			}
		}
	}
	
</script>

<style lang="scss">
	@import '@/components/m-block/collapse.scss';
	.m-collapse{
		border-top: 1px solid $border;
	}
	.m-parent-cover{
		position: fixed;
		width: 100%;
		z-index: 999;
		line-height: 32px;
		padding-left: 10px;
		background-color: rgba($color: #FFF, $alpha: 0.8);
	}
	.m-collapse-row{
		padding: unset;
		border-bottom: 1px solid $border;
		&:last-child{
			border: unset;
		}
		text{
			padding: 10px 0;
			width: 25%;
			text-align: center;
			&:last-child{
				flex: 1;
				text-align: center;
				padding-right: 10px;
			}
		}
	}
</style>

