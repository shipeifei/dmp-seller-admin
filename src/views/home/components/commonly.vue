<template>
     <div class="commonly_used">最近使用:
           <router-link  v-for="(item,index) in pathsList" :to="item.path">
               {{item.menuName}}
           </router-link>
        </div>
</template>
<script>
import { localStorageApi } from "@/utils/storageApi.js";

export default {
    data(){
        return{
            pathsList:[]
        }
    },
    mounted(){
        this.getLocalStorAge()
    },
    methods:{
        getLocalStorAge() {
        let paths = JSON.parse(localStorageApi.get('paths'))
        var countOrder = _.orderBy(paths, ['count'], ['desc'])
        if (countOrder.length > 8) {
          this.pathsList = countOrder.splice(0, 8)
        } else {
          this.pathsList = countOrder
        }
      }
    }
    
}
</script>
<style lang="less" scoped>
.commonly_used {
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  color: #878787;
  padding-left: 1em;
  height: 55px;
  background: #fff;
  line-height: 55px;
  padding-bottom: 50px;
  a {
    font-size: 14px;
    border: solid 1px #409eff;
    color: #878787;
    border-radius: 2px;
    padding: 0 4px;
    margin-left: 10px;
  }
}
</style>


