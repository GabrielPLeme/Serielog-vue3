<template>
  <div
    class="card card-side bg-base-100 hover:ring-2 hover:ring-black shadow-sm hover:shadow-2xl"
  >
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie"
      />
    </figure>

    <div class="card-body">
      <h2 class="card-title">{{ serie.titulo }} - {{ serie.ano }}</h2>
      <p>{{ serie.genero }}</p>
      <p>{{ serie.descricao }}</p>

      <div class="flex items-center gap-1">
        <span
          v-for="n in 5"
          :key="n"
          class="mask mask-star-2 w-4 h-4"
          :class="n <= serie.nota ? 'bg-orange-400' : 'bg-gray-300'"
        ></span>

        <span class="ml-2">{{ serie.nota }}</span>
      </div>

      <div class="card-actions justify-end">
        <button
          class="btn btn-primary"
          :class="{ 'btn-success text-white': serie.assistida }"
        >
          {{ serie.assistida ? "Assistida" : "Não assistiu" }}
        </button>

        <button
          class="btn btn-info"
          @click="$router.push(`/series/${serie.id}`)"
        >
          <SquarePen class="w-6 h-6 text-white" />
        </button>

        <button class="btn btn-error" @click="$emit('remover', serie.id)">
          <Trash2 class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Trash2, SquarePen } from "lucide-vue-next";

import { useRouter } from "vue-router";

const router = useRouter();

defineProps({ serie: Object });
defineEmits(["remover"]);
</script>
