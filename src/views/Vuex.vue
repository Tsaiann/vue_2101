<template>
  <div class="row vertical" data-inset="1rem">
    
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
export default {
  name:"vuex",
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
      }
    }
  },
  computed:{

  },
  methods:{
    
  },
  created () {
    
  },
  mounted(){

  }
}
</script>