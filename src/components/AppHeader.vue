<script setup>

</script>

<template>
    <header>
        <div class="d-flex">
            <img id="header-logo" src="../assets/kepek/logo.png">
            <div class="d-flex flex-column" >
                <div class="up d-flex justify-content-around">
                        <div class=" d-flex align-items-start">
                            <font-awesome-icon :icon="['fas', 'phone']" class="p-3"/>
                            <p class="m-0 align-self-center">123456</p>
                            <font-awesome-icon :icon="['fas', 'envelope']" class="p-3"/>
                            <p class="m-0 align-self-center">email</p>
                        </div>
                        <div class="d-flex align-items-end">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="p-3"/>
                            <font-awesome-icon :icon="['fas', 'user']" class="p-3"/>
                            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="p-3"/>
                        </div>
                </div>
                <hr class="m-2">
                <div>
                    
                </div>
            </div>
        </div>
        
    </header>
    
</template>

<style scoped>

#header-logo{
    width: 110px;
    height: 76px;
    flex-shrink: 0;
}

header hr{
    width: 531px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: rgba(101, 101, 101, 0.65);
}

header .up{
    justify-content: space-between;
}

</style>