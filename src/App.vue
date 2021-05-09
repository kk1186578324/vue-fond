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
  name: 'App',
    data(){
      return{
          users:[1,2,3],
          use:111
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
  color: #b21510;
  margin-top: 60px;

  /*color: ['#aed8fe', '#57a1fc', '#3a73b8', '#2B32B2']*/
}
</style>
