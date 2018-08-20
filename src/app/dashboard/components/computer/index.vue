<script>
import { mapGetters, mapActions } from 'vuex'
import processesList from '../process'

export default {
  components: { processesList },
  data () {
    return {
      toggled: false
    }
  },
  mounted () {
  },
  props: {
    computer: {
      type: Object,
      required: true
    }
  },
  methods: { },
  computed: {
    getStatus () {
      return this.computer.status
    }
  },
  watch: { }
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <label> Computer Name: </label>
        <span> {{ computer.name }} </span>
      </div>
      <div class="col-sm-6">
        <label> Ipv4: </label>
        <span> {{ computer.ipv4 }} </span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label> User Name: </label>
        <span> {{ computer.username }} </span>
      </div>
      <div class="col-sm-6">
        <label> Status: </label>
        <toggle-button id="toggle-button-id" @change="toggled = $event.value" :labels="{checked: 'On', unchecked: 'Off'}"
          :color="{checked: '#7DCE94', unchecked: '#FF3045'}" :width="60" :value="computer.status"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <processesList :processes="computer.process"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .vue-js-switch#toggle-button-id {
    font-size: 15px !important;
  }
</style>
