<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link>
                        <router-link class="nav-link" to="/person">People</router-link>
                        <router-link class="nav-link" to="/some-page">Какая то страница</router-link>
                        <router-link class="nav-link" to="/about">О нас</router-link>
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
.header {
    width: 992px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
