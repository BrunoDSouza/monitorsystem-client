<script>
  import Left from './left'
  import Brand from './brand'
  import Right from './right'

  export default {
    name: 'monitor-menu',
    components: { Left, Brand, Right },
    data () {
      return {
        isToggleMenu: false
      }
    }
  }
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top nav-color" role="navigation">
    <div class="container-fluid">
      <Brand/>
      <div class="collapse navbar-collapse" :class="{ in : isToggleMenu }">
          <Left/>
          <!-- <Right/> -->
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
