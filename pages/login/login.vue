<template>
	<view class="content no-padding">
		<view class="login-header">
			<view class="back"></view>
			<view class="logo"></view>
			<view class="title">
				<text>非道路远程管理信息平台</text>
			</view>
		</view>
		<view class="login-form">
			<view class="input-group">
				<view class="input-row">
					<m-input class="m-login-input" type="text" clearable focus v-model="username" data-label="用户名"></m-input>
				</view>
				<view class="input-row">
					<m-input class="m-login-input" type="password" displayable v-model="password" data-label="密码"></m-input>
					<checkbox-group class="m-checkbox" v-model="rememberMe">
						<label><checkbox value="1" checked="true" />记住我</label>
					</checkbox-group>
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" hover-class="btn-clicked" class="btn-base" @tap="bindLogin">登录</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import {
		mapState,
		mapMutations
	} from 'vuex'
	
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				languageList: [{value: 0, label: '中文'}, {value: 1, label: '英文'}],
				rememberMe: false,
				username: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					username: this.username,
					password: this.password,
					rememberMe: this.rememberMe
				};
				// this.$api.login(data).then(res=>{
				// 	this.login(data)
				// })
				this.login(data);
				this.toMain(this.username)
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			this.initPosition();
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		}
	}
</script>

<style lang="scss">
	@import "login.scss";
</style>
