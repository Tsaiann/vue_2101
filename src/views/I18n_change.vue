<template>
  <div class="row horizontal" data-inset="1rem">
    <el-button>{{ $t('defalt') }}</el-button>
    <el-button type="primary">{{ $t('primary') }}</el-button>
    <el-button type="success">{{ $t('success') }}</el-button>
    <el-button type="info">{{ $t('info') }}</el-button>
    <el-button type="warning">{{ $t('warning') }}</el-button>
    <el-button type="danger">{{ $t('danger') }}</el-button>
  </div>  
</template>
<script>
export default {
  name:"i18n_change",
  data(){
    return
  },
  methods:{
    
  }
}
</script>