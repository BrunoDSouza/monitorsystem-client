<script>
import { mapState } from 'vuex'

export default {
  props: {
    processes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="table-responsive">
  	<table class="table table-striped">
  		<thead>
  			<tr>
  				<th colspan="1" class="text-center">PID</th>
  				<th colspan="2" class="text-center">Name</th>
  				<th colspan="2" class="text-center">Memory</th>
  				<th colspan="2" class="text-center">Path</th>
  				<th colspan="3" class="text-center">Description</th>
  				<th colspan="2" class="text-center">Version</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="item in processes">
  				<td colspan="1" class="text-center"> {{ item.id }} </td>
          <td colspan="2" class="text-center"> {{ item.name }} </td>
          <td colspan="2" class="text-center"> {{ item.memory }} </td>
          <td colspan="2" class="text-center"> {{ item.path }} </td>
          <td colspan="3" class="text-center"> {{ item.description }} </td>
          <td colspan="2" class="text-center"> {{ item.version }} </td>
  			</tr>
  			<tr v-if="processes.length == 0 || processes == null">
  				<td colspan="12">Nenhum processo em execução.</td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>
