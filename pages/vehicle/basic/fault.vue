<template>
	<scroll-view class="m-card-list">
		<uni-card class="m-list" v-for="(item, index) in data" :key="index">
		    <navigator class="m-block m-title" :url="`../monitor/monitor`">
				<text class="m-radius">{{beginTime(item.beginTime)}}</text>
				<view class="rt">
					<text class="iconfont f-gray-dark">&#xe64c;</text>
				</view>
			</navigator>
			<view class="m-block m-info">
				<view class="m-info-item">
					<text class="f-gray-dark" data-icon="V">TLA</text>
					<text class="f-gray-dark">{{item.tla}}</text>
				</view>
				<view class="m-info-item">
					<text class="f-gray-dark" data-icon="T">预警项</text>
					<text class="f-gray-dark">{{item.alarmName}}</text>
				</view>
				<view class="m-info-item">
					<text class="f-gray-dark" data-icon="M">发生时间</text>
					<text class="f-gray-dark">{{beginTime(item.beginTime)}}</text>
				</view>
			</view>
			<view  class="m-block m-footer border">
				<view class="m-footer-item f-gray-light">
					故障地点：<text>{{item.address}}</text>
				</view>
			</view>
			
		</uni-card>
		
	</scroll-view>
</template>

<script>
	import { fault } from '@/common/mock.js'
	import { formatDateTime } from '@/common/utils.js'
	export default {
		data(){
			return {
				data: []
			}
		},
		created(){
			this.data = fault.ageQuerySingleVehicleAlarm
		},
		methods: {
			beginTime(time){
				return formatDateTime(time)
			}
		}
	}
</script>

<style lang="scss">
	@import '@/components/m-block/list.scss';
</style>
