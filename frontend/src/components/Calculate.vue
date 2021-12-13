<template>
   <div>
        <div class="form-wrapper">
          <h2> Calculate Two Number </h2>
          <form id="calculator-form" @submit.prevent="createNum">
               <div class="edit-text">
                <label for="number1"> number1 </label>
                <input type="number" id="number1" v-model="number1" name="number1" class="form-control" placeholder="Enter number1">
               </div>
               <div>+</div>
              <div class="edit-text">
                <label for="number2"> number2 </label>
                <input type="number" id="number2" v-model="number2" name="number2" class="form-control" placeholder="Enter number2">
               </div>
              <div class="submit-button">
                  <button class="btn btn-success" type="submit"> Sum Numbers </button>
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

export default {
    data() {
        return {
        number1: Number,
        number2: Number,
        result: null
        };
    },
    methods: {
        createNum() {
        let postData = {
            number1: this.number1,
            number2: this.number2
        };
        this.__submitToServer(postData);
        },
        __submitToServer(data) {
        axios.post(`${server.baseURL}/calculator/add`, data).then(response => { 
            console.log(response)
            this.result = response.data.message
        });
        }
    }
};
</script>

