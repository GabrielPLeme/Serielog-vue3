<template>
  <div class="px-25 flex items-center justify-end-safe gap-5">
    <details class="dropdown">
      <summary class="btn btn-primary m-1">Gênero</summary>
      <ul
        class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li v-for="(genero, index) in generosUnicos" :key="index">
          <button @click="generoSelecionado(genero)">{{ genero }}</button>
        </li>
      </ul>
    </details>
    <button class="btn btn-primary" @click="filtroAssistido(true)">
      Assitidos
    </button>
    <button class="btn btn-primary" @click="filtroAssistido(false)">
      Não assitiu
    </button>

    <button class="btn btn-primary" @click="limparFiltros">
      Limpar filtros
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { mostrarSeries } from "../service/serieService";

const emit = defineEmits(["filtrar"]);

const series = ref([]);

onMounted(async () => {
  series.value = await mostrarSeries();

  console.log(series.value);
});

const generosUnicos = computed(() => {
  return [
    ...new Set(
      series.value.map((item) => {
        return item.genero;
      }),
    ),
  ];
});

const filtroAssistido = (valor) => {
  console.log(valor);
  emit("filtrar", {
    assistida: valor,
  });
};

const generoSelecionado = (genero) => {
  emit("filtrar", {
    genero: genero,
  });

  console.log(genero);
};

const limparFiltros = () => {
  emit("filtrar", {
    assistida: null,
    genero: null,
  });
};
</script>
