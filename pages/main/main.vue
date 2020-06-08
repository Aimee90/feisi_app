<template>
	<view class="content no-padding">
		<cover-view class="m-cover-view">
			<view>
				<input class="uni-input" confirm-type="search" placeholder="请输入机编号/SIM卡号/终端编号" />
				<uni-icons class="search-icon" type="search" size="20" color="#FFD302"></uni-icons>
			</view>
			<view>
				
			</view>
		</cover-view>
		<view class="m-map">
			<map class="map-view" :style="mapStyle"></map>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
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
			console.log('----------',uni.windowHeight)
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
		}
	}
</script>

<style lang="scss">
	.map-view{
		min-height: 700px;
	}
	.m-map{
		display: flex;
	}
</style>
