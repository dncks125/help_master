<template>

  <!--<div>-->
   <!--<asd v-if="['intro'].indexOf($route.name) <0"></asd>-->
    <!--<div id="maincontent"></div>-->
  <!--<intro></intro>-->
  <!--</div>-->
<router-view></router-view>
</template>

<script>
  import asd from './components/asd'

  export default {
    name: 'App'
    ,components:{
      'asd':asd
    }
  }
</script>

<style>
  #maincontent{
    margin-left: 200px;
  }
</style>
