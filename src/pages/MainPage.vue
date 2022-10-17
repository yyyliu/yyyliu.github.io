<template>
  <div>
    <!-- Header -->
    <div class="simple-header bg-mint">
      <div class="center-block content-width d-flex justify-content-between">
        <div class="ml-3 mr-3 font-weight-bold">
          <a href="/" class="no-link">Yang Liu</a>
        </div>
<!--        <div class="mr-3 text-bold d-sm-block d-none">-->
<!--          <small><a href="/#/cv" target="_blank" class="no-link">CV</a></small>-->
<!--          <small class="ml-3 cursor-pointer" @click="scrollTo('pubs')">-->
<!--            Publications</small>-->
<!--          <small class="ml-3 cursor-pointer" @click="scrollTo('projects')">-->
<!--            Projects</small>-->
<!--        </div>-->
      </div>
    </div>
    <!-- Content -->
    <div class="center-block content-width text-left">
      <div class="pl-3 pr-3">
        <div class="d-md-flex mt-3 mt-md-5">
          <!--Image-->
          <div class="mr-3 text-center">
            <img src="/build/images/me.jpg"
                 alt="This is me"
                 style="height: 200px"
                 class="image-circle"/>
          </div>
          <!--Short Bio-->
          <div class="w-100 mt-3 mt-md-0 div-bio">
            <p v-for="block in bio" class="text-justify">
              <span v-for="part in block">
                <span v-if="!part.url">{{part.text}}</span>
                <a v-if="part.url"
                   target="_blank"
                   class="link-primary"
                   :href="part.url">{{part.text}}</a>
              </span>
            </p>

            <!--Contact-->
            <p class="mt-1">
              <b-button squared size="sm" variant="outline-secondary"
                        href="mailto:yliu0@cs.washington.edu">
                <i class="far fa-envelope mr-1"></i>
                Email</b-button>
              <b-button class="ml-2" squared size="sm" variant="outline-info"
                        href="https://www.linkedin.com/in/yliu0/" target="_blank">
                <i class="fab fa-linkedin mr-1"></i>
                LinkedIn</b-button>
              <b-button class="ml-2" squared size="sm" variant="outline-secondary"
                        href="https://github.com/yyyliu" target="_blank">
                <i class="fab fa-github mr-1"></i>
                GitHub</b-button>
              <b-button class="ml-2" squared size="sm" variant="outline-secondary"
                        href="https://scholar.google.com/citations?user=8Y6_oOgAAAAJ" target="_blank">
                <i class="fab fa-google mr-1"></i>
                Google Scholar
              </b-button>
            </p>
          </div>
        </div>

        <!--Publications-->
        <h3 class="mt-3 mb-3" id="pubs">Publications</h3>
        <div class="yyy-card row ml-0 mr-0" v-for="(p, index) in publications">
          <div class="col-12 col-sm-4">
            <router-link :to="`/project/${index}`">
              <img :src="p.thumbnail" :alt="p.title" class="image-responsive"/>
            </router-link>
          </div>
          <div class="col-12 col-sm-8">
            <router-link :to="`/project/${index}`">
              <div class="text-bold text-dark">{{p.title}}</div>
            </router-link>
            <div class="mt-1">{{p.authors.join(', ')}}</div>
            <div class="mt-1 font-italic text-muted">{{p.venue}}</div>
            <div class="mt-1">
              <b-button v-for="b in p.buttons" squared size="sm"
                class="mr-2"  variant="outline-info" v-bind:key="b.name"
                :href="b.link"  target="_blank">{{b.name}}</b-button>
            </div>
          </div>
        </div>

        <!--Projects-->
        <h3 class="mt-3 mb-3" id="projects">Projects</h3>
        <div class="row">
          <div v-for="p in projects" class="col-12 col-sm-6">
            <div class="yyy-card pl-3">
              <div><a :href="p.url" target="_blank">
                <img :src="p.thumbnail" :alt="p.title" class="image-responsive" /></a></div>
              <div class="mt-2 font-weight-bold">
                <a :href="p.url" target="_blank" class="text-dark">{{p.title}}</a>
              </div>
              <div class="mt-1">{{p.summary}}</div>
              <div class="mt-2">
                <b-button v-for="b in p.buttons" squared size="sm"
                          class="mr-2"  variant="outline-info" v-bind:key="b.name"
                          :href="b.link"  target="_blank">{{b.name}}</b-button>
                <small v-if="p.ps" class="text-muted">{{p.ps}}</small>
              </div>
            </div>
          </div>
        </div>

        <!--Footer-->
        <div class="mt-3 mt-md-4"></div>
        <hr>
        <div class="m-3 text-center text-muted text-xs">
          Copyright © 2016-{{current_year}} Yang Liu
        </div>
        <div class="mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {publications, bio, projects} from '../data'
  export default {
    name: 'MainPage',
    data() {
      return {
        publications: publications,
        projects: projects,
        bio: bio,
        current_year: new Date().getFullYear()
      }
    },
    methods: {
      scrollTo (h) {
        let top = document.getElementById(h).offsetTop
        window.scrollTo(0, top)
      }
    }
  }
</script>

<style>
  a.link-primary {
    color: #107360;
  }

  .no-link, .no-link:link, .no-link:hover {
    color: inherit;
    text-decoration: inherit;
  }

  .simple-header
  {
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);
    padding:10px;
    font-family: LatoLatin, 'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 1.4em;
  }

  .content-width
  {
    max-width: 900px;
  }

  .yyy-card
  {
    box-shadow: 0 1px 4px rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.09);
    border-radius: 2px;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .div-bio
    {
      min-height: 200px;
    }
  }

  .image-responsive
  {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .embed-responsive.embed-responsive-narrow
  {
    padding-bottom: 35%;
  }

  .center-block
  {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .bg-mint
  {
    background-color: #19b698;
    color: #fff;
  }

  .text-muted
  {
    color: #939393
  }

  .text-xs
  {
    font-size: .8em
  }

  .media-left
  {
    display: block;
    float: left;
    vertical-align: top;
  }

  .media-body
  {
    display: block;
    overflow: hidden;
    vertical-align: top;
  }

  .image-circle
  {
    border-radius: 50%;
  }

  .text-bold
  {
    font-weight: 500
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
