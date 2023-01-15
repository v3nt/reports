<template>
  <div class="container">
    <h1>Cognitive Credit reports</h1>
    <div><input type="text" v-model="filterName" /></div>

    <table v-if="reportsList && reportsList.length">
      <thead>
        <tr>
          <th
            v-for="(headerItem, i) in tableHeaders"
            :key="`table-header-col-${i}`"
          >
            {{ headerItem.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in reportsList" :key="`table-row-${i}`">
          <td>{{ item.companyName }}</td>
          <td>{{ item.lastReportingDate }}</td>
          <td>{{ item.lastReportingPeriod }}</td>
          <td>{{ item.nextReportingDate }}</td>
          <td>{{ item.nextReportingInferred }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useReportsStore } from "~/store";
import useTable from "~/composables/useTable";
import { ref } from "#imports";
const filterName = ref("");
const { tableHeaders } = useTable();
const reportsStore = useReportsStore();
reportsStore.setReports();

const { reportsList } = storeToRefs(reportsStore);
</script>
