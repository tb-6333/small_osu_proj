<template>
  <div
    class="max-w-sm mx-5 bg-white shadow-lg rounded-lg overflow-hidden md:max-w-4xl md:flex md:flex-wrap align-center mdjustify-center"
  >
    <div
      class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 md:w-1/3 md:flex md:flex-col md:items-center justify-center"
    >
      <div>
        <a
          :href="`https://osu.ppy.sh/u/${props.userProfile.user_id}`"
          target="_blank"
          ><img
            :src="`https://a.ppy.sh/${props.userProfile.user_id}`"
            alt="Profile Picture"
            class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
          />
        </a>
        <h2 class="text-white text-2xl font-bold text-center mb-2">
          <a
            :href="`https://osu.ppy.sh/u/${props.userProfile.user_id}`"
            target="_blank"
            >{{ props.userProfile.username }}</a
          >
        </h2>
      </div>
    </div>
    <div class="px-6 py-4 md:w-2/3">
      <div class="text-gray-700 text-base">
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-purple-700">User Info</h3>
          <p><strong>User ID:</strong> {{ props.userProfile.user_id }}</p>
          <p><strong>Join Date:</strong> {{ props.userProfile.join_date }}</p>
          <p><strong>Country:</strong> {{ props.userProfile.country }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-pink-700">User Plays</h3>
          <p><strong>Playcount:</strong> {{ props.userProfile.playcount }}</p>
          <p>
            <strong>Playtime:</strong>
            {{
              parseFloat(props.userProfile.total_seconds_played / 3600).toFixed(
                0
              )
            }}
            Hours
          </p>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-red-700">Performance</h3>
          <p>
            <strong>Ranked Score:</strong> {{ props.userProfile.ranked_score }}
          </p>
          <p>
            <strong>Total Score:</strong> {{ props.userProfile.total_score }}
          </p>
          <p><strong>PP Rank:</strong> {{ props.userProfile.pp_rank }}</p>
          <p><strong>Level:</strong> {{ props.userProfile.level }}</p>
          <p><strong>Raw PP:</strong> {{ props.userProfile.pp_raw }}</p>
          <p>
            <strong>Accuracy:</strong>
            {{ parseFloat(props.userProfile.accuracy).toFixed(2) }}%
          </p>
          <p>
            <strong>Country Rank:</strong>
            {{ props.userProfile.pp_country_rank }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="px-6 pt-4 pb-2 md:w-full md:flex md:flex-wrap justify-center items-center border-t border-gray-200"
    >
      <span
        class="shadow-md inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2"
      >
        SS Rank: {{ props.userProfile.count_rank_ss }}
      </span>
      <span
        class="shadow-md inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-700 mr-2 mb-2"
      >
        SSH Rank: {{ props.userProfile.count_rank_ssh }}
      </span>
      <span
        class="shadow-md inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2"
      >
        S Rank: {{ props.userProfile.count_rank_s }}
      </span>
      <span
        class="shadow-md inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2"
      >
        SH Rank: {{ props.userProfile.count_rank_sh }}
      </span>
      <span
        class="shadow-md inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2"
      >
        A Rank: {{ props.userProfile.count_rank_a }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userProfile: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
@media (min-width: 768px) {
  .max-w-sm {
    max-width: none;
  }
}
</style>
