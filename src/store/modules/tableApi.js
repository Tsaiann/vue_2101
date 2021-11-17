import api from '@/service/api'

const tableModule = {
  state: {
    res: []
  },

  getters: {
    getResponse(state) {
      return state.res
    },
  },

  mutations: {
    SET_RES (state, payload) {
      state.res = payload
    }
  },

  actions: {
    async GET_API (context, payload) {
      const url = 'http://localhost:3000/tableApi'
      const res = await api.get(url)
      payload = res
      context.commit('SET_RES', payload)
      console.log('Actions GET_API: ', res, payload)
      console.log('Actions GET_API context: ', context)
    },

    async POST_API (context, payload) {
      const url = 'http://localhost:3000/tableApi'
      await api.post(url, payload)
      context.dispatch('GET_API')
      console.log('Actions POST_API payload: ', payload)
    },

    async PUT_API (context, payload) {
      const url = `http://localhost:3000/tableApi/${payload.id}`
      await api.put(url, payload)
      context.dispatch('GET_API')
      console.log('Actions PUT_API: ', payload)
      console.log('Actions PUT_API context: ', context)
    },

    async DEL_API (context, payload) {
      const url = `http://localhost:3000/tableApi/${payload}`
      await api.delete(url)
      context.dispatch('GET_API')
      console.log('Actions DELETE_API: ', payload)
    }
  }
}

export default tableModule