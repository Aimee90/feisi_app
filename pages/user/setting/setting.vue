<template>
	<view class="content">
		<view class="uni-flex uni-row">
			<text class="title f-gray-dark">消息设置</text>
			<uni-card class="no-margin">
				<view>
					<uni-list>
						<uni-list-item showSwitch switchChecked :showArrow="false">消息通知</uni-list-item>
					</uni-list>
				</view>
			</uni-card>		
		</view>
		<view  class="uni-flex uni-row">
			<text class="title f-gray-dark">系统设置</text>
			<uni-card class="no-margin">
				<view>
					<uni-list>
						<uni-list-item rightText="中文">系统预约</uni-list-item>
						<uni-list-item>
							<navigator url="../resetpwd/resetpwd">修改密码</navigator>
						</uni-list-item>
					</uni-list>
				</view>
			</uni-card>			
		</view>

	</view>
</template>

<script>
	export default {
		name: 'Setting',
		data() {
			return {
				
			};
		},
		methods: {
			topassword(){
				uni.navigateTo({
					url: "../resetpwd/resetpwd"
				})
			}
		},
		components:{   }
	}
</script>

<style lang="scss" scoped>
	@import '@/components/m-block/titleblock.scss';
</style>
