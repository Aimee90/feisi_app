<template>
	<view class="content no-padding">
		<view class="m-navigate">
			<input class="uni-input" confirm-type="search" placeholder="请输入机编号/SIM卡号/终端编号" />
			<uni-icons class="search-icon" type="search" size="20" color="#FFD302"></uni-icons>
			<view class="m-columms">
				<picker class="m-picker columm-2-item" mode="date" 
					v-for="timer in timePickers"
					:start="startDate" 
					:end="endDate"
					 @change="bindDateChange">
					<view class="uni-input">{{timer.label}}</view>
				</picker>
			</view>
		</view>
		<scroll-view class="m-card-list">
			<view class="m-summarise">共100条记录，<text class="f-tip-danger">1条</text>在线记录</view>
			<uni-card class="m-list" v-for="(item, index) in data" :key="index">
			    <view class="m-block m-title">
					<text class="m-bold">{{item.vin}}</text>
					<view class="rt">
						<text class="m-radius">{{item.beginTime}}</text>
					</view>
				</view>
				<view class="m-block m-info">
					<view class="m-info-item">
						<text class="f-gray-light">TLA</text>
						<text class="f-gray-dark">{{item.tla}}</text>
					</view>
					<view class="m-info-item">
						<text class="f-gray-light">报警项</text>
						<text class="f-gray-dark">{{item.alarmName}}</text>
					</view>
					<text class="m-tag info">已解除</text>
				</view>
				<navigator  class="m-block m-footer border" :url="`../basic/basic?vin=`+item.vin">
					<view class="m-footer-item f-gray-dark" style="">
						<uni-icons type="location-filled" size="18" color="#64CC7A"></uni-icons>
						<text>{{item.address}}</text>
					</view>
					<i class="iconfont to-basic rt">&#xe64c;</i>
				</navigator>
				
			</uni-card>
			
		</scroll-view>
	</view>
</template>

<script>
	import { getACCStatus, getOnlineStatus, getLockStatus } from '@/common/status.js'
	import { fault } from '@/common/mock.js'
	export default {
		data() {
			return {
				startDate: '2010-01-01',
				endDate: '2022-12-31',
				data: [],
				timePickers: []
			};
		},
		onReady() {
			this.data = fault.pageQueryAlarmFaultList
			this.timePickers = [
				{
					label: '开始时间',
					value: 0,
					model: 'acc'
				},{
					label: '结束时间',
					model: 'online',
					value: 0
				}
			]
		},
		methods: {
			bindDateChange(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import 'list.scss';
</style>
