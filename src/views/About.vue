<<<<<<< HEAD
<!-- <template>
  <div class="about">
    <h1>This is an about name</h1>
  </div>
</template> -->

<!-- About.vue -->
<template>
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-heading">About Us</h1>
      <p class="about-description">
        Welcome to our music app! Learn more about us and our mission.
      </p>

      <!-- Team Section -->
      <div v-if="teamMembers.length > 0" class="team-section">
        <h2 class="section-heading">Our Team</h2>
        <ul class="team-list">
          <li v-for="member in teamMembers" :key="member.id" class="team-member">
            {{ member.name }}
          </li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <h2 class="section-heading">Contact Us</h2>
        <p class="contact-description">
          Feel free to reach out to us for any inquiries or feedback:
        </p>
        <ul class="contact-list">
          <li>
            Email: <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
          </li>
          <li>Phone: {{ contactPhone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Example data - replace with your actual data
      teamMembers: [
        { id: 1, name: 'Ashraqt Tamer' },
        { id: 2, name: 'Fatma Alaa' },
        { id: 2, name: 'Mariem Tarek' }
        // Add more team members as needed
      ],
      contactEmail: 'info@example.com',
      contactPhone: '+123 456 7890'
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about-content {
  text-align: center;
  max-width: 600px;
  color: black; /* White text color */
}

.about-heading {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #746906;
}

.about-description {
  font-size: 1.2em;
}

.section-heading {
  font-size: 1.8em;
  margin-top: 30px;
  color: #746906;
}

.team-section,
.contact-section {
  margin-top: 20px;
}

.team-list,
.contact-list {
  list-style-type: none;
  padding: 0;
  color: black;
}

.team-member {
  margin: 10px 0;
  font-size: 1.1em;
}

.contact-description {
  font-size: 1.2em;
}

.contact-list li {
  margin: 10px 0;
  font-size: 1.1em;
}
</style>
=======
<!-- <template>
  <div class="about">
    <h1>This is an about name</h1>
  </div>
</template> -->

<!-- About.vue -->
<template>
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-heading">About Us</h1>
      <p class="about-description">
        Welcome to our music app! Learn more about us and our mission.
      </p>

      <!-- Team Section -->
      <div v-if="teamMembers.length > 0" class="team-section">
        <h2 class="section-heading">Our Team</h2>
        <ul class="team-list">
          <li v-for="member in teamMembers" :key="member.id" class="team-member">
            {{ member.name }}
          </li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <h2 class="section-heading">Contact Us</h2>
        <p class="contact-description">
          Feel free to reach out to us for any inquiries or feedback:
        </p>
        <ul class="contact-list">
          <li>
            Email: <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
          </li>
          <li>Phone: {{ contactPhone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Example data - replace with your actual data
      teamMembers: [
        { id: 1, name: 'Ashraqt Tamer' },
        { id: 2, name: 'Fatma Alaa' },
        { id: 2, name: 'Mariem Tarek' }
        // Add more team members as needed
      ],
      contactEmail: 'info@example.com',
      contactPhone: '+123 456 7890'
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about-content {
  text-align: center;
  max-width: 600px;
  color: black; /* White text color */
}

.about-heading {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #746906;
}

.about-description {
  font-size: 1.2em;
}

.section-heading {
  font-size: 1.8em;
  margin-top: 30px;
  color: #746906;
}

.team-section,
.contact-section {
  margin-top: 20px;
}

.team-list,
.contact-list {
  list-style-type: none;
  padding: 0;
  color: black;
}

.team-member {
  margin: 10px 0;
  font-size: 1.1em;
}

.contact-description {
  font-size: 1.2em;
}

.contact-list li {
  margin: 10px 0;
  font-size: 1.1em;
}
</style>
>>>>>>> e8b6db1 (Music App)
