<template>
  <div>
    <h1>Cognitive Credit reports</h1>
    <div>{{ reportsList }}</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useReportsStore } from "~/store";

const reportsStore = useReportsStore();
reportsStore.setReports();

const { reportsList } = storeToRefs(reportsStore);
</script>
