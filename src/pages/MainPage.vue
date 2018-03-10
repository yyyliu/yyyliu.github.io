<template>
  <div>
    <!-- Header -->
    <div class="simple-header bg-mint">
      <div class="center-block content-width">
        <div class="pl-3 pr-3">
          <span>Yang Liu</span>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="center-block content-width text-left">
      <div class="pl-3 pr-3">
        <div class="mt-5"></div>

        <div>
          <!--Image-->
          <div class="media-left pr-3">
            <img src="/build/images/me.png"
                 alt="This is me"
                 style="height: 200px"
                 class="image-circle"/>
          </div>
          <!--Short Bio-->
          <div class="media-body div-bio">
            <p v-for="block in bio" class="text-justify">
              <span v-for="part in block">
                <span v-if="!part.url">{{part.text}}</span>
                <a v-if="part.url"
                   target="_blank"
                   class="link-primary"
                   :href="part.url">{{part.text}}</a>
              </span>
            </p>

            <!--Email-->
            <p class="mt-3">
            <span class="mr-3">
              <i class="fa fa-fw fa-envelope-o"></i>
            </span>
              <span class="mr-3 text-bold">Email</span>
              <a href="mailto:yliu0@cs.washington.edu" class="link-primary">
                yliu0@cs.washington.edu
              </a>
            </p>

            <!--Resume-->
            <p>
            <span class="mr-3">
              <i class="fa fa-fw fa-download"></i>
            </span>
              <span class="mr-3 text-bold">Resume</span>
              <a href="/build/misc/resume_LiuYang.pdf" class="link-primary" target="_blank">
                download
              </a>
            </p>
          </div>
        </div>

        <!--Project-->
        <div class="mt-5"></div>
        <div class="yyy-card" v-for="p in projects">
          <a :href="p.url" target="_blank" v-if="p.image">
            <img :src="p.image" :alt="p.title" class="image-responsive"/>
          </a>
          <div v-if="p.embed" class="embed-responsive embed-responsive-narrow">
            <iframe :src="p.embed" style="border:none;width:100%;"></iframe>
          </div>
          <h3 class="mt-5">{{p.title}}</h3>
          <div class="mt-3"></div>
          <p v-for="d in p.descriptions" class="text-justify">
            {{d}}
          </p>
          <div class="mt-3">
            <a v-for="b in p.buttons"
               class="btn btn-default btn-labeled btn-sm fa mr-3"
               :class="b.icon"
               :href="b.link"
               target="_blank">{{b.name}}</a>
            <small v-if="p.ps" class="ml-3 text-muted text-xs">
              {{p.ps}}
            </small>
          </div>
        </div>

        <!--Footer-->
        <div class="mt-5"></div>
        <hr>
        <div class="m-3 text-center text-muted text-xs">
          Copyright © 2018. All rights reserved.
        </div>
        <div class="mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {projects, bio} from '../data'
  export default {
    name: 'MainPage',
    data() {
      return {
        projects: projects,
        bio: bio
      }
    }
  }
</script>

<style>
  a.link-primary
  {
    color: #107360;
  }

  .simple-header
  {
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);
    padding:10px;
    font-family: bernadette, LatoLatin, 'Helvetica Neue',Helvetica,Arial,sans-serif;
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
    padding-top: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
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

  .btn
  {
    border-radius: 2px;
    border: 1px solid transparent;
    vertical-align: middle;
    transition: all .15s;
  }

  .btn-default
  {
    background-color: #fff;
    border-color: #c3cedb;
    color: #404040;
  }

  .btn-default:hover
  {
    background-color: #e6e6e6;
    color: #1a1a1a;
    border-color: #c8d2de;
  }

  .btn-labeled
  {
    font-family: inherit;
    font-size: 12px;
    padding: 1px 5px;
    overflow: hidden;
  }

  .btn-labeled::before
  {
    margin-left: -5px;
    margin-right: 1px;
    padding: 1px 5px;
    background-color: rgba(0, 0, 0, .05);
    color: inherit;
    font-family: fontAwesome;
    display: inline-block;
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
</style>
