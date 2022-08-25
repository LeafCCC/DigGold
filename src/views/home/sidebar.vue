<template>
  <div class="grid-content ep-bg-purple-dark">
    <SigninTip />
    <Ad v-for="a in adData" :key="a.id" :url="a.url" :picture="a.picture" />
    <QrcodeDownload />
  </div>
</template>
<script setup>
import Ad from '@/components/ad/index.vue'
import SigninTip from '@/components/signin/signin-tip.vue'
import QrcodeDownload from '@/components/qrcode/qrcode-download.vue'
import adRes from '@/assets/json/homeAd.json'
const adData = adRes.data
</script>
