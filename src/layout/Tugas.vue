<template>
    <div class="container">
      <q-tabs v-model="tab" class="text-teal" align="left">
        <q-tab name="tugas1" label="Tugas 1"></q-tab>
        <q-tab name="tugas2" label="Tugas 2"></q-tab>
        <q-tab name="tugas3" label="Tugas 3"></q-tab>
        <q-tab name="tugas4" label="Tugas 4"></q-tab>
        <q-tab name="tugas5" label="Tugas 5"></q-tab>
        <q-tab name="tugas6" label="Tugas 6"></q-tab>
        <q-tab name="tugas7" label="Tugas 7"></q-tab>
      </q-tabs>
  
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tugas1">
          <Tugas1 />
        </q-tab-panel>
        <q-tab-panel name="tugas2">
          <Tugas2 />
        </q-tab-panel>
        <q-tab-panel name="tugas3">
          <Tugas3 />
        </q-tab-panel>
        <q-tab-panel name="tugas4">
          <Tugas4 />
        </q-tab-panel>
        <q-tab-panel name="tugas5">
          <Tugas5 />
        </q-tab-panel>
        <q-tab-panel name="tugas6">
          <Tugas6 />
        </q-tab-panel>
        <q-tab-panel name="tugas7">
          <Tugas7 />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </template>
  
  <script>
  import Tugas1 from '../pages/Tugas1.vue';
  import Tugas2 from '../pages/Tugas2.vue';
  import Tugas3 from '../pages/Tugas3.vue';
  import Tugas4 from '../pages/Tugas4.vue';
  import Tugas5 from '../pages/Tugas5.vue';
  import Tugas6 from '../pages/Tugas6.vue';
  import Tugas7 from '../pages/Tugas7.vue';
  
  export default {
    name: 'Tugas',
    components: {
      Tugas1,
      Tugas2,
      Tugas3,
      Tugas4,
      Tugas5,
      Tugas6,
      Tugas7
    },
    data() {
      return {
        tab: 'tugas1'
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
  }
  
  .q-tabs {
    max-width: 6000px;
    margin-top: -530px;
  }
  
  .q-tab-panels {
    width: 100%; 
    max-width: 600px;
  }
  </style>
  