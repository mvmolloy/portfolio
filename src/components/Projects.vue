<template>
    <section id="projects" class="px-10 lg:pl-20 relative skew bg-white">
        <div class="pt-28 unskew">
            <div class="pb-10 project text-center lg:mb-28 grid md:grid-cols-2 xl:grid-cols-3 gap-16">
                <div v-for="project in projects.slice(0, 9)" :key="project.name" class="hidden lg:block mb-10">
                    <div class="w-full">
                        <img :src="require('@/assets/img/gif/' + project.imgSrc)" alt="GIF animation of project" class="w-full my-5 mx-auto px-10 md:px-5">
                    </div>
                    <h2 class="subheader text-seafoam-400">{{project.name}}</h2>
                    <div class="mt-5 text-xs lg:px-5">
                    <p class="text-gray-400 tracking-widest text-xl sm:text-lg mb-1 mb-5 leading-relaxed font-thin">{{ project.description }}</p>
                        <div class="2xl:px-10">
                            <span v-for="tech in project.stack" :key="tech" class="border-gray-400 border text-gray-500 text-opacity-90 border-opacity-90 little-card rounded-full">
                                {{tech}}
                            </span>
                            <div>
                                <span v-if="project.building" class="border-gray-300 border text-gray-300 little-card rounded-full">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </span>
                                <a v-if="project.demo" :href="project.demo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </a>
                                <a v-if="project.repo" :href="project.repo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-code pr-2"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="project in projects.slice(0, 6)" :key="project.name" class="hidden md:block lg:hidden mb-10">
                    <div class="w-full">
                        <img :src="require('@/assets/img/gif/' + project.imgSrc)" alt="GIF animation of project" class="w-full my-5 mx-auto px-10 md:px-5">
                    </div>
                    <h2 class="subheader text-seafoam-400">{{project.name}}</h2>
                    <div class="mt-5 text-xs lg:px-5">
                    <p class="text-gray-400 tracking-widest text-xl sm:text-lg mb-1 mb-5 leading-relaxed font-thin">{{ project.description }}</p>
                        <div class="2xl:px-10">
                            <span v-for="tech in project.stack" :key="tech" class="border-gray-400 border text-gray-500 text-opacity-90 border-opacity-90 little-card rounded-full">
                                {{tech}}
                            </span>
                            <div>
                                <span v-if="project.building" class="border-gray-300 border text-gray-300 little-card rounded-full">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </span>
                                <a v-if="project.demo" :href="project.demo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </a>
                                <a v-if="project.repo" :href="project.repo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-code pr-2"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="project in projects.slice(0, 4)" :key="project.name" class="md:hidden mb-10">
                    <div class="w-full">
                        <img :src="require('@/assets/img/gif/' + project.imgSrc)" alt="GIF animation of project" class="w-full my-5 mx-auto px-10 md:px-5">
                    </div>
                    <h2 class="subheader text-seafoam-400">{{project.name}}</h2>
                    <div class="mt-5 text-xs lg:px-5">
                    <p class="text-gray-400 tracking-widest text-xl sm:text-lg mb-1 mb-5 leading-relaxed font-thin">{{ project.description }}</p>
                        <div class="2xl:px-10">
                            <span v-for="tech in project.stack" :key="tech" class="border-gray-400 border text-gray-500 text-opacity-90 border-opacity-90 little-card rounded-full">
                                {{tech}}
                            </span>
                            <div>
                                <span v-if="project.building" class="border-gray-300 border text-gray-300 little-card rounded-full">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </span>
                                <a v-if="project.demo" :href="project.demo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-laptop pr-2"></i> Demo
                                </a>
                                <a v-if="project.repo" :href="project.repo" target="_blank" class="link-btn little-card">
                                    <i class="fas fa-code pr-2"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import projects from "../assets/json/projects.json"
  export default {
    name: 'Projects',
    data(){
      return {
        projects: projects,
      }
    }
  }
</script>

<style scoped>
.little-card {
    @apply inline-block my-2 mr-2 py-2.5 px-3 xl:tracking-wide
}
.link-btn {
    @apply text-seafoam-400 text-xs border p-2 px-4 rounded-full border-seafoam-400 hover:bg-seafoam-400 hover:text-white
}
.leading-relaxed {
    line-height: 1.625;
}
</style>
