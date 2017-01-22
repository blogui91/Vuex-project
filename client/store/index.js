import Vue from 'vue'
import Vuex from 'vuex'
import UserService from 'domain/users/Service.provider';


Vue.use(Vuex)

const state = {
  count: 0,
  users: []
}


let User = new UserService();


const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  updateUserList(state, payload) {
    state.users = payload;
  }
}

const actions = {
  incrementAsync({
    commit
  }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  fetchUsers({
    commit
  }) {
    let req = () => {
      setTimeout(() => {
        let users_promise = User.get();
        users_promise.then(users => {
          commit('updateUserList', users);
          req();
        })
      }, 5000)
    }

    req();


  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store