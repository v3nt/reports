<template>
  <div class="container">
    <h1>Cognitive Credit reports</h1>
    <div>
      <input
        type="text"
        v-model="filterNameInput"
        @input="filterByName(), test()"
      />
    </div>

    <table v-if="tableRows && tableRows.length">
      <thead>
        <tr>
          <th
            v-for="(headerItem, i) in tableHeaderColumns"
            :key="`table-header-col-${i}`"
            @click="sortTableBy(headerItem.id, headerItem?.sort, i)"
          >
            {{ headerItem.title }}
            {{ headerItem.sort }}
          </th>
        </tr>
      </thead>
      <tbody v-if="reportsList && reportsList.length">
        <tr v-for="(item, i) in reportsList" :key="`table-row-${i}`">
          <td>{{ item.companyName }}</td>
          <td>{{ item.lastReportingDate }}</td>
          <td>{{ item.lastReportingPeriod }}</td>
          <td>{{ item.nextReportingDate }}</td>
          <td>{{ item?.nextReportingInferred }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useReportsStore } from "~/store";
import useTable from "~/composables/useTable";
import { ReportsDataItem } from "~/types";
import { ref } from "@vue/reactivity";

const headerColumns = [
  { title: "Company Name", id: "companyName", sort: "ASC" },
  { title: "Last report date", id: "lastReportingDate" },
  { title: "Last report period", id: "lastReportingPeriod" },
  { title: "Next report date", id: "nextReportingDate" },
  { title: "Reporting inferred?", id: "nextReportingInferred" },
];
const reportsStore = useReportsStore();
const filterNameInput = ref("");

reportsStore.setReports(filterNameInput.value);
const { reportsList } = storeToRefs(reportsStore);
let reportsListWhole = reportsList;
const test = () => {
  reportsStore.setReports(filterNameInput.value);
};
const { sortTableBy, tableRows, tableHeaderColumns } = useTable(
  reportsListWhole as ReportsDataItem[] | any,
  headerColumns
);
</script>
