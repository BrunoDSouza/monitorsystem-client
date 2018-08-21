<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import swal from 'sweetalert'
import signalR from "@aspnet/signalr"
import computerList from './computer'

export default {
  components: { computerList },
  data () {
    return {
      connection : {}
    }
  },
  mounted () {
    this.setDados()
    // TODO Connect to message service...
  },
  computed: {
    ...mapGetters({
      computers: 'getDados'
    })
  },
  methods: {
    ...mapActions(['setDados']),
    onReceive () {
      // TODO: Implement method to receive callbacks on server
    },
    sendMessage () {
      // TODO: Implement method to send data to server
    },
    updateComputers () {
      // TODO: Implement method to update processes for each computer
    }
  },
  watch: { }
}
</script>

<template>
  <div class="container-fluid root">
    <div class="row list-flex">
      <div class="col-sm-6 list-item" v-for="item in computers">
          <div class="well list-content">
            <div class="row">
              <computerList :computer="item"/>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
