<template>
    <v-app>
        <app-menu />
        <app-toolbar />

        <v-main>
            <app-carousel />
        </v-main>

        <app-footer />
    </v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'


export default {
    components: { 
        'app-footer': Footer,
        'app-carousel': Carousel,
        'app-toolbar': Toolbar,
        'app-menu': Menu
    }
    
}
</script>