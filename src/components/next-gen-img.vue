<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp">
    <source :srcset="src" type="image/jpeg"> 
    <img :src="src" :alt="alt" />
  </picture>
</template>

<script>
  export default {
    name: 'nextGenImg',
    props: {
      src: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      }
    },
    computed: {
      webpSrc () {
        return `${this.src}?fm=webp`
      }
    }
  }
</script>