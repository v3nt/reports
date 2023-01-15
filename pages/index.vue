<template>
  <div>
    <h1>Cognitive Credit reports</h1>
    <div><input type="text" v-model="filterName" /></div>
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
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
import { ref } from "#imports";
const filterName = ref("");

const reportsStore = useReportsStore();
reportsStore.setReports();

const { reportsList } = storeToRefs(reportsStore);
</script>
