<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="@/assets/kepek/logo.png" alt="logo" class="m-3">
            </div>
            <div class="d-flex flex-column">
                <div class="d-flex flex-row up">
                    <ul v-show="!mobile" class="navigation m-0 p-0 justify-content-start">
                        <li class="p-0 center"><font-awesome-icon :icon="['fas', 'phone']"/><a class="link p-2" href="tel:+36301234567">+36301234567</a></li>
                        <li class="p-0 center"><font-awesome-icon :icon="['fas', 'envelope']"/><a class="link p-2" href="mailto:info@info.hu">info@info.hu</a></li>
                    </ul>
                    <ul v-show="!mobile" class="navigation m-0 p-0 justify-content-end">
                        <li><font-awesome-icon :icon="['fas', 'magnifying-glass']" class="p-2"/></li>
                        <font-awesome-icon :icon="['fas', 'user']" class="p-1"/>
                        <li class="nav-item dropdown p-1 m-0">
                            <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu position-absolute dropdown-menu-right">
                                <li class="p-0"><a class="dropdown-item p-1" href="#" id="login">Bejelentkezés</a></li>
                                <li class="p-0"><a class="dropdown-item p-1" href="#" id="register">Regisztráció</a></li>
                                <li class="p-0"><a class="dropdown-item p-1" href="#" id="admin">Dolgozói felület</a></li>
                            </ul>
                        </li>
                        <li><font-awesome-icon :icon="['fas', 'cart-shopping']" class="p-3"/></li>
                        <li class="nav-item dropdown">
                            Nyelv
                            <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu">
                                <li class="p-0 d-inline-block"><a class="dropdown-item p-1" href="#" id="hu"><span class="fi fi-hu m-1"></span>HU</a></li>
                                <li class="p-0 d-inline-block"><a class="dropdown-item p-1" href="#" id="en"><span class="fi fi-gb m-1"></span>EN</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>                
                <ul v-show="!mobile" class="navigation border-top border-secondary p-0 down">
                    <li><router-link class="link" :to="{name: 'home'}">Kezdőlap</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Rólunk</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Galéria</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Termékek</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Kapcsolat</router-link></li>
                    <li><router-link class="link" :to="{name: 'advices'}">Tanácsok</router-link></li>
                </ul>
            </div>
                           
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"><font-awesome-icon :icon="['fas', 'bars']" class="p-3"/></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{name: 'home'}">Kezdőlap</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Rólunk</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Galéria</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Termékek</router-link></li>
                    <li><router-link class="link" :to="{name: 'home'}">Kapcsolat</router-link></li>
                    <li><router-link class="link" :to="{name: 'advices'}">Tanácsok</router-link></li>
                </ul>
            </transition> <!--animációhoz-->
        </nav>
    </header>
</template>

<script>
export default{
    name: "navigation",
    data(){
        return{
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
    },
    mounted(){
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;            
        },

        updateScroll(){
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50){
                this.scrolledNav =true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 930){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
        }
    }
};
</script>

<style lang="sass" scoped>

header
    z-index: 99
    width: 100%
    position: fixed
    top: 0
    transition: .5s ease all
    color: #656565

    nav
        position: relative
        display: flex
        flex-direction: row
        padding: 12px 0
        width: 90%
        margin: 0 auto
        @media(min-width: 1140px)
            max-width: 1140px
    
    ul, .link
        font-weight: 500
        color: #656565
        list-style: none
        text-decoration: none

    li
        text-transform: uppercase
        padding: 16px
        margin-left: 16px

    .up li
        text-transform: none
    .link
        font-size: 14px
        transition: .5s ease all
        padding-bottom: 4px
        &:hover
            color: #E4A0B7
            border-color: #E4A0B7

    .branding
        display: flex
        align-items: center

        img
            width: 110px
            transition: .5s ease all
        
    .navigation
        display: flex
        align-items: center
        flex: 1
        justify-content: center
    .icon
        display: flex
        alig-items: center
        position: absolute
        top: 0
        right: 24px
        height: 100%

        i
            cursor: pointer
            font-size: 24px
            transition: .8s ease all

    .dropdown-toggle
        color: #656565
    .dropdown-nav
        display: flex
        flex-direction: column
        position: fixed
        width: 100%
        max-width: 250px
        height: 100%
        background-color: #656565
        top: 0
        left: 0

        li
            margin-left: 0
            .link
                color: white
    
    .mobile-nav-enter-active,
    .mobile-nav-leave-active
        transition: 1s ease all

    .mobile-nav-enter-from,
    .mobile-nav-leave-to
        transform: translateX(-250px)

    .mobile-nav-enter-to
        transform: translateX(0)
        

.scrolled-nav
    background-color: #d3d3d3
    box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -0px rgba(0, 0, 0, 0.06)

    .navigation li
        padding: 0.5rem

    nav
        padding: 3px 0

        .branding
            img
                width: 90px
                box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -0px rgba(0, 0, 0, 0.06)


        

</style>