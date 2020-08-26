<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
<<<<<<< HEAD
      <router-link to="/login">Login</router-link>
=======
      <router-link to="/logout">Logout</router-link> |
      <router-link to="/update">Update</router-link>
>>>>>>> 51f97e4b95a39db1f49c1926c45ffef4d7b001ed
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
