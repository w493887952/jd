<template>
    <div>
        <Header/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footer cname="mfooter"/>
        <navbar/>
    </div>
</template>
<script>
import Header from "../pubilc/header"
import Footer from "../pubilc/footer"
import Navbar from "../pubilc/navbar"
import Slider from "./mslider"
import Ada from "./ada"
import Money from "./money"
import Adb from "./adb"
import Finance from "./finance"
import Adc from "./adc"
export default {
    components: {
        Header,
        Footer,
        Navbar,
        Slider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc
       
    }
}
</script>
<style lang="scss">
  .mfooter{
      margin-top: 0!important;
      ul{
          li:first-child{
              display: none;
          }
      }
  }
</style>
