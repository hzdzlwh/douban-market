<template>
  <div class="list_header">
    <a href="#/home" class="btn_index">首页</a>
    <div class="list_category" v-on:click="chooseCategory">{{currenSelect.text}}<i class="fa fa-angle-down"></i></div>
    <div class="category_box" v-bind:class="{slide_down:isShow}">
      <ul>
        <li v-for="(item, index) in categorys" :data-id="index" v-on:click="onSelect($event)" :class="[index==currenSelect.id?'active':'']">{{item.text}}</li>
      </ul>
    </div>
    <div class="mask" v-show="isShow" @click="onMask"></div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                isShow: false,
                currenSelect: {
                    id: 0,
                    text: '饮食'
                },
                categorys:[
                  {id:0,text: ''},
                  {id:1,text:'饮食'},
                  {id:2,text:'服装'},
                  {id:3,text:'配饰'},
                  {id:4,text:'包袋'},
                  {id:5,text:'鞋靴'},
                  {id:6,text:'美容护肤'},
                  {id:7,text:'家居'},
                  {id:8,text:'时间'},
                  {id:9,text:'3C数码'}
                ]
            }
        },
        methods: {
            chooseCategory(){
                this.isShow = true;
            },
            onMask(){
                this.isShow = false;
            },
            onSelect(e){
              let that = e.target;
              this.currenSelect.id = that.getAttribute('data-id');
              this.currenSelect.text = that.innerText;
              this.isShow = false;
            }
        },
        created(){
          this.currenSelect = this.categorys[this.$route.params.id];
        }
    }
</script>

<style scoped>
  .list_header {
    position: relative;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
  }
  .list_header .btn_index {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 0 15px;
    text-align: center;
    color: #999;
  }
  .list_header .list_category{
    width: auto;
    margin: 0 auto;
    text-align: center;
    color: #3ba94d;
  }
  .list_header .category_box{
    position: fixed;
    top: -50%;
    left: 50%;
    z-index: 110;
    width: 240px;
    height: 320px;
    padding: 10px 0;
    margin: -160px 0 0 -120px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 6px #ccc;
    overflow: hidden;
    transition: top .5s ease 0s;
  }
  .list_header .slide_down{
    top: 50%;
  }
  .list_header .category_box ul{
    width: 250px;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list_header .category_box ul li{
    text-align: center;
    color: #666;
    font-size: 14px;
  }
  .list_header .category_box ul li.active{
    background-color: #f0f0f0;
  }
  .list_header .mask{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
