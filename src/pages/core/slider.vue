<template>
    <div>
      <!-- swiper -->
      <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in items" :key="item.id">
            <router-link :to="{ name: item.href }">
              <img :src="item.src" alt="">
            </router-link>  
        </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
      </swiper>


    </div>
</template>
<script>

  export default {
        name: 'slider',
    props: {
        canme: {
            type: String,
            default: "",
        },

     items: {
            type: Array,
            default() {
                return []
            },
        },
         options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        

    },
  
  }
</script>

<style lang="css">
</style>
