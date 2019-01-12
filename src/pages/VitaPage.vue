<template>
  <div class="d-flex justify-content-center bg-white">
    <div class="cv">
      <!--Name-->
      <div class="text-center">
        <div class="cv-title">
          <span class="cv-firstname">Yang</span>
          <span class="cv-lastname">Liu</span>
        </div>
        <div class="cv-subtitle">
          {{meta.homepage}} <span class="ml-2 mr-2">·</span> {{meta.email}}
        </div>
      </div>

      <!--Education-->
      <div>
        <section-header title="Education"></section-header>
        <div v-for="edu in education" class="mb-3" v-if="!edu.hide">
          <div class="d-flex justify-content-between">
            <div class="cv-heading">{{edu.name}}</div>
            <div class="cv-location">{{edu.location}}</div>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <span class="cv-role">{{edu.degree}}</span>
              <span v-if="edu.advisor">, Advisor: {{edu.advisor}}</span>
              <span v-if="edu.desc">, {{edu.desc}}</span>
              <span v-if="edu.gpa">, GPA: {{edu.gpa}}</span>
            </div>
            <div class="cv-time">{{getTime(edu)}}</div>
          </div>
        </div>
      </div>

      <!--Publication-->
      <div>
        <section-header title="Publications"></section-header>
        <div v-for="paper in papers" class="text-justify">
          <div v-html="getPaper(paper)" class="mb-3"></div>
        </div>
      </div>

      <!--Job-->
      <div>
        <section-header title="Employment"></section-header>
        <div v-for="w in work" class="text-justify">
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <div class="cv-heading">{{w.title}}</div>
              <div class="cv-location">{{w.location}}</div>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <div class="cv-role">{{w.role}}</div>
              <div class="cv-time">{{getTime(w)}}</div>
            </div>
            <ul class="cv-list">
              <li v-for="d in w.desc">{{d}}</li>
            </ul>
          </div>
        </div>
      </div>

      <!--Service-->
      <div>
        <section-header title="Service and Involvement"></section-header>
        <div v-for="s in service" class="mb-2 d-flex">
          <div class="cv-alt-time">{{s.time}}</div>
          <div class="w-100">
            <div><b>{{s.name}}</b></div>
            <div>{{s.desc}}</div>
          </div>
        </div>
      </div>

      <!--Teaching-->
      <div class="cv-alt">
        <section-header title="Teaching"></section-header>
        <div v-for="t in teaching" class="mb-2 d-flex">
          <div class="cv-alt-time">{{t.time}}</div>
          <div class="w-100">
            <b>{{t.course}}</b>, {{t.university}}, {{t.desc}}
          </div>
        </div>
      </div>

      <!--Awards-->
      <div class="cv-alt">
        <section-header title="Awards"></section-header>
        <div v-for="aw in awards" class="mb-2 d-flex">
          <div class="cv-alt-time">{{aw.time}}</div>
          <div class="w-100">
            <b>{{aw.name}}</b>, {{aw.desc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {meta, education, papers, work, awards, teaching, service} from '../cv'
  import SectionHeader from '../components/SectionHeader.vue'
  import moment from 'moment'
  import _ from 'lodash'

  export default {
    name: 'VitaPage',
    components: {
      SectionHeader
    },
    data () {
      return {
        meta: meta,
        education: education,
        papers: papers,
        work: work,
        service: service,
        awards: awards,
        teaching: teaching
      }
    },
    methods: {
      getTime (obj) {
        let fmt = 'MMM. YYYY'
        let start = moment(new Date(obj.start)).format(fmt)
        let end = obj.end ? moment(new Date(obj.end)).format(fmt) : 'Present'

        return `${start} - ${end}`
      },
      getPaper (p) {
        let author = p.author.split(',')
        author = _.map(author, (at) => {
          if (/Yang Liu/.test(at)) {
            return `<b>${at}</b>`
          }
          return at
        }).join(',')
        return `${author}, "${p.title}", <em>${p.venue}</em>, ${p.time}.`
      }
    }
  }
</script>

<style>
  .cv {
    background-color: #fff;
    width: 842px;
    padding-top: 60px;
    padding-bottom: 180px;
    font-weight: 200;
    font-size: 16px;
    color: #33383f;
  }

  .cv b {
    font-weight: 700;
  }

  .cv-alt {
    font-weight: 300;
  }

  .cv-title {
    font-size: 42px;
    color: #282828;
  }

  .cv-lastname {
    font-weight: 700;
  }
  .cv-firstname {
    font-weight: 100;
  }

  .cv-subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }

  .cv-heading {
    font-weight: 500;
    font-size: 18px;
  }

  .cv-location {
    font-size: 18px;
    font-style: italic;
  }

  .cv-time {
    font-style: italic;
    color: #757776;
    font-size: 14px;
  }

  .cv-role {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .cv-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .cv-list li {
    padding-left: 1.2em;
    text-indent: -1.2em;
  }

  .cv-list li::before {
    content: "• ";
    margin-right: .3em;
    color: #757776;
  }

  .cv-alt-time {
    font-weight: 300;
    width: 135px;
  }
</style>
