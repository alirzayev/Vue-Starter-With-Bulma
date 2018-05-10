<template>
    <div>
        <Header/>
        <div class="container">
            <router-view/>
        </div>
        <Footer/>
    </div>

</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
