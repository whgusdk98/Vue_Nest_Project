<template>
   <div>
        <div class="form-wrapper">
          <h2> Create User </h2>
          <form id="create-user-form" @submit.prevent="createUser">
               <div class="edit-text">
                <label for="name"> name </label>
                <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name">
               </div>
              <div class="edit-text">
                <label for="company"> company </label>
                <input type="text" id="company" v-model="company" name="company" class="form-control" placeholder="Enter company">
               </div>
              <div class="submit-button">
                  <button class="btn btn-success" type="submit"> Create User </button>
              </div> 
          </form>
          <h3> Result </h3>
        <div id="result" class="form-wrapper">
            <xmp> {{ result }} </xmp>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "@/utils/helper";
//import router from "@/router";
export default {
  data() {
    return {
      name: "",
      company: "",
      result: null
    };
  },
  methods: {
    createUser() {
      let postData = {
        name: this.name,
        company: this.company
      };
      this.__submitToServer(postData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/user/post`, data).then(response => { // blog/post
        console.log(response)
        this.result = response.data.message
        //router.push({ name: "home" });
      });
    }
  }
};
</script>

