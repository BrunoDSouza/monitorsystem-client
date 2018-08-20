<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import swal from 'sweetalert'
import signalR from "@aspnet/signalr"
import computerList from './computer'

export default {
  components: { computerList },
  data () { return {} },
  mounted () {
    this.setDados()

    var connection = new signalR.HubConnectionBuilder()
          .withUrl("http://localhost:44342/monitor")
          .build()

    connection.on("ReceiveMessage", function (user, message) {
      // TODO:
    });

    connection.start().catch(function (err) {
        return console.error(err.toString());
    });

  },
  computed: {
    ...mapGetters({
      computers: 'getDados'
    })
  },
  methods: {
    ...mapActions(['setDados']),
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

<style lang='scss'>

  .btn-confirm {
    border-radius: 22px;
    position: fixed;
    z-index: 1;
    transition: all .3s cubic-bezier(.65,.05,.36,1);
    margin-left: 40%;
    margin-right: 40%;
  }

  .btn-confirm:hover {
    box-shadow: 4px 3px 20px 2px rgba(40, 42, 42, 0.36);
    transition: all .3s cubic-bezier(.65,.05,.36,1);
    background-color: #ff5d5d !important;
    border-color: #ff5d5d !important;
    border-radius: 20px;
  }

</style>
