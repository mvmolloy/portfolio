<template>
  <div id="app">
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
.skew {
    transform: skewY(-4deg);
    transform-origin: top left;
}
.unskew {
    transform: skewY(4deg);
}

.subheader {
    @apply text-base text-lg tracking-widest uppercase mb-2
}
</style>
