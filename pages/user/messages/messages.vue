<template>
	<view class="content">
		<view style="uni-card-with-time">
			<scroll-view>
				<view class="message-item">
					<uni-tag class="timeTag" text="2020-05-19 11:10:30" circle></uni-tag>
					<uni-card>
						<view class="uni-block title">车辆报警</view>
					    <view class="uni-block basic">
							<view>LS5A3ABD7AB158999</view>
							<view>SPN.FMI</view>
						</view>
						<view class="uni-block detail">
							<view>
								<uni-tag type="primary" circle text="T"></uni-tag><label data-tag="T">TLA</label>ATC
							</view>
							<view>
								<uni-tag type="success" circle text="T"></uni-tag><label>发生时间</label>2019-01-01 10:00:00
							</view>
							<view>
								<uni-tag type="warning" circle text="A"></uni-tag><label>发生地点</label>江苏省南京市建邺区云龙山路
							</view>
						</view>
						<uni-list>
							<uni-list-item><navigator url="../../fault/detail/detail">查看详情</navigator></uni-list-item>
							<uni-list-item><navigator url="../../vehicle/basic/basic?vin=TLKS0007">车辆实时监控</navigator></uni-list-item>
						</uni-list>
					</uni-card>
				</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script> 
	// import { uniCard, uniTag, uniList , uniListItem } from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				
			};
		},
		// components: {uniCard, uniTag, uniList , uniListItem}
	}
</script>

<style lang="scss" scoped>
	$dashline: 1rpx dashed #d4d4d4;
	$fontcolor: #90d6f3;
	$backcolor: #e4f5fc;
	.message-item{
		padding-top: 10px;
		.uni-tag.timeTag{
			width: 40%;
			margin: auto;
			background-color: $backcolor; 
			height: 24px;
			line-height: 24px;
			/deep/ span{
				color: $fontcolor;
			}
		}
		
		.uni-block{
			border-bottom: $dashline;
			padding: 8px 0;
			uni-label{
				width: 28%;
				display: inline-block;
				&::after{
					content: ':';
				}
			}
		}
		.title{
			font-size: 38rpx;
			font-weight: bold;
		}
		.basic{
			uni-view{
				&:last-child{
					color: red;
				}
			}
		}
		.detail{
			&>uni-view{
				display: flex;
				justify-content: flex-start;
				.uni-tag {
					padding: 0;
					width: 14px;
					height: 14px;
					margin-right: 4px;
					position: relative;
					top: 14rpx;
					/deep/ span{
						position: relative;
						bottom: 8px;
					}
				}
			}
		}
		.uni-list-item{
			padding: 0;
		}
	}
	
</style>
