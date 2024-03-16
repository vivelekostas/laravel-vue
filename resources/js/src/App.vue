<template>
    <PrimaryHeader />
    <main class="main">
        <router-view />
        <h1>
            Salut, {{ username }} !
        </h1>
        <button @click="sayHello">Hello</button>
        <button @click="sayHi">Hi</button>
    </main>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryHeader from "./components/PrimaryHeader.vue";

export default defineComponent({
    components: {
        PrimaryHeader
    },
    setup() {
        return {
            username: 'Eugenie'
        };
    },
    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: 'Petit',
                    age: 30,
                    job: 'игрушка',
                },
                {
                    id: 2,
                    name: 'Alena',
                    age: 29,
                    job: 'репетитор',
                },
                {
                    id: 3,
                    name: 'Kote',
                    age: 35,
                    job: 'офицер Великой армии',
                },
                {
                    id: 4,
                    name: 'Mavlyan',
                    age: 36,
                    job: 'лось',
                },
                {
                    id: 5,
                    name: 'Lera',
                    age: 29,
                    job: 'artist',
                },
            ]
        }
    },

    // примеры методов компонента.
    methods: {
        sayHello() {
            console.log('Hello!');
        },
        sayHi() {
            console.log('Hi!');
        },
    },
    computed: {
        petitJob() {
            return this.name + ' работает игрушкой-веселушкой'
        },
        personAgeFromThirty() {
            return this.persons.filter(function (person) {
                return person.age >= 30;
            })
        }
    },
});
</script>

<style lang="less" scoped>
.main {
    width: 992px;
    margin: 0 auto;
}
</style>
