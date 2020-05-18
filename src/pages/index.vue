<template>
  <div>
    {{data}}
    <button @click="addData"></button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return { data: "456789" };
  },
  created() {
    fetch("http://localhost:3000/api/login")
      .then(response => response.json())
      .then(response => console.log("Success:", response));
  },
  methods: {
    addData() {
      this.data = "00000";
    }
  }
};
</script>
