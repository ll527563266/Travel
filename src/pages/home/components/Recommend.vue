<template>
    <div class="recommend">
        <div class="recommend-title">
            <span class="iconfont recommend-icon-heart">&#xe703;</span>
            <span class="recommend-title-text">猜你喜欢</span>
        </div>
        <ul>
            <router-link tag="li" class="item" v-for="item in list" :key="item.id" :to="'/detail/' + item.id">
                <div class="item-left">
                    <img class="item-img" :src="item.imgUlr" />
                </div>
                <div class="item-tag">{{item.tagName}}</div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <span class="item-score">
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                            <i class="iconfont item-icon-star">&#xe614;</i>
                        </span>
                        <span class="item-comments">{{item.commentNumber}}条评论</span>
                    </p>
                    <p class="item-price">
                        <span class="item-unit-price">￥
                            <em class="item-num">{{item.price}}</em>
                        </span>起
                        <span class="item-address">{{item.address}}</span>
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.recommend{
    margin-top:rem(10px);
    background: #fff;
    .recommend-title{
        padding:rem(16px) 0;
        text-indent:rem(15px); 
        .recommend-icon-heart{
            color:rgb(255, 101, 77);
        }
        .recommend-title-img{
            display: inline-block;
            vertical-align: top;
            overflow: hidden; 
            width:rem(15px);
        }
        .recommend-title-text{
            font-size:rem(16px);
            color: #212121;
        }
    }
    .item{
        display: flex;
        height:rem(120px);
        overflow:hidden;
        position: relative;
        border-bottom: 1px solid #e0e0e0;
        .item-left{
            width:rem(100px);
            height:rem(100px);
            padding:rem(10px);
            .item-img{
                width:100%;
                height:100%;
            }
        }
        .item-tag{
            position:absolute;
            top:rem(10px);
            left:rem(10px);
            width:rem(53px);
            height:rem(20px);
            color: #fff;
            font-size:rem(9px);
            line-height:rem(20px);
            background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
            text-indent:rem(3px);
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .item-info{
            flex:1;
            .item-title{
                margin-top:rem(26px);
                height:rem(22px);
                color:#212121;
                font-size:rem(16px);
                @include ellipsis();
            }
            .item-desc{
                height:rem(17px);
                line-height:rem(17px);
                .item-score{
                    width:rem(82.5px);
                    height:rem(17px);
                    line-height:rem(17px);
                    display: inline-block;
                    position: relative;
                    .item-icon-star{
                        font-size:rem(10px);
                        color:#ffb436;
                        margin-right:rem(-3px);
                    }
                    .item-comments{
                        color: #616161;
                        font-size: rem(12px);
                        line-height: rem(17px);
                        vertical-align: text-bottom;
                    }
                }
                
            }
            .item-price{
                color: #616161;
                font-size:rem(12px);
                margin-top:rem(10px);
                position:relative;
                .item-unit-price{
                    line-height:rem(20px);
                    font-size:rem(12px);
                    color: #ff8300;
                }
                .item-num{
                    font-size:rem(20px);
                    margin-left:rem(-6px);
                }
                .item-address{
                    position:absolute;
                    right:rem(12px);
                    bottom:0;
                }
            }
            
        }
    }
}

</style>

