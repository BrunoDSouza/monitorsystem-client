<script>
  import { mapGetters, mapActions } from 'vuex'

  export default { }

</script>

<template>
  <ul class="nav navbar-nav navbar-right">
      <!-- <router-link :to="{ name: 'auth' }" tag="li" v-if="!isLogged" > -->
      <router-link :to="{ name: 'dashboard' }" tag="li">
        <a>Entrar</a>
      </router-link>
  </ul>
</template>
