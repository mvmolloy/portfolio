<template>
  <div id="app">
    <Nav />
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
#app {
    @apply bg-seafoam-50
}
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

.punc {
    @apply text-emerald-300 text-2xl font-normal
}
</style>
