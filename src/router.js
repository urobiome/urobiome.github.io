import Vue from "vue";
import VueRouter from "vue-router";
import MenuMain from "./views/MenuMain";
import MenuUro from "./views/MenuUro";
import MenuMypage from "./views/MenuMypage";
import RexLogin from "./views/RexLogin";
import PasswordFind from "./views/PasswordFind";
import SentEmail from "./views/SentEmail";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: RexLogin
    },
    {
      path: "/main",
      component: MenuMain
    },
    {
      path: "/urobiome",
      component: MenuUro
    },
    {
      path: "/mypage",
      component: MenuMypage
    },
    {
      path: "/password",
      component: PasswordFind
    },
    {
      path: "/sent",
      component: SentEmail
    }  
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
}
});

export default router;