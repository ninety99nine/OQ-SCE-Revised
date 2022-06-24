<template>

    <div>

        <div class="flex items-center justify-between mb-6">
            <h1 class="text-xl font-semibold text-gray-700 mb-2">Global Variables</h1>
            <div class="flex divide-x border rounded-md py-2 px-6">
                <div class="text-center text-xs m-auto">
                    <p class="mb-2 text-gray-400">Total</p>
                    <p :class="[(totalGlobalVariables == 0 ? 'text-gray-300' : 'text-blue-500')+' font-semibold text-lg']">{{ totalGlobalVariables }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-between mb-4">

            <DefaultSelect v-model="selectedVersion" :options="versionOptions" @change="refreshContent()" label="Filter by version" placeholder="Select version" class="w-40"></DefaultSelect>

            <DefaultSearchBar v-model="search" @onSearch="refreshContent" placeholder="Search global variables" />

        </div>

        <div class="flex justify-center bg-blue-50 p-2">

            <DefaultCheckbox v-model="prettifyJson" @onChange="$emit('update:prettifyJson', $event)" label="Prettify Metadata"></DefaultCheckbox>

        </div>

    </div>

</template>

<script>

    import axios from 'axios';
    import DefaultSelect from "@components/Select/DefaultSelect";
    import DefaultCheckbox from "@components/Checkbox/DefaultCheckbox";
    import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";

    export default {
        props: ['prettifyJson'],
        components: { DefaultSelect, DefaultCheckbox, DefaultSearchBar },
        data() {
            return {
                totalGlobalVariables: this.$page.props.statistics.totalGlobalVariables,

                selectedVersion: this.route().params.version,
                versionOptions: this.$page.props.versionOptions.map((option) => {
                    return {
                        label: option.number,
                        value: option.id
                    }
                }),

                search: this.route().params.search,
                refreshContentInterval: null
            }
        },
        methods: {
            refreshContent() {

                var url;

                if( route().current() === 'global.variables.show' ) {

                    url = route(route().current(), {
                        project: this.route().params.project,
                        app: this.route().params.app,
                        version: this.selectedVersion
                    });

                }else if( route().current() === 'account.global.variables.show' ) {

                    url = route(route().current(), {
                        project: this.route().params.project,
                        account: this.route().params.account,
                        app: this.route().params.app,
                        version: this.selectedVersion
                    });

                }

                const data = {
                    search: this.search
                 };

                axios.get(url, data).then((response) => {

                    this.$emit('response', response.data);

                }).catch((error) => {

                }).finally(() => {

                });

            },
            cleanUp() {
                clearInterval( this.refreshContentInterval );
                this.refreshContentInterval = null;
            }
        },
        created() {

            //  Keep refreshing this page content every 3 seconds
            this.refreshContentInterval = setInterval(function() {
                this.refreshContent();
            }.bind(this), 3000);

        },
        unmounted() {
            this.cleanUp()
        }
    };

</script>
