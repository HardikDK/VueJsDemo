<template>
    <ul v-if="stack.length > 0" class="crumbs">
        <li v-for="item in stack" class="crumbs__item" :class="item.class">
            <router-link :to="{ name: item.name }" class="crumbs__link">
                {{ item.label }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name:    'Crumbs',
        data() {
            return { stack: [] }
        },
        mounted() {
            this.buildStack()
        },
        methods: {
            buildStack() {
                this.stack = []
                this.addPage(this.$router.currentRoute)
                this.stack = this.stack.reverse()
            },
            addPage(route, first) {
                this.stack.push({
                    name:  route.name,
                    label: route.meta?.breadcrumb?.label || route.name.replace('.', ' '),
                    class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                })
                if (route.meta.breadcrumb.parent) {
                    const parent = this.getRoute(route.meta.breadcrumb.parent)
                    this.addPage(parent, true)
                }
            },
            getRoute(name) {
                return this.$router.options.routes.find(route => route.name === name)
            }
        }
    }
</script>

<style scoped>
.crumbs {
    display:         flex;
    flex-direction:  row;
    list-style-type: none;
    margin:          1rem 0 2rem 0;
    padding:         0;
    flex-wrap:       wrap;
}

.crumbs__link {
    text-decoration: underline;
    text-transform: capitalize;
}

.crumbs__item--parent::after {
    content: '>';
}
</style>
