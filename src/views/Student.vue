<template>
  <div class="show">
    <h1>Capstone Data</h1>
    
    <h2>Your Info</h2>
    <ul id="v-for-students" class="demo">
      <li v-for="value in students">
        {{ value }}
      </li>
    </ul>

    <!-- <div id="v-for-student" class="student">
      <p v-for="student in students">
       First name: {{ student.first_name }}
      </p>
    </div> -->
<!-- 
    <h2>Experience</h2>
    <div v-for="experience in experiences">
     {{ experience.start_date }}
    </div> -->



    


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      students: {
        first_name: "",
        // last_name: "Mack",
        // email: "mmack@gmail.com",
        // phone_number: "414-235-9075",
        // short_bio: "was dressed in black",
      },
      // experiences: {
      //   start_date: "1-20-1992",
      //   end_date: "12-06-2001",
      //   job_title: "CEO",
      //   company_name: "Actualize",
      //   details: "I ran stuff",
      //   user_id: "",
      // },
      // education: {},
      // skills: {},
      // capstone: {},
    };
  },
  created: function () {
    this.showCapstone();
  },
  methods: {
    showCapstone: function () {
      console.log("showing capstone...");
      axios.get("api/students/").then((response) => {
        console.log(response.data);
        this.students = response.data;
      });
    },
  },
};
</script>
