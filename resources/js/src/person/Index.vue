<template lang="">
    <div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Job</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- template позволяет перенести v-for выше, чтоб не сломать
                        вёрстку при добавлении колонки для кнопки редактирования -->
                    <template v-for="person in people">
                        <tr :class="isEdit(person.id) ? 'd-none' : ''">
                            <th scope="row">{{ person.id }}</th>
                            <td>{{ person.name }}</td>
                            <td>{{ person.age }}</td>
                            <td>{{ person.job }}</td>
                            <!-- передаём id а также прочие данные персоны в метод, который передаст его в data(),
                                при клике мышкой на edit для подстановки в форму редактирования -->
                            <td>
                                <a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Edit</a>
                            </td>
                            <td>
                                <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                        <!-- если есть редактируемый, то отображать форму редактирования
                            для него, а если нет, то закрывать. По дефолту для всех закрыто,
                            т.к editPersonId в data() - null и принимает id персоны только
                            при нажатии кнопки edit выше (click) -->
                        <tr :class="isEdit(person.id) ? '' : 'd-none'">
                            <th scope="row">{{ person.id }}</th>
                            <!-- ф.v-model аналог атрибута name - сопоставляет ключ со значением -->
                            <td><input type="text" v-model="name" class="form-control"></td>
                            <td><input type="number" v-model="age" class="form-control"></td>
                            <td><input type="text" v-model="job" class="form-control"></td>
                            <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <!-- пример импортвания данных из родительского объекта -->
        <div>Color: {{ obj.color }}</div>
        <div>Number: {{ obj.number > 10 ? 'more 10': 'less 10' }}</div>
        <div>isPublished: {{ obj.isPublished ? 'Published' : 'Not published'}}</div>
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    components: {

    },
    setup() {
        return {};
    },

    // дефолтная инициализация переменных, которые будут использоваться в
    // данном компоненте и динамически меняться в процессер работы с ними.
    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    // инициализация переменных приходящих из родительского компонента.
    props: [
        'obj'
    ],

    // зарезервированный метод, относящийся к жизненному циклу компонента,
    // который отработает, как только компонент будет собран.
    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios
                .get('person')
                .then((res) => {
                    this.people = res.data;
                })
        },

        updatePerson(id) {
            this.editPersonId = null;
            axios
                .patch(`person/${id}`, {
                    name: this.name,
                    age: this.age,
                    job: this.job,
                })
                .then((res) => {
                    // после отправки запроса на апдейт,
                    // запросить обновленные данные.
                    this.getPeople()
                })
        },

        deletePerson(id) {
            this.editPersonId = null;
            axios
                .delete(`person/${id}`)
                .then((res) => {
                    // после отправки запроса на апдейт,
                    // запросить обновленные данные.
                    this.getPeople()
                })
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id;
            this.name = name;
            this.age = age;
            this.job = job;
        },

        isEdit(id) {
            return this.editPersonId === id;
        }
    },
});
</script>

<style lang="less"></style>