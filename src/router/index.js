import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
import Dictionary from '@/views/Dictionary.vue'
import MeasurementConverter from '@/views/MeasurementConverter.vue'
import RandomQuote from '@/views/RandomQuote.vue'
import CurrencyConverter from "@/views/CurrencyConverter.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/everythingtool',
        name: 'Home',
        component: Home
    },
    {
        path: '/measurementconverter',
        name: 'MeasurementConverter',
        component: MeasurementConverter
    },
    {
        path: '/dictionary',
        name: 'Dictionary',
        component: Dictionary
    },
    {
        path: '/randomquote',
        name: 'RandomQuote',
        component: RandomQuote
    },
    {
        path: '/currencyconverter',
        name: 'CurrencyConverter',
        component: CurrencyConverter
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: ()=>import("@/views/NotFound.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;