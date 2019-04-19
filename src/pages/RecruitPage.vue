<template>
  <div class="bg-theme" style="min-height: 100vh;">
    <!--Banner-->
    <div class="banner"></div>

    <!--Content-->
    <div class="content">
      <div v-if="expired" class="form">
        <div class="form-content">
          <h3 class="mb-4">Thank you ...</h3>
          <div class="mb-3">
            Thanks for your interest! But we're no longer recruiting participants.
          </div>
        </div>
      </div>
      <div v-else class="form">
        <div class="form-border"></div>

        <!--After submit-->
        <div v-if="submit" class="form-content">
          <h3 class="mb-4">Thank you!</h3>
          <p>
            Thanks for signing up.
            We will contact you soon if you are eligible.
          </p>
        </div>

        <!--Before submit-->
        <div v-else class="form-content">

          <h3 class="mb-4">Statistical Analysis Interview</h3>

          <p>
            Have you conducted experiments and performed hypothesis testing?
            Are you willing to share your data and analysis scripts with us?
            If so, we would like to invite you to participate in a study about understanding the process of data analysis.

            <br><br>
            In the study, we will ask you open-ended questions about the analysis decisions in one of your previous projects.
            If you have concerns about us inspecting your analysis scripts,
            please rest assured that our goal is not to find flaws and we will not publish anything without your consent.
            Instead, we seek to understand analysis processes better.

          </p>

          <div>
            <div class="mb-2"><b class="font-weight-bold">Requirement:</b> a publication involving statistical analysis</div>
            <div class="mb-2"><b class="font-weight-bold">Duration:</b> 60 to 90 minutes</div>
            <div class="mb-2"><b class="font-weight-bold">Method:</b> remote interview</div>
            <div><b class="font-weight-bold">Reward:</b> $20 Amazon gift card</div>
          </div>
          <br>

          <p>
            If you are interested, please provide your information below.
            We will contact you soon to set up a time if you are eligible.
            If you have any questions or concerns about the study,
            feel free to email Yang Liu (<a href="mailto:yliu0@cs.washington.edu">yliu0@cs.washington.edu</a>).
          </p>

          <hr>
          <div>

            <!--Form-->
            <b-form @submit="onSubmit">
              <b-form-group label="Email address:"
                            label-for="emailInput">
                <b-form-input id="emailInput"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>

              <b-form-group label="Name:"
                            label-for="nameInput">
                <b-form-input id="nameInput"
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Enter your name">
                </b-form-input>
              </b-form-group>

              <b-form-group label="Link to a publication involving statistical analysis:"
                            label-for="paperInput">
                <b-form-input id="paperInput"
                              type="text"
                              v-model="form.paper"
                              required
                              placeholder="Enter a URL to your paper">
                </b-form-input>
              </b-form-group>

              <!--Submit button-->
              <button type="submit" :disabled="submitting"
                      class="btn btn-theme mt-3">
                {{ submitting ? 'Submitting ... ' : 'Submit' }}
              </button>
              <span v-if="err" class="ml-3 text-danger">
                Unable to submit. Please try again later. If error persists, please contact us.
              </span>
            </b-form>

            <div class="mt-2" v-if="!showConsent">
              <small class="text-muted">
                By proceeding, you agree to the terms.
                <b-link @click="showConsent=true"> View</b-link>
              </small>
            </div>

          </div>

          <!--Disclaimer-->
          <div v-if="showConsent"
               class="text-muted mt-3" style="font-size: 0.8em;">
            By proceeding, you agree to the following terms.
            You must be over 18 in age to participate.
            Your participation is voluntary.
            All of the information will be confidential, only accessible by approved research collaborators.
            We will only use your contact information to contact you if your are eligible for the study.
            None of the personal information will be included in the study result.
            If you have any questions or concerns, please contact Yang Liu (yliu0@cs.washington.edu).
            If you would like to talk to someone separate from the research team about a concern or
            complaint about your rights as a possible research subject,
            please contact the University of Washington Institutional Review Board at (206) 543-0098.
            We cannot ensure the confidentiality of any information sent by email.
          </div>
        </div>
      </div>
    </div>

    <!--Footer-->
    <div class="footer text-center">
      <div class="text-muted">
        <small>Interactive Data Lab, University of Washington</small>
      </div>

      <div class="mt-3">
        <a href="http://idl.cs.washington.edu" target="_blank">
          <img class="img-logo" src="/build/images/idl-logo.png"/>
        </a>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "RecruitPage",
    data () {
      return {
        expired: true,
        showConsent: false,
        submit: false,
        submitting: false,
        err: false,
        form: {
          email: '',
          name: '',
          paper: ''
        }
      }
    },
    methods: {
      onSubmit (evt) {
        this.submitting = true
        this.err = false

        evt.preventDefault()
      }
    }
  }
</script>

<style scoped>
  .banner {
    background-image: url('/build/images/interview-banner.jpeg');
    background-size: cover;
    background-position: center;
    color: rgba(255, 255, 255, 1);
    height: 278px;
  }

  .content {
    margin: auto;
    width: 770px;
  }

  .form {
    margin-top: -100px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
    padding-bottom: 6px;
    margin-bottom: 32px;
    word-wrap: break-word;
  }

  .form-border {
    background-color: rgb(187, 129, 135);
    height: 8px;
  }

  .form-content {
    color: rgba(0,0,0,.87);
    padding: 34px;
    font-size: 16px;
    min-height: 100%;
  }

  .footer {
    height: 122px;
  }

  .img-logo {
    width: 50px;
  }

  @media (max-width: 800px) {
    .banner {
      height: 122px;
    }

    .content {
      width: 90%;
    }

    .form {
      margin-top: -50px;
    }
  }

  .btn-theme {
    color: #fff;
    font-weight: 700;
    background-color: rgb(187, 129, 135);
    border-color: rgb(187, 129, 135);
  }

  .btn-theme:hover {
    background-color: rgb(167, 109, 115);
    border-color: rgb(167, 109, 115);
  }

  .btn-theme:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 129, 135,.25);
  }

  .bg-theme {
    background-color: #f1eced;
  }
</style>