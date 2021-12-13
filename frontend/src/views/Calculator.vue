<template>
  <div class="calculator">
    <app-calculate></app-calculate>
  </div>
</template>

<script> 
import CalculateComponent from '../components/Calculate.vue' //Calculate 컴포넌트 가져옴

export default {
  name:'app',
  components:{
    'app-calculate': CalculateComponent
  }
};
</script>
