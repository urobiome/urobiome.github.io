<template>
    <div>
        <b-nav tabs justified class="fixedMenu">
            <b-nav-item active><router-link to='/main'><i class="fi fi-sr-home"></i><i class="fi fi-rr-home"></i></router-link></b-nav-item>
            <b-nav-item><router-link to='/urobiome'><i class="fi fi-sr-fill"></i><i class="fi fi-rr-fill"></i></router-link></b-nav-item>
            <b-nav-item><router-link to='/mypage'><i class="fi fi-sr-user"></i><i class="fi fi-rr-user"></i></router-link></b-nav-item>
        </b-nav>
    </div>
</template>
<script>
export default {
    name: 'FixedMenu'
}

</script>