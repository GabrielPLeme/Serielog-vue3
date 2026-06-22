<template>
  <div class="bg-base-200">
    <div class="py-25">
      <div class="px-25 flex flex-col gap-5">
        <h3 class="text-5xl font-extrabold decoration-dark-200">Suas séries</h3>
        <hr class="text-zinc-700" />
      </div>
      <BigNumbers />
      <FiltroSeries @filtrar="receberFiltro" />
      <div class="py-15 px-25 grid grid-cols-2 gap-10">
        <MostrarSeries
          v-for="serie in seriesFiltradas"
          :key="serie.id"
          :serie="serie"
          @remover="Remover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BigNumbers from "../components/BigNumbers.vue";
import MostrarSeries from "../components/MostrarSeries.vue";
import FiltroSeries from "../components/FiltroSeries.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { deletetarSerie, mostrarSeries } from "../service/serieService";

const router = useRouter();
const series = ref([]);
const filtro = ref({
  assistida: null,
  genero: null,
});

onMounted(async () => {
  series.value = await mostrarSeries();
});

/*
onMounted(async () => {
  const response = await fetch("http://localhost:3000/series");
  series.value = await response.json();

  if (!series.value || series.value.length === 0) {
    router.push("/series/nova");
  }
});
*/

const Remover = async (id) => {
  await deletetarSerie(id);

  series.value = series.value.filter((item) => String(item.id) !== String(id));
};

//Filtro
const receberFiltro = (novoFiltro) => {
  if (novoFiltro.assistida !== undefined) {
    if (filtro.value.assistida === novoFiltro.assistida) {
      filtro.value.assistida = null;
    } else {
      filtro.value.assistida = novoFiltro.assistida;
    }
  }

  if (novoFiltro.genero !== undefined) {
    if (filtro.value.genero === novoFiltro.genero) {
      filtro.value.genero = null;
    }
    if (novoFiltro.assistida === null && novoFiltro.genero === null) {
      filtro.value = {
        assistida: null,
        genero: null,
      };
      return;
    } else {
      filtro.value.genero = novoFiltro.genero;
    }
  }
};

// Filtra as séries
const seriesFiltradas = computed(() => {
  let resultado = series.value;

  // Filtra por assistida
  if (filtro.value.assistida !== null) {
    resultado = resultado.filter((serie) => {
      return serie.assistida === filtro.value.assistida;
    });
  }

  // Filtra por gênero
  if (filtro.value.genero !== null) {
    resultado = resultado.filter((serie) => {
      return serie.genero === filtro.value.genero;
    });
  }

  return resultado;
});
</script>
