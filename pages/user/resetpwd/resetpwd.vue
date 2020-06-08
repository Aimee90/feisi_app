<template>
	<view class="content">
		<view class="uni-flex uni-row">
			<text class="title f-gray-dark">原始密码</text>
			<uni-card class="no-margin">
				<view>
					<input class="uni-input" type="text" password placeholder="请输入原始密码" />
				</view>
			</uni-card>		
		</view>
		<view class="uni-flex uni-row">
			<text class="title f-gray-dark">新密码</text>
			<uni-card class="no-margin">
				<view>
					<input class="uni-input" type="text" password placeholder="请输入新密码" />
				</view>
			</uni-card>		
		</view>
		<view class="uni-flex uni-row">
			<text class="title f-gray-dark">确认密码</text>
			<uni-card class="no-margin">
				<view>
					<input class="uni-input" type="text" password placeholder="请确认密码" />
				</view>
			</uni-card>		
		</view>
		<view class="btn-row btn-fixed">
			<button type="primary" class="primary">完成</button>
		</view>
	</view>
	
	
</template>

<script>
	export default {
		name: "ResetPwd",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/components/m-block/titleblock.scss';
</style>
