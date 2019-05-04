<template>
<div>
    <Header/>
    <Slider/>
    <Welfare/>
    <Service/>
    <Footer/>
    <Navbar/>
</div>
</template>
<script>
import Header from "../../pages/pubilc/header"
import Footer from "../../pages/pubilc/footer"
import Navbar from "../../pages/pubilc/navbar"
import Slider from "./islider"
import Welfare from "./welfare"
import Service from "./service"
export default {
    components: {
        Header,
        Footer,
        Navbar,
        Slider,
        Welfare,
        Service
    }
}
</script>
<style>

</style>
