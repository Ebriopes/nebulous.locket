<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const title = computed(() => store.state.title);
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg bg-primary text-light">
    <div class="container-fluid">
      <section class="d-flex align-items-center navbar-section">
        <RouterLink class="navbar-brand text-light" to="/">
          <img src="@/assets/icons/universe.png" alt="Nebula logo" class="me-2 navbar-logo" />
          Nebulous
          <sub>
            <i>LOCKET</i>
          </sub>
        </RouterLink>
      </section>

      <section class="navbar-section text-center">
        <h3 class="m-0 fw-bolder text-truncate">{{ title }}</h3>
      </section>

      <section class="navbar-section">
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-end float-end" id="navbarText">
          <span class="navbar-text"> Right element</span>
        </div> -->
      </section>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#navbar {
  height: 3.5rem;
  max-height: 3.5rem;
}

.navbar-section {
  flex: 1 0;

  .navbar-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
