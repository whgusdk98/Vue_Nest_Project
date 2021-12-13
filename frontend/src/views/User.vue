<template>
  <div class="user">
        <app-create></app-create>
  </div>
</template>

<script>
import CreateComponent from '../components/Create.vue' //Create 컴포넌트 가져옴

export default {
    name:'app',
    components:{
        'app-create': CreateComponent
  }
};
</script>