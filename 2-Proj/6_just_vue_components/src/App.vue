<template>
  <div>
      <strong>HI!!111</strong>
      <TestComp extData="Some marvelous text from Outside"/>
      <test-comp :extData="some"/>
      <vasya />
  </div>
</template>

<script>
import TestComp from './components/test.vue'

export default {
    components: { TestComp, 'vasya': TestComp },
    data() {
        return {
            some: '123456'
        }
    },
}
</script>

<style>

</style>