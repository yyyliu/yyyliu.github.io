<template>
  <div class="d-flex mt-3 mb-2">
    <div class="cv-header pr-2">{{title}}</div>
    <div class="cv-header-line w-100"></div>
  </div>
</template>

<script>
  export default {
    name: 'section-header',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .cv-header {
    font-weight: 500;
    font-size: 24px;
    color: #282828;
    white-space:nowrap;
  }

  .cv-header-line {
    margin-bottom: 7px;
    border-bottom: 2px solid #868887;
  }
</style>
