<template>
<div>
  <h1>Test</h1>
  <ul>
    <li v-for="note in notes" :key="note.title">{{ note.title }}</li>
  </ul>
</div>
</template>

<script>
export default {
	head: {
		title: 'Testing'
	},
	computed: {
		notes() {
			console.log(this.$store.state.posts);
			return this.$store.state.posts;
		}
	}
};
</script>
