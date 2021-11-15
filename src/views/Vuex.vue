<template>
  <div class="row vertical" data-inset="1rem">
    <div class="row horizontal v_center" data-space-bottom="1rem">
      <el-button type="primary" @click="addProduct">新增商品</el-button>
    </div>
    <el-table :data="getResponse" style="width: 100%">
      <el-table-column prop="name" label="商品名稱" />
      <el-table-column prop="price" label="售價" />
      <el-table-column prop="count" label="庫存數量" />
      <el-table-column label="操作">
        <template slot-scope="obj">
          <div class="row horizontal v_center">
            <el-button type="warning" @click="handleEdit(obj.row)">編輯</el-button>
            <el-button type="danger" @click="handleDel(obj.row.id)">刪除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name:'vuex',
  data () {
    return {
      tableData: [],
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