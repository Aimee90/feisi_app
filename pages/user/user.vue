<template>
	<view class="content">
		<view class="m-usr-info">
			<uni-card>
				<view style="display: flex;align-items: center;">
					<view class="user-icon">
						<image class="img" src="@/static/img/userHL.png"></image>
					</view>
					<view class="user-info">
						<view class="m-bold u-info" style="font-size: 18px;">Admin</view>
						<view class="f-gray-dark u-info">管理员</view>
						<view class="f-gray-dark u-info">天泽信息产业股份有限公司</view>
					</view>
				</view>
			</uni-card>
		</view>
		<view>
			<uni-card>
				<uni-list>
					<uni-list-item title="我的消息" 
						show-badge="true" 
						badge-type="error" 
						:badge-text="0 == tips?``: tips<=tipMax?tips:tipMax+`+`" 
						@click="toMessages"
						key="0"></uni-list-item>
					<uni-list-item title="设置"
						@click="toSetting"
						key="1"></uni-list-item>
				</uni-list>
			</uni-card>
		</view>
		<view class="btn-row btn-fixed">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="primary" class="primary" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data(){
			return {
				tipMax: 99,
				messages: []
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin']),
			tips(){
				return this.messages.length
			}
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			},
			toMessages(){
				uni.navigateTo({
					url: "./messages/messages",
					animationType: "pop-in"
				})
			},
			toSetting(){
				uni.navigateTo({
					url: "./setting/setting",
					animationType: "pop-in"
				})
			}
		}
	}
</script>

<style>
	.m-usr-info{
		height: 158px;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
	}
	.user-icon{
		width: 100px;
		height: 100px;
		overflow: hidden;
		background: #F4F4F4;
		border-radius: 50px;
	}
	.user-info{
		-webkit-flex: 1;
		flex: 1;
		margin-left: 12px;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.u-info{
		padding: 4px 0;
	}
	
</style>
