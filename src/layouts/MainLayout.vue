<template>
  <Map.OlMap
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    class="window-height window-width"
  >
    <Map.OlView
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"/>
    <Layers.OlTileLayer>
      <Sources.OlSourceOsm/>
    </Layers.OlTileLayer>
  </Map.OlMap>
</template>

<script setup>
import {ref, inject} from 'vue';
import {Map, Layers, Sources} from "vue3-openlayers";

const center = ref([40, 40]);
const projection = ref('EPSG:4326');
const zoom = ref(3);
const rotation = ref(0);

// const format = inject('ol-format');
// const geoJson = new format.GeoJSON();
</script>
