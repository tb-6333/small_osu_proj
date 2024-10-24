<template>
  <div v-for="beatmap in allbeatmaps" class="m-2">
    <div
      v-if="userProfile != null"
      class="my-2 p-2 border rounded-lg h-full overflow-hidden bg-white shadow-lg"
    >
      <div class="w-full">
        <a
          target="_blank"
          :href="`https://osu.ppy.sh/beatmapsets/${beatmap.beatmapset_id}`"
        >
          <img
            class="w-full h-auto rounded-lg shadow-md mb-5"
            :src="`https://assets.ppy.sh/beatmaps/${beatmap.beatmapset_id}/covers/cover.jpg`"
            alt=""
          />
        </a>
      </div>
      <h2 class="text-2xl font-bold mb-2 text-gray-800">
        <a
          target="_blank"
          :href="`https://osu.ppy.sh/beatmapsets/${beatmap.beatmapset_id}`"
          >{{ beatmap.title }}</a
        >
      </h2>
      <p class="text-gray-600 mb-2">
        <strong>Artist:</strong> {{ beatmap.artist }}
      </p>
      <p class="text-gray-600 mb-2"><strong>BPM:</strong> {{ beatmap.bpm }}</p>
      <p class="text-gray-600 mb-2">
        <strong>Difficulty:</strong>
        {{ parseFloat(beatmap.difficultyrating).toFixed(2) }}
      </p>
      <p class="text-gray-600 mb-2">
        <strong>Creator:</strong>
        <a
          class="text-blue-400"
          :title="`UID: ${beatmap.creator_id}`"
          target="_blank"
          :href="`https://osu.ppy.sh/u/${beatmap.creator_id}`"
          >{{ beatmap.creator }}</a
        >
      </p>
      <p class="text-gray-600 mb-2"><strong>Mode:</strong> Standard</p>
      <p class="text-gray-600 mb-2">
        <strong>Hit Length:</strong> {{ beatmap.hit_length }}
      </p>
      <p class="text-gray-600 mb-2">
        <strong>Max Combo:</strong> {{ beatmap.max_combo }}
      </p>
      <p class="text-gray-600">
        <strong>Last Updated:</strong> {{ beatmap.last_update }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { defineProps } from "vue";

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
</script>
