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
          {{meta.homepage}} <span class="ml-2 mr-2">·</span>
          {{meta.email}} <span class="ml-2 mr-2">·</span>
          {{meta.phone}}
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
              <span v-if="edu.advisor">, {{edu.advisor}}</span>
              <span v-if="edu.desc">, {{edu.desc}}</span>
              <div v-if="edu.thesis">Thesis: {{edu.thesis}}</div>
            </div>
            <div class="cv-time">{{getTime(edu)}}</div>
          </div>
        </div>
      </div>

      <!--Publication-->
      <div>
        <section-header title="Publications"></section-header>
        <!--referred-->
        <div class="cv-alt mb-2">Refereed Publications</div>
        <div v-for="paper in papers" class="text-justify">
          <div v-html="getPaper(paper)" class="mb-3"></div>
        </div>
        <!--under review-->
        <div v-if="papers_under_review.length > 0">
          <div class="cv-alt mb-2">Manuscripts Under Review</div>
          <div v-for="paper in papers_under_review" class="text-justify">
            <div v-html="getPaper(paper)" class="mb-3"></div>
          </div>
        </div>
        <!--preprint-->
        <div class="cv-alt mb-2">Preprints</div>
        <div v-for="paper in papers_preprint" class="text-justify">
          <div v-html="getPaper(paper)" class="mb-3"></div>
        </div>
      </div>

      <!--Job-->
      <div>
        <section-header title="Professional Experience"></section-header>
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

      <!--Teaching-->
      <div>
        <section-header title="Teaching"></section-header>
        <div v-for="sec in teaching" class="mb-3">
          <div class="cv-heading">{{sec.type}}</div>
          <div v-if="sec.desc">{{sec.desc}}</div>
          <ul v-if="sec.items" class="cv-list ml-3">
            <li v-for="item in sec.items" class="mt-1">
              {{item.title}}, {{item.time}}, {{item.location}}.
              <span v-if="item.detail">{{item.detail}}.</span>
            </li>
          </ul>
        </div>
      </div>

      <!--Service-->
      <div>
        <section-header title="Service and Involvement"></section-header>
        <div v-for="s in service" class="mb-2 d-flex">
          <div class="cv-alt-time">{{s.time}}</div>
          <div class="w-100">
            <div>
              <b>{{s.name}}</b><span v-if="s.location">, {{s.location}}</span>
            </div>
            <div v-if="s.desc"><div v-for="d in s.desc">{{d}}</div></div>
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
  import {meta, education, papers, work, awards, teaching, service,
    papers_preprint, papers_under_review} from '../cv'
  import SectionHeader from '../components/SectionHeader.vue'

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
        papers_preprint: papers_preprint,
        papers_under_review: papers_under_review,
        work: work,
        service: service,
        awards: awards,
        teaching: teaching
      }
    },
    methods: {
      getTime (obj) {
        let end = obj.end || 'Present'
        return `${obj.start} - ${end}`
      },
      getPaper (p) {
        let author = p.author.split(',')
        author = author.map((at) => {
          if (/Yang Liu/.test(at)) {
            return `<b>${at}</b>`
          }
          return at
        }).join(',')
        let s = `${author}. "${p.title}". <em>${p.venue}</em>, ${p.time}`
        s += p.status ? `, <i>${p.status}</i>.` : '.'
        s += p.accept_rate ? ` [${p.accept_rate}% Acceptance Rate]` : ''
        return s
      }
    }
  }
</script>

<style scoped>
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
