<template>
    <section id="contact" class="px-10 lg:px-20 pb-5 lg:mt-0 bg-seafoam-50">
     <div class="grid md:grid-cols-1 lg:-mt-36">
            <div class="mx-auto block -mt-40 xs:mt-0">
                <div id="geo-globe" class="pt-36 xs:pt-10 lg:pt-0">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
            <div class="text-center md:mt-10 lg:mt-5">
                <div id="social-icons__wrapper" class="mb-4 text-3xl 3xl:text-4xl 2xl:mt-5">
                    <a href="https://www.linkedin.com/in/mvmegan/" target="__blank" class="social-link"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/mvmolloy" target="__blank" class="social-link"><i class="fab fa-github-square"></i></a>
                    <a href="mailto:mvamolloy@gmail.com" target="__blank" class="social-link"><i class="fas fa-envelope-square"></i></a>
                    <a href="https://codepen.io/eukalytics" target="__blank" class="social-link"><i class="fab fa-codepen"></i></a>
                </div>
                <h2 class="text-seafoam-400 subheader text-xl sm:text-2xl 3xl:text-3xl mt-5 2xl:mb-10 font-extralight">Let's Connect<span class="punc">.</span></h2>
            </div>
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
    @apply text-seafoam-300 hover:text-emerald-400 inline pr-3 opacity-90
}

geo-globe {
  max-height: 0px;
}

canvas {
    max-width: 100%;
    display: block;
}
</style>
