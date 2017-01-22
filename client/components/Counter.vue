<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{ count }}
    </div>
    <button @click="$store.commit('INCREMENT')">Increment</button>
    <button @click="$store.commit('DECREMENT')">Decrement</button>
    <button @click="$store.dispatch('incrementAsync')">Increment Async</button>


    <h3>Users list Counter</h3>
    <ul>
      <li v-for="user in usersList">
        {{user.name}} <br> {{user.username}} <br> {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
import UserService from 'domain/users/Service.provider';

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    usersList(){
      return this.$store.state.users
    }
  },
  mounted(){
     var User = new UserService();

     var user_promise =  User.get();
     user_promise.then(collection =>{

     }).catch(error =>{
      console.log(error)
     })
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
