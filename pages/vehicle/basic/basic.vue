<template>
	<view class="content no-padding">
		<view class="m-navigate">
			<uni-nav-bar 
				:title="vin" 
				:border="false" 
				background-color="#F5F5F5"
				left-icon="arrowleft" 
				@clickLeft="tobasic"
				></uni-nav-bar>
			<view class="m-columms">
				<uni-segmented-control 
					class="m-segment"
					:current="current" 
					:values="panels" 
					@clickItem="onClickItem" 
					style-type="text" 
					active-color="#FFD302"></uni-segmented-control>
			</view>
		</view>
		<scroll-view v-show="current === 0">
			<monitor></monitor>
		</scroll-view>
		<scroll-view v-show="current === 1">
			<info></info>
		</scroll-view>
		<scroll-view v-show="current === 2">
			<fault></fault>
		</scroll-view>
	</view>
</template>

<script>
	import info from './info.vue'
	import monitor from './monitor.vue'
	import fault from './fault.vue'
	export default {
		data() {
			return {
				vin: '',
				current: 0,
				panels: ['实时监控', '基本信息', '当前故障']
			};
		},
		onLoad(option) {
			this.vin = option.vin
		},
		methods: {
			onClickItem(e){
				this.current = e.currentIndex
			},
			tobasic(){
				uni.navigateBack({
					delta: 2
				})
			}
		},
		components: {
			info, monitor, fault
		}
	}
</script>

<style lang="scss">
	@import 'basic.scss';	
</style>
