<template>
    <section id="about" class="px-10 lg:px-20 -mt-40 pt-48 pb-20 lg:pb-40 bg-seafoam-50">
        <div class="grid lg:grid-cols-2 lg:gap-28 -mt-40">
            <div class="mt-52 xl:mt-68 -px-10 lg:hidden mx-auto">
                <img class="my-auto block" src="../assets/img/about/portfolio.png">
            </div>
            <div class="mt-5 lg:mt-48 3xl:mt-60 mb-10 lg:mb-0 my-auto text-center lg:text-left">
                <h2 class="subheader text-seafoam-500">About Me<span class="punc">.</span></h2>
                <p class="">I am a full-stack software developer, currently working across a range of applications used by government departments and public sector partners to facilitate their learning and development programmes.</p>
                <a href="#projects" class="cta-btn">View Projects</a>
            </div>
            <div class="mt-10 lg:mt-52 3xl:mt-60 -px-10 hidden lg:flex justify-end">
                <img class="my-auto block" src="../assets/img/about/portfolio.png">
            </div>
            <div class="mt-10 lg:-ml-10 3xl:-ml-20 mx-auto">
                <img src="../assets/img/about/diploma.png" class="px-38">
            </div>
             <div class="lg:mt-14 3xl:mt-20 mb-10 mb-20 lg:mb-0 my-auto text-center lg:text-left h-full">
                <h2 class="subheader text-seafoam-500 mt-5 lg:mt-0">Learn<span class="punc">.</span> Work<span class="punc">.</span> Play<span class="punc">.</span></h2>
                <p>I have recieved a <span class="text-seafoam-500">Diploma in Full-Stack Software Development</span> with the <span class="text-seafoam-500">Code Institute (Dublin)</span> and <span class="text-seafoam-500">CertHE in Computing (Software)</span> with the <span class="text-seafoam-500">Open University</span>. I also have an MA from the University of Nottingham.</p>
                <a href="https://www.credential.net/18fd5235-39c3-45ab-a706-f11c0888cd48" target="__blank" class="cta-btn">View Diploma</a>
            </div>
        </div>
        <div id="logos" class="hidden md:grid grid-cols-3 lg:grid-cols-6 lg:mt-36 lg:mb-10 gap-14 xl:gap-2">
            <div class="sm:mx-auto">
                <img src="../assets/img/about/vu.png" alt="Vrije Universetiet Amsterdam Logo" class="h-16">       
            </div>
            <div class="sm:mx-auto">
                <img src="../assets/img/about/ci.png" alt="Code Institute Logo" class="h-14 pt-1">
            </div>
            <div class="sm:mx-auto">
                <img src="../assets/img/about/uon.png" alt="University of Nottingham Logo" class="h-14">
            </div>
            <div class="w-full sm:mx-auto">
                <img src="../assets/img/about/pp.png" alt="Premier Parnterhsip Logo" class="h-14 pb-1 lg:pl-8">
            </div>
            <div class="sm:mx-auto">
                <img src="../assets/img/about/ukc.png" alt="University of Kent Logo" class="h-14">
            </div>
            <div class="mx-auto">
                <img src="../assets/img/about/ou.png" alt="Open University Logo" class="h-16">
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
p {
    @apply text-gray-400 tracking-widest text-xl sm:text-2xl mb-1 mb-5 leading-relaxed font-light
}
.cta-btn {
    @apply text-seafoam-400 text-xs tracking-wider font-semibold uppercase border p-2 px-4 rounded-full border-seafoam-400 hover:bg-seafoam-400 hover:text-white -ml-1
}
#logos img {
  filter: brightness(0) invert(0.8);
}
#logos img:hover {
  filter: brightness(0.2) invert(0.4);
}
.leading-relaxed {
    line-height: 1.625;
}
</style>
