<template>
  <div class="video">
    <audio ref="audioTag" :src="currentSong.url"></audio>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
    <button @click="nextSong">下一首</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const audioTag = ref(null)
const songs = [
  {
    name: 'Song1',
    url: 'https://ting8.yymp3.com/new3/mariahcarey8/23.mp3',
  },
  {
    name: 'Song2',
    url: 'https://ting8.yymp3.com/new27/liyugang6/6.mp3',
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
  text-align: center;

  button {
    margin: 20px;
  }
}
</style>
