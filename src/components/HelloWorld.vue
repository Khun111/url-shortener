<script setup>
import "../css/index.css";

defineProps({
  msg: String,
  name: String,
});


</script>

<template>
  <div style="padding: 2rem 5%;">
    <div class="flex-center">
      <img class="nav-img" src="/images/logo.svg" alt="logo" />
      <div
        :class="{ 'flex-center': true, show: !hidden, hide: hidden }"
      >
        <nav class="flex-center block first-nav" style="justify-content: start;">
          <h4>Features</h4>
          <h4>Pricing</h4>
          <h4>Resources</h4>
        </nav>
        <hr/>
        <nav class="flex-center block" style="justify-content: end;">
          <h4>Login</h4>
          <h4>Sign Up</h4>
        </nav>
      </div>
      <span @click="hidden = !hidden" class="material-symbols-sharp icon">menu</span>
    </div>
    <div class="hero">
        <aside class="first-hero-child" >
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </aside>
      <img src="/images/illustration-working.svg" alt="hero image" />
    </div>
  </div>

  <div class="stats-div">
  <div class="link-div">
    <div class="flex-center">
      <input
        type="text"
        id="url"
        v-model="url"
        style="width: 85%"
        placeholder="Shorten a link here..."
      />
      <label @click="getShortened()" for="url">Shorten It!</label>
    </div>
  </div>
    <header class="text-center" >
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </header>
    <div class="cards-con">
      <div class="card card-1">
      <div class="round"><img src="/images/icon-brand-recognition.svg" alt="brand recognition icon"/></div>
        <div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t mean a
            thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div class="line"></div>
      </div>

      <div class="card card-2">
      <div class="round"><img src="/images/icon-detailed-records.svg" alt="brand recognition icon"/></div>
        <div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="line"></div>
      </div>

      <div class="card card-3">
      <div class="round"><img src="/images/icon-fully-customizable.svg" alt="brand recognition icon"/></div>
        <div>
        <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="boost">
    <header class="text-center">
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </header>
  </div>  
    <footer class="cards-con block" style="gap: 1rem;">
      <h1>Shortly</h1>
      <div class="flex-start block" style="gap: 2rem;" >
        <aside>
          <h4>Features</h4>
          <div class="options">
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
        </aside>
        <aside>
          <h4>Resources</h4>
          <div class="options">
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
        </aside>
        <aside>
          <h4>Company</h4>
          <div class="options">
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </aside>
      </div>
      <div class="flex-start icon-div">
        <img src="/images/icon-facebook.svg" alt="facebook" />
        <img src="/images/icon-twitter.svg" alt="twitter" />
        <img src="/images/icon-pinterest.svg" alt="pinterest" />
        <img src="/images/icon-instagram.svg" alt="instagram" />
      </div>
      <div class="attribution">
      <text>Challenge by </text>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. <text>Coded by</text> <a href="#">Your Name Here</a>.
    </div>
     </footer>
     
     
</template>

<style scoped></style>
