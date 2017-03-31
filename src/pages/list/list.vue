<template>
  <div class="">
    <list-header></list-header>
    <list-nav></list-nav>
    <div class="db_list_options">
      <div class="items">
        <a href="#" class="active">总和排序<i class="fa fa-arrow-down"></i></a>
        <a href="#">上架时间 <i class="fa fa-arrow-down"></i></a>
        <a href="#">价格 <i class="fa fa-arrow-down"></i></a>
        <a href="#">喜欢数 <i class="fa fa-arrow-down"></i></a>
      </div>
    </div>
    <div class="db_products" v-infinite-scroll="getProducts" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <ul>
        <li v-for="product in products">
          <div class="pdt_item">
            <a :href="product.url+'/'+product.id" class="pdt_img">
              <img v-lazy="product.src" height="300" width="300">
              <i class="fa fa-heart-o" @click="onHeart($event)"></i>
            </a>
            <div class="pdt_detail">
              <h3 class="pdt_title">
                <a :href="product.url">{{product.newPrice}}</a>
              </h3>
              <p class="pdt_price">
                <span class="pdt_new_price">{{product.newPrice}}</span>
                <del class="pdt_old_price">{{product.oldPrice}}</del>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import ListHeader from './list_header'
    import ListNav from './list_nav'
    import Loading from '../../components/Loading'
    import None from '../../components/None'
    export default {
        data(){
            return {
                flag: true
            }
        },
        computed: {
          ...mapState([
              'products',
              'busy',
              'isShowLoadingTips',
              'isShowLoadedTips'
          ])
        },
        methods: {
          ...mapActions(['getProducts']),

        },
        components: {
            Loading,
            None,
            ListHeader,
            ListNav
        }
    }
</script>

<style scoped>
  .db_list_options {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
  .db_list_options .items{
    width: 100%;
    display: flex;
    display: box;
    display: -webkit-box;
    flex-wrap:nowrap;
    justify-content: center;
  }
  .db_list_options .items a{
    display: block;
    flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
    color: #ccc;
  }
  .db_list_options .items a.active{
    color: #f67;
  }
  .db_products .pdt_img{
    position: relative;
  }
  .db_products .pdt_img .fa{
    position: absolute;
    top: 10px;
    right: 10px;
    color: #e17c72;
    font-size: 16px;
  }
</style>
