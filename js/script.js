const {createApp} = Vue;

createApp({
  data() {
    return {
      emails: [],
      max: 10,
    };
  },
  methods: {
    getEmails(max) {
      for (let i = 0; i < max; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
          this.emails.push(resp.data.response);
          console.log(resp)
        });
      }
    },
  },
  created() {
    setTimeout(() => {
      this.getEmails(this.max);
    }, 1000);
    
  },
}).mount("#app");
