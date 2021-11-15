<template>
  <div class="row vertical" data-inset="1rem">
    <div class="row horizontal v_center" data-space-bottom="0.5rem">
      <el-button type="primary">新增商品</el-button>
    </div>
    <el-table :data="getResponse" style="width:100%">
        <el-table-column prop="name" label="商品名稱"/>
        <el-table-column prop="price" label="售價"/>
        <el-table-column prop="count" label="剩餘數量"/>
        <el-table-column label="操作">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
export default {
  name:'vuex',
  data () {
    return {
      showDialog:false,
      formData:{
        id:'',
        name:'',
        price:'',
        count:'',
        img:''
      },
      submitStatus: ''
    }
  },
  computed:{
    ...mapGetters(['getResponse'])
  },
  methods:{
    ...mapActions(['GET_API', 'POST_API', 'PUT_API', 'DELE_API']),
    async callApi () {
      this.GET_API()
    },
    
  
  
  
  },

  created () {
    this.callApi()
  },
  mounted(){

  }
}
</script>