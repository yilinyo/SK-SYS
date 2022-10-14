import VueRouter from "vue-router";
import mainstore from '../pages/mainstore'
import shoppingCart from '../pages/shoppingCart'
const router= new VueRouter({
routes:[
        {path:'*',redirect:"/pages/mainstore"}
        ,
        {
        name:"mainstore",
        path:"/pages/mainstore",
        component:mainstore,
        },
        {
            name:"shoppingCart",
            path:"/pages/shoppingCart",
            component:shoppingCart
        }
    ]
})

export default router;