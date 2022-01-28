<template>
  <div class="row vertical" data-inset="1rem"> 
    <div class="row horizontal v_center" data-inset="1rem">
      <h1>{{ $t('header') }}</h1>
      <el-select v-model="currentLang" @change="onLangChange">
        <el-option v-for="(item, i) in languageList" :key="i" :label="item.label" :value="item.value" ></el-option>
      </el-select>
    </div>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item :label="$t('name')">
        <el-input v-modle="formData.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('age')">
        <el-input :model="formData.age" placeholder="ex: 0933456455"></el-input>
      </el-form-item>
      <el-form-item :label="$t('email')">
        <el-input :model="formData.email" placeholder="ex: bbb45@gmail.com"></el-input>
      </el-form-item>
      <el-form-item :label="$t('blood_type')">
        <el-select v-model="currentvalue" :placeholder="$t('blood_type_placeholder')">
          <el-option
            v-for="(item,i) in formData.bloodType"
            :key="i"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">{{ $t('submit')}}</el-button>
        <el-button>{{ $t('cancel')}}</el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
import { loadLanguageAsync } from '@/lang'
export default {
  name: "i18n",
  data(){
    return{
      currentLang:'',
      currentvalue:'',
      languageList:[
        { label:'繁體中文', value: 'zh_tw' },
        { label:'English', value: 'en' }
      ],
      formData:{
        name:'',
        age:'',
        email:'',
        bloodType: [{
          value: 'A',
          label: 'A'
        }, {
          value: 'B',
          label: 'B'
        }, {
          value: 'O',
          label: 'O'
        }, {
          value: 'AB',
          label: 'AB'
        }],
      }
    }
  },
  methods:{
    onLangChange(val){
      console.log(val)
      loadLanguageAsync(val)
    }
  }
}
</script>