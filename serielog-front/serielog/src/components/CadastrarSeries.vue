<template>
  <div v-if="mensagemToast" class="toast toast-top toast-end">
    <div
      class="alert text-white"
      :class="sucessoToast ? 'alert-success' : 'alert-error'"
    >
      <span>{{ mensagemToast }}</span>
    </div>
  </div>
  <div
    class="p-25 flex flex-col gap-2 font-inter border rounded-tr-lg border-zinc-700"
  >
    <h1 class="text-5xl font-extrabold decoration-dark-200">Adicionar Série</h1>

    <p class="text-zinc-400 text-lg max-w-2xl leading-relaxed">
      Preencha os detalhes da Série que você assistiu.
    </p>
    <hr class="text-zinc-700" />

    <form @submit.prevent="Salvar">
      <div class="grid grid-cols-[1fr_3fr] gap-4 justify-center-safe m-4 FONT">
        <!-- Título -->
        <div class="flex items-center gap-3">
          <Type class="w-5 h-5 text-green-500" />
          <label for="titulo">Título:</label>
        </div>
        <input
          id="titulo"
          v-model="titulo"
          type="text"
          placeholder="Ex: Dark"
          class="input input-white w-full"
        />

        <!-- Gênero -->
        <div class="flex items-center gap-3">
          <Tag class="w-5 h-5 text-purple-500" />
          <label for="genero">Gênero:</label>
        </div>

        <input
          id="genero"
          v-model="genero"
          type="text"
          placeholder="Ex: Ação ou Ação/Drama"
          class="input input-white w-full"
        />

        <!-- Descrição -->
        <div class="flex items-center gap-3">
          <FileText class="w-5 h-5 text-cyan-500" />
          <label for="genero">Descrição:</label>
        </div>

        <textarea
          placeholder="Escreva um breve Descrição"
          class="textarea textarea-white w-full"
          v-model="descricao"
        ></textarea>

        <!-- Nota -->
        <div class="flex items-center gap-3">
          <Star class="w-5 h-5 text-yellow-500" />
          <label>Nota</label>
        </div>

        <div class="flex items-center gap-3">
          <div class="rating rating-lg rating-half">
            <input type="radio" name="rating-11" class="rating-hidden" />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-1 bg-orange-500"
              aria-label="0.5 star"
              value="1"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-2 bg-orange-500"
              aria-label="1 star"
              value="2"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-1 bg-orange-500"
              aria-label="1.5 star"
              checked="checked"
              v-model="nota"
              value="3"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-2 bg-orange-500"
              aria-label="2 star"
              value="4"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-1 bg-orange-500"
              aria-label="2.5 star"
              value="5"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-2 bg-orange-500"
              aria-label="3 star"
              value="6"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-1 bg-orange-500"
              aria-label="3.5 star"
              value="7"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-2 bg-orange-500"
              aria-label="4 star"
              value="8"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-1 bg-orange-500"
              aria-label="4.5 star"
              value="9"
              v-model="nota"
            />
            <input
              type="radio"
              name="rating-11"
              class="mask mask-star-2 mask-half-2 bg-orange-500"
              aria-label="5 star"
              value="10"
              v-model="nota"
            />
          </div>

          <p class="font-semibold text-orange-500 leading-none">
            {{ nota ? nota : "Selecione..." }} ⭐
          </p>
        </div>

        <!-- Ano -->
        <div class="flex items-center gap-3">
          <Calendar class="w-5 h-5 text-blue-500" />
          <label for="ano">Ano</label>
        </div>

        <input
          id="ano"
          v-model="ano"
          type="text"
          placeholder="Ex: 2026"
          class="input input-white"
        />

        <!-- Status -->
        <div class="flex items-center gap-3">
          <Eye class="w-5 h-5 text-green-500" />
          <label>Status de Assistida</label>
        </div>

        <fieldset class="fieldset w-full">
          <select class="select w-full" v-model="assistida">
            <option :value="false">Não Assitido</option>
            <option :value="true">Assitido</option>
          </select>
        </fieldset>
      </div>

      <hr class="text-zinc-700" />

      <div class="flex justify-end m-4 gap-5">
        <button class="btn btn-soft btn-error" type="reset" @click="Cancelar">
          Cancelar
        </button>
        <button class="btn btn-soft btn-success" type="submit">
          Salvar Série
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Type, Tag, Star, Calendar, Eye, FileText } from "lucide-vue-next";
import { ref, watch, computed } from "vue";
import { criarSerie, editarSerie } from "../service/serieService";
import { useRouter } from "vue-router";

/* ================= ROUTER ================= */
const router = useRouter();

/* ================= PROPS (EDIÇÃO) ================= */
const props = defineProps({
  serie: {
    type: Object,
    default: null,
  },
});

const isEdit = computed(() => !!props.serie);

/* ================= CAMPOS ================= */
const titulo = ref("");
const genero = ref("");
const descricao = ref("");
const nota = ref("");
const ano = ref("");
const assistida = ref(false);

/* ================= TOAST ================= */
const mensagemToast = ref("");
const sucessoToast = ref(false);

const Toast = (mensagem, sucesso) => {
  mensagemToast.value = mensagem;
  sucessoToast.value = sucesso;

  setTimeout(() => {
    mensagemToast.value = "";
    sucessoToast.value = false;
  }, 5000);
};

/* ================= PREENCHE NO EDIT ================= */
watch(
  () => props.serie,
  (s) => {
    if (s) {
      titulo.value = s.titulo;
      genero.value = s.genero;
      descricao.value = s.descricao;
      nota.value = s.nota;
      ano.value = s.ano;
      assistida.value = s.assistida;
    }
  },
  { immediate: true },
);

/* ================= SALVAR (CREATE + EDIT) ================= */
const Salvar = async () => {
  // validações
  if (!titulo.value || !genero.value || !ano.value) {
    Toast("Preencha todos os dados.", false);
    return;
  }

  const anoNumero = Number(ano.value);

  if (anoNumero < 1946 || anoNumero > 2026) {
    Toast("Insira um ano entre 1946 e 2026.", false);
    return;
  }

  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(titulo.value)) {
    Toast("O título deve conter apenas letras.", false);
    return;
  }

  if (!/^[A-Za-zÀ-ÿ\s/]+$/.test(genero.value)) {
    Toast("O gênero deve conter apenas letras.", false);
    return;
  }

  const payload = {
    titulo: titulo.value,
    genero: genero.value,
    descricao: descricao.value,
    nota: nota.value,
    ano: ano.value,
    assistida: assistida.value,
  };

  try {
    if (isEdit.value) {
      await editarSerie(props.serie.id, payload);
      Toast("Série atualizada com sucesso!", true);
    } else {
      await criarSerie(payload);
      Toast("Série cadastrada com sucesso!", true);
    }

    setTimeout(() => {
      router.push("/");
    }, 2000);
  } catch (err) {
    Toast("Erro ao salvar série.", false);
  }
};

/* ================= CANCELAR ================= */
const Cancelar = () => {
  router.push("/");
};
</script>
