import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import SomePage from "../pages/SomePage.vue";
import Person from "../person/Person.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/some-page',
        component: SomePage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/person',
        component: Person,
    },
];

export default routes;
