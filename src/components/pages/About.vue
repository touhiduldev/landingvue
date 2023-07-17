<script setup>
const p = 'Who we are?'
const h2 = 'We are market leader'
const para = 'Market leader like business, is better with multiple partners.'
const data_p = 'When The Going Gets Tough, The Tough Get Download app.'
const rp = 'If Only Everything in Life was as Reliable as a Register yourself.'
const ep = 'I Scream, You Scream, We All Scream for Enjoy the app.'
const dp = 'We accept that flawlessness is exaggerated and frequently disillusions when the commerce objectives are what checks'
</script>

<template>
  <!-- ========== About Section ========== -->
  <section class="sp-t" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5 mx-auto text-center">
          <!-- Section Heading -->
          <div class="section-heading">
            <div class="sub-heading">
              <p>{{ p }}</p>
            </div>
            <div class="heading-title">
              <h2>{{ h2 }}</h2>
            </div>
            <div class="heading-description">
              <p>{{ para }}</p>
            </div>
          </div>
          <!-- Section Heading -->
        </div>
      </div>
      <!-- About Data Display -->
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-4 text-center">
          <div class="iconbox-primary">
            <div class="item-icon mb-4">
              <i class="las la-download"></i>
            </div>
            <div class="item-content">
              <h3>Download app</h3>
              <p>{{ data_p }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4 text-center">
          <div class="iconbox-primary">
            <div class="item-icon mb-4">
              <i class="las la-user-shield"></i>
            </div>
            <div class="item-content">
              <h3>Register yourself</h3>
              <p>{{ rp }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4 text-center">
          <div class="iconbox-primary">
            <div class="item-icon mb-4">
              <i class="las la-smile-beam"></i>
            </div>
            <div class="item-content">
              <h3>Enjoy the app</h3>
              <p>{{ ep }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- About Data Display -->
      <div class="row mt-5">
        <div class="col-md-12">
          <!-- CEO Message -->
          <div class="ceo-message-wrap p-5">
            <div class="row align-items-center">
              <div class="col-lg-5 mb-lg-0 mb-4">
                <div class="ceo-image">
                  <img src="../../assets/images/ceo.png" alt="Ceo Image">
                </div>
              </div>

              <div class="col-lg-7">
                <div class="ceo-message-content ms-lg-4">
                  <div class="ceo-message-text mb-4">
                    “{{ dp }}”
                  </div>
                  <div class="meta">
                    <div><strong>Bellal Dhar</strong></div>
                    <div>Ceo & Founder</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- CEO Message -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== About Section ========== -->
</template>

<style scoped>

</style>