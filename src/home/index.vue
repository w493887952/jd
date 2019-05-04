<template>
  <div>
    <Header/>
    <Slider/>
    <Novice/>
    <Borrow/>
    <Money/>
    <Product/>
    <Life/>
    <Footer/>
    <Navbar/>
  <!-- https://m.jr.jd.com/spe/qyy/main/index.html -->
  </div>
</template>

<script>
import Header from "../pages/pubilc/header"
import Footer from "../pages/pubilc/footer"
import Navbar from "../pages/pubilc/navbar"
import Slider from "../home/hslider"
import Novice from "../home/novice"
import Product from "../home/product"
import Money from "../home/money"
import Life from "../home/life"
import Borrow from "../home/borrow"

export default {
  name: 'home',
  components: {
    Header,
    Slider,
    Novice,
    Product,
    Money,
    Life,
    Borrow,
    Footer,
    Navbar
  },
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
