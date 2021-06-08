<template>
  <section id="contact" class="px-10 lg:px-20 pb-5 mt-10 lg:mt-0 bg-seafoam-50">
    <div class="text-center -mt-40 xs:mt-0">
        <div id="social-icons__wrapper" class="mb-4 text-3xl 3xl:text-4xl 2xl:mt-5">
            <a href="https://www.linkedin.com/in/mvmolloy/" target="__blank" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/mvmolloy" target="__blank" class="social-link"><i class="fab fa-github-square"></i></a>
            <a href="mailto:mvamolloy@gmail.com" target="__blank" class="social-link"><i class="fas fa-envelope-square"></i></a>
            <a href="https://codepen.io/eukalytics" target="__blank" class="social-link"><i class="fab fa-codepen"></i></a>
        </div>
        <h2 class="text-seafoam-400 tracking-widest text-xl sm:text-2xl 3xl:text-3xl mt-5 2xl:mb-10 leading-relaxed uppercase font-extralight">Let's Connect<span class="punc">.</span></h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
.social-link {
    @apply text-seafoam-300 hover:text-emerald-400 inline pr-3 opacity-80
}
</style>
