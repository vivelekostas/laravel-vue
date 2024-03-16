<template lang="">
    <div>
        <h1>Person!!</h1>
    </div>
    <div>
        <create />
    </div>
    <div>
        <!-- в ref содержится ключ-ссылка для обращения из других компонентов,
            а в obj - передаваемый в дочерний компонент объект -->
        <index ref="index" :obj="obj" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Create from "./Create.vue";
import Index from "./Index.vue";

export default defineComponent({
    components: {
        Create,
        Index,
    },
    setup() {
        return {};
    },
    data() {
        return {
            
            // пример объекта передаваемого в дочерний компонент.
            obj: {
                color: 'green',
                number: 18,
                isPublished: true,
            },

            // пример массива объектов которые можно отобразить
            // в темплейте выше, если добавить теги таблицы.
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
            ]
        }
    },
});
</script>

<style lang="less"></style>
