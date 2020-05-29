<template>
    <div class="wrap">
        <img class="logo" alt="Taekyun logo" :src="logo" />
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import Todo from './views/Todo';

export default {
    name: 'App',
    data: () => ({
    //
    }),
    computed: {
        ...mapState(['logo'])
    },
    mounted() {
        console.log('this.$route>>', this.$route);
        console.log('this.$route>>', this.$route.params);
    }
};
</script>

<style lang="scss">
div,
p,
span,
h1,
h2,
ul,
li,
strong,
img,
em {
    padding: 0;
    margin: 0;
}
.wrap{
    text-align: center;
    padding: 2vw;
}
.logo {
    width: 15vw;
    vertical-align: bottom;
}
.link-menu{}

@mixin full-btns($color) {
    &:link,
    &:visited {
        position: relative;
        display: block;
        margin: 2vw auto 0;
        padding: 14px 15px;
        color: $color;
        border: 2px solid $color;
        font-size:14px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        letter-spacing: .08em;
        border-radius: 0;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
    }
    &:after {
        background: $color;
        opacity: .5;
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
}
.link-full, {
    &.primary {
        @include full-btns(#d2002d);
    }
    &.secondary {
        @include full-btns(#364dd2);
    }
    &.accent {
        @include full-btns(#00d251);
    }

}
.link-full:link:after,
.link-full:visited:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
}
.link-full:link:hover, .link-full:visited:hover {
    color: #FFF;
    text-shadow: none;
}
.link-full:link:hover:after, .link-full:visited:hover:after {
    height: 450%;
}

.link-full:hover:after {
    height: 140%;
    opacity: 1;
}
</style>
