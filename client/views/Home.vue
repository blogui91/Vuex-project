<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>

    <user-list></user-list>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>
