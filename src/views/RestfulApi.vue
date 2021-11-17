<template>
  <div class="row vertical" data-inset="1rem">
    <div class="row horizontal v_center" data-space-bottom="0.5rem">
      <el-button type="primary" @click="addProduct">新增商品</el-button>
    </div>
      <el-table :data="tableData" style="width:100%">
        <el-table-column prop="name" label="商品名稱"/>
        <el-table-column prop="price" label="售價"/>
        <el-table-column prop="count" label="剩餘數量"/>
        <el-table-column label="操作">
          <template slot-scope="obj">
            <div class="row horizontal v_center">
              <el-button type="warning" @click="handleEdit(obj.row)">編輯</el-button>
              <el-button type="danger" @click="handleDel(obj.row.id)">刪除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="新增商品"
        :visible.sync="showDialog"
        width="40%"
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
          <el-button @click="handleSubmit()" type="primary" >送出</el-button>
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
        count:'',
        img:''
      },
      submitStatus:''
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
        await this.$api.post(url, this.formData)
        this.showDialog = false
        this.callApi()
        this.$message({
            type: 'success',
            message: '新增成功!'
          })
      }catch{
        this.$message({
            type: 'error',
            message: '新增失敗!'
          })
        console.log('error')
      }
    },
    // 修改商品資料：
    async editData () {
      const url = `http://localhost:3000/tableApi/${this.formData.id}`
      try{
        await this.$api.put(url, this.formData)
        this.showDialog = false
        this.callApi()
        this.$message({
            type: 'success',
            message: '修改成功!'
          })
      }catch{
        this.$message({
            type: 'error',
            message: '修改失敗!'
          })
        console.log('error')
      }
    },
    //刪除商品資料：
    async deleteData (id) {
      const url = `http://localhost:3000/tableApi/${id}`
      try{
        await this.$api.delete(url)
        this.callApi()
      }catch{
        console.log('error')
      }
    },
    // 打開dialog
    addProduct(){
      this.showDialog = true
      this.submitStatus ='add'
    },
    // 關掉時清空裡面的所有資料
    handleClose(){
      Object.keys(this.formData).map(item =>{
        this.formData[item] = ''
      })
    },
    // 編輯時帶入原本的資料
    handleEdit(obj){
      this.formData.id=obj.id
      this.formData.name=obj.name
      this.formData.price=obj.price
      this.formData.count=obj.count
      this.submitStatus ='edit'
      this.showDialog = true
    },
    //判斷是要新增還是編輯
    handleSubmit(){
      if(this.submitStatus === 'edit'){
        this.editData()
        this.submitStatus =''
      }else if(this.submitStatus === 'add'){
        this.postData ()
        this.submitStatus =''
      }
    },
    // 刪除資料
    handleDel(id){
      this.$confirm('將會刪除商品資料，是否繼續', '注意', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteData (id)
          this.$message({
            type: 'success',
            message: '刪除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消刪除'
          })          
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