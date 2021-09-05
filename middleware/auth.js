export default function({store, redirect,app}){
  const user = app.$cookies.get('user');
  store.commit('auth/setUser', user, { root: true })
  // console.log(user);
}
