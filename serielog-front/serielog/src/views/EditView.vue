<template>
  <CadastrarSeries :serie="serie" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { buscarSerie } from "../service/serieService";

import CadastrarSeries from "../components/CadastrarSeries.vue";

const route = useRoute();
const serie = ref(null);

onMounted(async () => {
  serie.value = await buscarSerie(route.params.id);
});
</script>
