<template>
    <section id="home" class="skew">
        <div class="unskew absolute bottom-5 lg:bottom-14 inset-x-0 w-5/6 sm:w-1/2 lg:w-2/5 3xl:w-1/3 px-10 lg:px-20">
            <h2 class="subheader text-green-100 tracking-wide 3xl:text-xl">I Build <span class="typed"></span></h2>
            <h1 class="text-white tracking-widest text-xl sm:text-2xl 3xl:text-3xl mb-1 mb-5 leading-relaxed font-light">Hi, my name is Megan. I build software that helps keep the UK learning.</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
    #home {
        background-image: linear-gradient(rgba(0,240,0,0.05), rgba(0,0,0,0.7)), url("../assets/img/header/bg-header.png");
    }
}

@media only screen and (min-width: 801px) {
    #home {
        background-image: linear-gradient(rgba(0,100,0,0.15), rgba(0,0,0,0.5)), url("../assets/img/header/bg-header.png");
    }
}     

#home {
    background-attachment: fixed;
    @apply text-white shadow-2xl bg-cover bg-center bg-top bg-no-repeat h-vh80
}
</style>
