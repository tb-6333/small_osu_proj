<template>
  <div class="mx-5 mt-5 flex flex-col items-start space-y-3">
    <label for="input_id" class="text-lg font-semibold">ID/Username:</label>
    <input
      type="text"
      id="input_id"
      v-model="input_id"
      class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      @keyup.enter="fetchUserProfile(input_id)"
      placeholder="Enter your ID or Username"
    />
    <button 
      @click="fetchUserProfile(input_id)"
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Submit
    </button>
  </div>

  <div v-if="userProfile != undefined" class="justify-center flex mx-5 mt-5">
    <Player_card :userProfile="userProfile" />
  </div>
  <div v-else>
    <p class="ml-5 text-red-500">Why kosong nigga?</p>
  </div>
  <Beatmap_cards
    v-if="allbeatmaps != null && userProfile !== undefined"
    :allbeatmaps="allbeatmaps"
    :userProfile="userProfile"
  />
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import Beatmap_cards from "./Beatmap_card.vue";
import Player_card from "./Player_card.vue";
import axios from "axios";

const filtered_ids = ref(null);
const country = "MY";
const input_id = ref("");
const mode = ref(0);
const allbeatmaps = ref(null);
const filtered_beatmaps = ref(null);
const userProfile = ref(null);
const error = ref(null);
const beatmap_error = ref(null);
const Key = import.meta.env.VITE_OSU_API_KEY;;

async function fetchUserProfile(username) {
  allbeatmaps.value = null;
  userProfile.value = null;
  try {
    const response = await axios.get(
      `https://osu.ppy.sh/api/get_user?k=${Key}&u=${username}`
    );
    userProfile.value = response.data[0];
    console.log(userProfile.value);
    fetchallbeatmaps();
  } catch (err) {
    error.value = err;
  }
}

async function fetchallbeatmaps() {
  try {
    const response = await axios.get(
      `https://osu.ppy.sh/api/get_beatmaps?k=${Key}&m=${mode.value}&u=${input_id.value}`
    );
    const beatmaps = response.data;

    // Get distinct beatmaps based on beatmapset_id
    const distinctBeatmaps = [];
    const beatmapsetIds = new Set();

    for (const beatmap of beatmaps) {
      if (!beatmapsetIds.has(beatmap.beatmapset_id)) {
        beatmapsetIds.add(beatmap.beatmapset_id);
        distinctBeatmaps.push(beatmap);
      }
    }

    allbeatmaps.value = distinctBeatmaps;
  } catch (err) {
    beatmap_error.value = err;
  }

  filtered_ids.value = getCreatorIds();
  //console.log(filtered_ids.value);
}

function getCreatorIds() {
  if (allbeatmaps.value) {
    return allbeatmaps.value.map((beatmap) => beatmap.creator_id);
  }
  return [];
}
</script>
