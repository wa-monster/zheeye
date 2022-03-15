import { createStore, Commit } from 'vuex'
import axios from 'axios'

interface ImageProps{
  _id?:string;
  url?:string;
  createdAt?:string
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id: string;
  title: string;
  excerpt?:string;
  content?: string;
  image?: ImageProps;
  createdAt: string;
  column: string;
}
interface UserProps {
  token:string;
  isLogin:boolean;
  name?:string;
  id?: number;
  columnId:string
}
export interface GlobalDataProps {
  loading:boolean;
  columns:ColumnProps[];
  posts: PostProps[];
  user:UserProps;
}
const getAndCommit = async (url:string, mutationsName:string, commit:Commit) => {
  const { data } = await axios.get(url)
  commit(mutationsName, data)
}
const postAndCommit = async (url:string, mutationsName:string, commit:Commit, payload:any) => {
  const { data } = await axios.post(url, payload)
  commit(mutationsName, data)
  return data
}
const store = createStore<GlobalDataProps>({
  state: {
    loading: false,
    columns: [],
    posts: [],
    user: { token: '', isLogin: false, name: '杨肥肥', columnId: '1' }
  },

  getters: {
    getColumnById: (state) => (id:string) => {
      return state.columns.find(c => c._id === id)
    },
    getPostsById: (state) => (cid:string) => {
      return state.posts.filter(post => cid === post.column)
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: '杨肥肥', columnId: '1' }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns (state, rawData) {
      state.columns = rawData.data.list
    },
    fetchColumn (state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPosts (state, rawData) {
      const a = rawData.data.list
      state.posts = []
      state.posts = a
    },
    setLoading (state, status) {
      state.loading = status
    },
    fetchLogin (state, rawData) {
      state.loading = rawData
    }
  },
  actions: {
    fetchColumns ({ commit }) {
      getAndCommit('/columns', 'fetchColumns', commit)
    },
    fetchColumn ({ commit }, cid) {
      getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
    },
    fetchPosts ({ commit }, cid) {
      getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
    },
    fetchLogin ({ commit }, payload) {
      return postAndCommit('/user/login', 'fetchLogin', commit, payload)
    }
  }
})
export default store
