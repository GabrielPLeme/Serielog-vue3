<template>
  <div class="navbar bg-base-300 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><RouterLink to="/series/nova">Cadastrar Series</RouterLink></li>
          <li><RouterLink to="/">Deletar Series</RouterLink></li>
          <li><RouterLink to="/series/editar">Editar</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink to="/" class="btn btn-ghost text-xl">Home</RouterLink>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
  <RouterView />
  <footer
    class="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10"
  >
    <nav class="grid grid-flow-col gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/series/nova">Cadastrar Series</RouterLink>
      <RouterLink to="/">Deletar Series</RouterLink>
    </nav>
    <nav>
      <div class="grid grid-cols-4 gap-4">
        <a
          href="https://github.com/GabrielPLeme"
          rel="stylesheet"
          target="blank"
        >
          <Github class="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-leme-644b4b261/"
          rel="stylesheet"
          target="blank"
        >
          <Linkedin class="w-6 h-6 text-base" />
        </a>
        <a>
          <Linkedin class="w-6 h-6 text-purple-500" />
        </a>
        <a href="https://github.com/gabztx" rel="stylesheet" target="blank">
          <Github class="w-6 h-6 text-purple-500" />
        </a>
      </div>
    </nav>
    <aside class="flex items-center">
      <Clapperboard class="w-6 h-6" />

      <p>Feito com ❤️ — SerieLog 2026</p>
    </aside>
  </footer>
</template>

<script setup>
import { Clapperboard, Github, Linkedin } from "lucide-vue-next";
//Missão 4
</script>
