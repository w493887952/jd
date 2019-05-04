<template>
    <div>
        <Header/>
        <Slider/>
        <Daily/>
        <In/>
        <More/>
        <Footer/>
        <Navbar/>

    </div>

</template>
<script>
import Header from "../../pages/pubilc/header"
import Footer from "../../pages/pubilc/footer"
import Navbar from "../../pages/pubilc/navbar"
import Slider from "./rslider"
import Daily from "./daily"
import In from "./in.vue"
import More from "./more"
export default {
    components: {
        Header,
        Footer,
        Navbar,
        Slider,
        Daily,
        In,
        More,
    }
}
</script>
<style>

</style>
