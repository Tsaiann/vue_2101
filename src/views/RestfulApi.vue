<template>
  <div class="row vertical" data-inset="1rem">
    <div class="row horizontal v_center" data-space-bottom="0.5rem">
      <el-button type="primary" @click="addProduct">新增商品</el-button>
    </div>
      <el-table :data="tableData" style="width:100%">
        <el-table-column prop="name" label="商品名稱"/>
        <el-table-column prop="price" label="售價"/>
        <el-table-column prop="count" label="剩餘數量"/>
        <el-table-column prop="img" label="參考圖片"/>
      </el-table>
      <el-dialog
        title="新增商品"
        :visible.sync="showDialog"
        width="30%"
        @close="handleClose">
        <el-form ref="form" :model="formData" label-width="80px">
          <el-form-item label="ID:">
            <el-input v-model.trim="formData.id"></el-input>
          </el-form-item>
          <el-form-item label="商品名稱:">
            <el-input v-model.trim="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="售價:">
            <el-input v-model.trim="formData.price"></el-input>
          </el-form-item>
          <el-form-item label="庫存:">
            <el-input v-model.trim="formData.count"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showDialog = false">取消</el-button>
          <el-button @click="postData" type="primary" >送出</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name:"restful_api",
  data () {
    return {
      tableData:[],
      showDialog:false,
      formData:{
        id:'',
        name:'',
        price:'',
        count:''
      }
    }
  },
  computed:{

  },
  methods:{
    // 取得商品資料：
    async callApi () {
      const url = "http://localhost:3000/tableApi"
      const res = await this.$api.get(url)
      this.tableData = [...res]
      console.log(res, this.tableData)
    },
    // post商品資料：
    async postData () {
      const url = "http://localhost:3000/tableApi"
      try{
        const res = await this.$api.post(url, this.formData)
        this.showDialog = false
        this.callApi()
      }catch{
        console.log('error')
      }
    },
    // 打開dialog
    addProduct(){
      this.showDialog = true
    },
    // 關掉時清空裡面的所有資料
    handleClose(){
      Object.keys(this.formData).map(item =>{
        this.formData[item] = ''
      })
    }
  },
  created () {
    this.callApi()
  },
  mounted(){

  }
}
</script>