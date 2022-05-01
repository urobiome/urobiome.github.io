<template>
    <div>
        <b-nav tabs justified class="fixedMenu">
            <b-nav-item active><router-link to='/main'><img class="fi fi-rr-home" src="../../../public/img/home-in.svg"><img class="fi fi-sr-home" src="../../../public/img/home-out.svg"></router-link></b-nav-item>
            <b-nav-item><router-link to='/urobiome'><img class="fi fi-rr-fill" src="../../../public/img/fill-in.svg"><img class="fi fi-sr-fill" src="../../../public/img/fill-out.svg"></router-link></b-nav-item>
            <b-nav-item><router-link to='/mypage'><img class="fi fi-rr-user" src="../../../public/img/user-in.svg"><img class="fi fi-sr-user" src="../../../public/img/user-out.svg"></router-link></b-nav-item>
        </b-nav>
    </div>
</template>
<script>
export default {
    name: 'FixedMenu'
}

</script>