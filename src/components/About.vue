<template>
    <section id="about" class="px-10 lg:px-20 -mt-40 pt-48 pb-20 lg:pb-40 bg-seafoam-50">
        <div class="grid lg:grid-cols-2 lg:gap-28 -mt-40">
            <div class="mt-52 -px-10 lg:hidden mx-auto">
                <img class="my-auto block" src="../assets/img/about/portfolio.png">
            </div>
            <div class="mt-5 lg:mt-48 mb-10 lg:mb-0 my-auto text-center lg:text-left">
                <h2 class="subheader text-seafoam-500">About Me<span class="punc">.</span></h2>
                <p class="text-gray-400 tracking-widest text-xl sm:text-2xl 3xl:text-3xl mb-1 mb-5 leading-relaxed font-light">I am a full-stack software developer, currently working across a range of applications used by government departments and public sector partners to facilitate their learning and development programmes.</p>
                <a href="#projects" class="cta-btn">View Projects</a>
            </div>
            <div class="mt-10 lg:mt-52 -px-10 hidden lg:block">
                <img class="my-auto block" src="../assets/img/about/portfolio.png">
            </div>
            <div class="mt-10 -px-10 mx-auto">
                <img src="../assets/img/about/diploma.png">
            </div>
             <div class="mb-10 mb-20 lg:mb-0 my-auto text-center lg:text-left">
                <h2 class="subheader text-seafoam-500">Learn<span class="punc">.</span> Work<span class="punc">.</span> Play<span class="punc">.</span></h2>
                <h1 class="text-gray-400 tracking-widest text-xl sm:text-2xl 3xl:text-3xl mb-1 mb-5 leading-relaxed font-thin">I have recieved a <span class="text-seafoam-500">Diploma in Full-Stack Software Development</span> with the <span class="text-seafoam-500">Code Institute (Dublin)</span> and <span class="text-seafoam-500">CertHE in Computing (Software)</span> with the <span class="text-seafoam-500">Open University</span>. I also have an MA from the University of Nottingham.</h1>
                <a href="https://www.credential.net/18fd5235-39c3-45ab-a706-f11c0888cd48" target="__blank" class="cta-btn">View Diploma</a>
            </div>
        </div>
    </section>
</template>


<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.cta-btn {
    @apply text-seafoam-400 text-xs tracking-wider font-semibold uppercase border p-2 px-4 rounded-full border-seafoam-400 hover:bg-seafoam-400 hover:text-white
}
</style>
