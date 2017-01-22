<style>
.new-element{

}
</style>
<template>
	<div class="new-element ">
		
    <!-- <h3>Users list</h3>
    <ul>
      <li v-for="user in usersList">
        {{user.name}} <br> {{user.username}} <br> {{user.email}}
      </li>
    </ul> -->
	
	<button @click="getUsers">Get</button>
	</div>
</template>
<script>
	import UserService from 'domain/users/Service.provider';
	var User = new UserService();
  export default {
    data() {
      return{
        
      }
    },
    methods :{
    	getUsers(){
    		this.$store.dispatch('fetchUsers')
    	}
    },
    ready(){
   
    },
    computed:{
    	usersList(){
    		return this.$store.state.users
    	}
    }
  }
</script>