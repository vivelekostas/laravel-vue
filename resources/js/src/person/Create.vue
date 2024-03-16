<template lang="">
    <div class="row g-3">
        <div class="col-md-3">
            <!-- ф.v-model аналог атрибута name - сопоставляет ключ со значением -->
            <input type="text" class="form-control" id="name" v-model="name" placeholder="name">
        </div>
        <div class="col-md-3">
            <input type="number" class="form-control" id="age" v-model="age" placeholder="age">
        </div>
        <div class="col-md-3">
            <input type="text" class="form-control" id="job" v-model="job" placeholder="job">
        </div>
        <div class="col-md-3">
            <!--
                ф. события click указывает, что выполнить после нажатия кнопки, а её метод
                prevent отменяет все дефолтные нюансы от нажатия - удобно для отладки формы.
            -->
            <input type="button" @click="addPerson" class="btn btn-primary" value="Добавить">
        </div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {};
    },

    mounted() {
        //вызов сестринского метода
        this.$parent.$refs.index.getPeople()
    },

    // инициализируем поля формы, чтобы в них упали из данные из неё.
    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        addPerson() {
            axios
            .post('person', {
                name: this.name,
                age: this.age,
                job: this.job,
            })
            .then((res) => {
                // отчистить форму после использования.
                this.name = null
                this.age = null
                this.job = null
                // вызов сестринского метода.
                this.$parent.$refs.index.getPeople()

            })
        }
    },
});
</script>

<style lang="less"></style>