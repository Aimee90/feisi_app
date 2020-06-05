<template>
	<view class="content no-padding">
		<view class="m-navigate">
			<input class="uni-input" confirm-type="search" placeholder="请输入机编号/SIM卡号/终端编号" />
			<uni-icons class="search-icon" type="search" size="20" color="#FFD302"></uni-icons>
			<view class="m-columms">
				<picker class="m-picker columm-3-item" mode="selector" 
					v-for="status in statusList"
					:range="status.data" 
					:range-key="'label'"
					@change="statusChange" >
					<view class="uni-input">{{status.label}}</view>
				</picker>
			</view>
		</view>
		<scroll-view class="m-card-list">
			<text class="m-summarise">共100条记录，5条在线记录</text>
			<uni-card class="m-list" v-for="(item, index) in data" :key="index">
			    <view class="m-block m-title">
					<text class="m-bold">{{item.modelName}}</text>
					<view class="rt">
						<text class="iconfont" style="color: #64CC7A;"></text>
						<text class="iconfont" style="color: #64CC7A;">&#xe675;</text>
						<text class="iconfont" style="color: #FFD966;">&#xe633;</text>
					</view>
				</view>
				<view class="m-block m-info">
					<view class="m-info-item">
						<text class="f-gray-light" data-icon="V">所属机构</text>
						<text class="f-gray-dark">{{item.orgName}}</text>
					</view>
					<view class="m-info-item">
						<text class="f-gray-light" data-icon="T">车辆类型</text>
						<text class="f-gray-dark">{{item.typeName}}</text>
					</view>
					<view class="m-info-item">
						<text class="f-gray-light" data-icon="M">车辆型号</text>
						<text class="f-gray-dark">{{item.modelName}}</text>
					</view>
					<view class="m-info-item">
						<text class="f-gray-light" data-icon="D">累计工作时间</text>
						<text class="f-gray-dark">{{item.totalWorkTime}}h</text>
						<text class="f-gray-light m-time rt">{{item.updateTime}}</text>
					</view>
				</view>
				<navigator  class="m-block m-footer border" :url="`../basic/basic?vin=`+item.vin">
					<view class="m-footer-item f-gray-dark">
						<uni-icons type="location-filled" size="18" color="#64CC7A"></uni-icons>
						<text>{{item.gpsAddress}}</text>
					</view>
					<i class="iconfont to-basic rt">&#xe64c;</i>
				</navigator>
				
			</uni-card>
			
		</scroll-view>
	</view>
</template>

<script>
	import { getACCStatus, getOnlineStatus, getLockStatus } from '@/common/status.js'
	import { vehicle } from '@/common/mock.js'
	export default {
		data() {
			return {
				data: [],
				statusList: []
			};
		},
		onReady() {
			this.data = vehicle.list
			this.statusList = [
				{
					label: 'ACC状态',
					value: 0,
					model: 'acc',
					data: getACCStatus()
				},{
					label: '在线状态',
					model: 'online',
					value: 0,
					data: getOnlineStatus()
				},{
					label: '锁车状态',
					model: 'lock',
					value: 0,
					data: getLockStatus()
				},
			]
		},
		methods: {
			statusChange(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import 'list.scss';
</style>
