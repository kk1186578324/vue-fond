<template>
  <div id="app">
    <ul>
      <li v-for="item in users" :key="item.id" style="color:red">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'App1',
    data(){

      return{
          users:[]
      }
    },
  components: {

  },
    mounted(){
      axios.get('http://localhost:3000/api/users').then(response=>{

          this.users = response.data
      })
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
