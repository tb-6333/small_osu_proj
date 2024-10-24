<template>
  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">Ranked (<span class="text-blue-400">{{ length(ranked) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(ranked) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="ranked" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No Ranked Beatmaps</p>
    </div>
  </div>

  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">Loved (<span class="text-blue-400">{{ length(loved) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(loved) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="loved" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No Loved Beatmaps</p>
    </div>
  </div>

  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">Qualified (<span class="text-blue-400">{{ length(qualified) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(qualified) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="qualified" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No Qualified Beatmaps</p>
    </div>
  </div>

  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">Pending (<span class="text-blue-400">{{ length(pending) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(pending) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="pending" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No Pending Beatmaps</p>
    </div>
  </div>

  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">WIP (<span class="text-blue-400">{{ length(WIP) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(WIP) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="WIP" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No WIP Beatmaps</p>
    </div>
  </div>

  <div class="border rounded-xl m-5">
    <div class="h-[3.5rem] flex items-center">
      <p class="font-semibold ml-5 text-3xl">Graveyard (<span class="text-blue-400">{{ length(graveyard) }}</span>)</p>
    </div>
    <div
      class="w-lg mb-5 mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-if="length(graveyard) !== 0"
    >
      <Beatmaps_Display :allbeatmaps="graveyard" :userProfile="userProfile" />
    </div>
    <div v-else>
      <p class="text-red-500 ml-5 pb-5">No Graveyard Beatmaps</p>
    </div>
  </div>
</template>

<script setup>
import Beatmaps_Display from "./Beatmaps_Display.vue";
import { onMounted, ref } from "vue";
import { defineProps } from "vue";

const ranked = ref(null);
const pending = ref(null);
const graveyard = ref(null);
const loved = ref(null);
const qualified = ref(null);
const WIP = ref(null);

const props = defineProps({
  allbeatmaps: {
    type: Object,
    required: true,
  },
  userProfile: {
    type: Object,
    required: true,
  },
});

function length(arr) {
  if (arr === null) {
    return 0;
  } else {
    return arr.length;
  }
}

onMounted(() => {
  ranked.value = props.allbeatmaps.filter(
    (beatmap) => beatmap.approved === "1"
  );
  pending.value = props.allbeatmaps.filter(
    (beatmap) => beatmap.approved === "0"
  );
  graveyard.value = props.allbeatmaps.filter(
    (beatmap) => beatmap.approved === "-2"
  );

  loved.value = props.allbeatmaps.filter((beatmap) => beatmap.approved === "4");

  qualified.value = props.allbeatmaps.filter(
    (beatmap) => beatmap.approved === "3"
  );

  WIP.value = props.allbeatmaps.filter((beatmap) => beatmap.approved === "-1");
});
</script>
