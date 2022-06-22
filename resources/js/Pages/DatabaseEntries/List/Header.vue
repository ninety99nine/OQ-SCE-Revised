<template>

    <div>

        <div class="flex items-center justify-between mb-6">
            <h1 class="text-xl font-semibold text-gray-700 mb-2">Database Entries</h1>
            <div class="flex divide-x border rounded-md py-2 px-6">
                <div class="text-center text-xs m-auto">
                    <p class="mb-2 text-gray-400">Total</p>
                    <p :class="[(totalDatabaseEntries == 0 ? 'text-gray-300' : 'text-blue-500')+' font-semibold text-lg']">{{ totalDatabaseEntries }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-between mb-6">

            <DefaultSelect v-model="selectedVersion" :options="versionOptions" @change="refreshContent()" label="Filter by version" placeholder="Select version" class="w-40"></DefaultSelect>

            <DefaultSearchBar v-model="search" @onSearch="refreshContent" placeholder="Search database entries" />

        </div>

    </div>

</template>

<script>

    import DefaultSelect from "@components/Select/DefaultSelect";
    import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";

    export default {
        components: { DefaultSelect, DefaultSearchBar },
        data() {
            return {
                totalDatabaseEntries: this.$page.props.statistics.totalDatabaseEntries,

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

                if( route().current() === 'database.entries.show' ) {

                    url = route(route().current(), {
                        project: this.route().params.project,
                        app: this.route().params.app,
                        version: this.selectedVersion
                    });

                }else if( route().current() === 'account.database.entries.show' ) {

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

                const options = {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true
                };

                this.$inertia.get(url, data, options);

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
