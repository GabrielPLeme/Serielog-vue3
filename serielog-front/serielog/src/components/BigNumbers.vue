<template>
  <div class="py-10 px-25 grid grid-cols-3 gap-8 items-center">
    <div
      class="p-4 card flex flex-row items-center rounded-r-lg bg-base-100 border border-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <figure class="w-15 h-15">
        <Film class="w-full h-full text-primary p-0" />
      </figure>
      <div class="card-body flex flex-col gap-1">
        <h2
          class="text-sm text-base-content/70 font-medium uppercase tracking-wide"
        >
          Total de Series
        </h2>

        <span class="text-4xl font-bold text-base-content p-0 m-0">{{
          totalSeries
        }}</span>

        <p class="text-sm text-base-content/60 mt-1">
          Séries cadastrados no sistema
        </p>
      </div>
    </div>

    <div
      class="p-4 card flex flex-row items-center rounded-r-lg bg-base-100 border border-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <figure class="w-15 h-15">
        <CheckCircle class="w-full h-full p-0 text-success" />
      </figure>
      <div class="card-body flex flex-col gap-1">
        <h2
          class="text-sm text-base-content/70 font-medium uppercase tracking-wide"
        >
          Séries Assistidas
        </h2>

        <span class="text-4xl font-bold text-base-content p-0 m-0">{{
          seriesAssistidas
        }}</span>

        <p class="text-sm text-base-content/60 mt-1">
          Séries que você já assistiu.
        </p>
      </div>
    </div>

    <div
      class="p-4 card flex flex-row items-center rounded-r-lg bg-base-100 border border-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <figure class="w-15 h-15">
        <ChartNoAxesColumn class="w-full h-full text-warning p-0" />
      </figure>
      <div class="card-body flex flex-col gap-1">
        <h2
          class="text-sm text-base-content/70 font-medium uppercase tracking-wide"
        >
          Progresso Geral
        </h2>

        <span class="text-4xl font-bold text-base-content p-0 m-0"
          >{{ calcAssistida.toFixed(2) }}%</span
        >

        <p class="text-sm text-base-content/60 mt-1">
          Do Total de séries assistidas
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Film, CheckCircle, ChartNoAxesColumn } from "lucide-vue-next";
import { mostrarSeries } from "../service/serieService";
import { ref, onMounted } from "vue";

const series = ref([]);
const totalSeries = ref(0);
const seriesAssistidas = ref(0);
const calcAssistida = ref(0);

onMounted(async () => {
  series.value = await mostrarSeries();

  for (const serie of series.value) {
    if (serie.assistida) {
      seriesAssistidas.value++;
    }

    totalSeries.value++;
  }

  calcAssistida.value = (seriesAssistidas.value * 100) / totalSeries.value;
});
</script>
