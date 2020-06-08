<template>
	<view class="content no-padding">
		<view class="m-navigate">
			<input class="uni-input" confirm-type="search" placeholder="请输入机编号/SIM卡号/终端编号"/>
			<uni-icons class="search-icon" type="search" size="20" color="#FFD302"></uni-icons>
			<view class="m-columms">
				<m-fab
				class="m-u-fab"
				:content="content"
				vertical="top"
				:popMenu="true">
				
				</m-fab>
			</view>
		</view>
		<view class="m-show-cover">
			
		</view>
		<view class="m-map" style="width: 100%;height: 100%;">
			<map class="map-view" :style="mapStyle"></map>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	import mFab from '@/components/m-fab/m-fab.vue'
	export default {
		name: 'Main',
		data(){
			return {
				content: [
					{
						count: 123,
						text: '车辆总数',
						active: false
					},
					{
						count: 123,
						text: '当前在线数',
						active: false
					},
					{
						count: 123,
						text: '当前离线数',
						active: false
					}
				]
			}
		},
		computed: {
			...mapState(['forcedLogin', 'hasLogin', 'userName']),
			mapStyle(){
				return {
					width: '100%',
					height: uni.windowHeight+'px'
				}
			}
		},
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		components: mFab
	}
</script>

<style lang="scss">
	@import '@/components/m-navigate/m-navigate.scss';
	.map-view{
		min-height: 700px;
	}
	.m-navigate{
		background-color: rgba($color: #FFF, $alpha: 0.1);
		z-index: 999999999;
	}
	.m-u-fab{

	}
</style>
