<template>

    <div>

        <div class="mb-6">
            <h1 class="text-xl font-semibold text-gray-700 mb-2">Apps</h1>
            <h2 class="text-sm text-gray-400">Select an app to build</h2>
        </div>

        <div class="flex items-center justify-between mb-12">

            <div>

                <!-- Grid View Button -->
                <component :is="view == 'grid' ? 'PrimaryButton' : 'DefaultButton'" class="rounded-r-none px-8" @click="changeView('grid')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Grid
                </component>

                <!-- Table View Button -->
                <component :is="view == 'table' ? 'PrimaryButton' : 'DefaultButton'" class="rounded-l-none px-8" @click="changeView('table')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    Table
                </component>

            </div>

            <DefaultSearchBar v-model="search" @onSearch="startSearch" placeholder="Search apps"/>

        </div>

    </div>

</template>

<script>

    import PrimaryButton from "@components/Button/PrimaryButton";
    import DefaultButton from "@components/Button/DefaultButton";
    import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";

    export default {
        props: ['view'],
        components: { PrimaryButton, DefaultButton, DefaultSearchBar },
        data() {
            return {
                search: this.route().params.search
            }
        },
        methods: {
            changeView(updatedView) {
                this.$emit('updateView', updatedView);
            },
            startSearch(search) {
                this.$inertia.get(route('project.show', { project: this.route().params.project }), { search: search }, {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true
                });
            }
        }
    };

</script>
