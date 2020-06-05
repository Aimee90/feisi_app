<template>
	<view class="content m-collapse">
		<uni-collapse>
			<uni-collapse-item title="位置数据" open>
				<!-- <map style="width: 100%; height: 300px;"></map> -->
				<view class="m-collapse-row location" >
					<text>经度</text>
					<text>{{data.lastLat}}</text>
					<text>纬度</text>
					<text>{{data.lastLon}}</text>
				</view>
				<view class="m-collapse-row address" >
					<text>位置</text>
					<text>{{data.gpsAddress}}</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="基础数据" open>
				<view class="m-collapse-row">
					<text>ACC状态</text>
					<text>{{acc}}</text>
				</view>
				<view class="m-collapse-row" >
					<text>锁车状态</text>
					<text>{{lock}}</text>
				</view>
				<view class="m-collapse-row" >
					<text>在线状态</text>
					<text>{{online}}</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="工作参数" open>
				<view class="m-collapse-row" >
					<text>工况时间</text>
					<text></text>
				</view>
				<view class="m-collapse-row" >
					<text>其他参数1</text>
					<text></text>
				</view>
				<view class="m-collapse-row" >
					<text>其他参数n</text>
					<text></text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
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
				text-align: right;
				padding-right: 10px;
			}
		}
	}
	.location, .address{
		text{
			&:nth-child(2n){
				background-color: #FFF;
				text-align: left;
				padding-left: 10px;
			}
		}
	}
</style>

