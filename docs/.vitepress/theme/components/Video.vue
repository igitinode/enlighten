<template>
  <div class="video">
    <figure>
      <audio
        ref="audioTag"
        :src="currentSong.url"
        controls
        preload="metadata"
        autoplay
      >
        浏览器暂不支持音频播放
      </audio>
      <button @click="play">播放</button>
      <button @click="pause">暂停</button>
      <button @click="nextSong">下一首</button>
    </figure>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const href = window.location.href
const audioTag = ref(null)
const songs = [
  {
    name: 'Song1',
    url: href + '/music/WhenYouBelieve.mp3',
  },
  {
    name: 'Song2',
    url: href + '/music/westlife.mp3',
  },
]

let currentSongIndex = 1

const play = () => {
  if (audioTag.value) {
    audioTag.value.play()
  }
}

const pause = () => {
  if (audioTag.value) {
    audioTag.value.pause()
  }
}

const nextSong = () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length
  if (audioTag.value) {
    audioTag.value.src = songs[currentSongIndex].url
    audioTag.value.play()
  }
}

const currentSong = songs[currentSongIndex]

onMounted(() => {
  play()
})
</script>

<style scoped>
.video {
  audio {
    margin: 40px auto 20px;
  }
  text-align: center;
  margin: 0 auto;

  button {
    margin: 0 20px 20px;
  }
}
</style>
