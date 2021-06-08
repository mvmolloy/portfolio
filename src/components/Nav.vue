<template>
    <nav class="bg-none z-10 text-4xl fixed top w-full px-5 lg:px-14 py-5 md:pb-0 text-tertiary font-inter" :class="{'nav-scrolled' : docScrolled, 'sm-nav-active' : smNavActive}">
        <div class="grid grid-cols-2">
            <div class="w-50 text-left flex">
                <a href="/" class="inline">
                    <img src="../assets/img/nav/logo.png" id="nav-logo" class="h-14 p-1 rounded" alt="Portfolio Logo">
                </a>
            </div>
            <!--md+ nav links -->
            <div class="tracking-widest text-white flex justify-between hidden md:flex font-light">
                <a href="#home" class="hover:text-green-200 text-base 3xl:text-lg inline my-auto mr-8">Home</a>
                <a href="#about" class="hover:text-green-200 text-base 3xl:text-lg inline my-auto mr-8">About</a>
                <a href="#projects" class="hover:text-green-200 text-base 3xl:text-lg inline my-auto mr-8">Projects</a>
                <a href="#contact" class="hover:text-green-200 text-base 3xl:text-lginline my-auto mr-8">Contact</a>
            </div>
            <div class="inline-block md:hidden flex justify-end">
                <i @click="handleSmNav()" id="sm-nav__toggler" :class="smNavActive ? 'fa-times' : 'fa-bars'" class="my-auto fas text-2xl px-4 text-white"></i>
            </div>
            <!--sm nav links-->
            <div class="w-full">
                <div id="sm-nav__menu" :class="{hidden : !smNavActive}" class="md:hidden mt-3 pb-5 px-2 text-gray-200 text-gray-200 tracking-widest">
                    <ul>
                        <li>
                            <a href="#home" class="hover:text-green-200 text-lg inline my-auto mr-8">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:text-green-200 text-lg inline my-auto mr-8">About</a>
                        </li>
                        <li>
                            <a href="#projects" class="hover:text-green-200 text-lg inline my-auto mr-8">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:text-green-200 text-lg inline my-auto mr-8">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data () {
    return {
        docScrolled: false,
        smNavActive: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      window.pageYOffset > 100 ? this.docScrolled = true : this.docScrolled = false;
    },
    handleSmNav(){
        this.smNavActive = !this.smNavActive;
    }
  },
  }
</script>

<style scoped>
.nav-scrolled {
    @apply bg-seafoam-300 md:py-1 bg-opacity-80
}

.sm-nav-active {
    @apply bg-seafoam-300
}

#nav-logo {
  transition: transform .7s ease-in-out;
}
#nav-logo:hover {
  transform: rotate(360deg);
}
</style>
