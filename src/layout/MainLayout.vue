<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Weather App
        </q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')"></q-btn class="huter">
        <q-btn flat label="Tugas" @click="$router.push('/tugas')"></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
};
</script>

<style scoped>

</style>
