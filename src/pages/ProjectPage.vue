<template>
  <div class="center-block content-width yyy-card mb-5" style="padding: 30px">
    <a :href="project.url" target="_blank" v-if="project.image">
      <img :src="project.image" :alt="project.title" class="image-responsive"/>
    </a>
    <div class="text-xs text-justify text-muted pl-3 pr-3 mt-3"
         v-if="project.legend">{{project.legend}}</div>
    <div v-if="project.embed" class="embed-responsive embed-responsive-narrow">
      <iframe :src="project.embed" style="border:none;width:100%;"></iframe>
    </div>
    <h3 class="mt-4 mb-3">{{project.title}}</h3>
    <div class="mt-3"></div>
    <p v-for="d in project.descriptions" class="text-justify">
      {{d}}
    </p>
    <div class="mt-3">
      <b-button v-for="b in project.buttons"
                class="mr-2" size="sm" squared
                variant="outline-info"
                :href="b.link"
                v-bind:key="b.name"
                target="_blank">{{b.name}}</b-button>
      <small v-if="project.ps" class="text-muted text-xs">
        {{project.ps}}
      </small>
    </div>
  </div>
</template>

<script>
  import {publications} from '../data'
  export default {
    name: 'ProjectPage',
    data() {
      return {
        project: publications[this.$route.params.id]
      }
    }
  }
</script>

<style scoped>

</style>