<template>
	<div>{{ stringRef }}</div>
	<button class="btn">提交</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const stringRef = ref('hello world')
console.log(import.meta.env.PUBLIC_POKEAPI)
</script>