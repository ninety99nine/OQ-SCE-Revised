<template>

    <div>

        <div class="flex items-center justify-between mb-6">
            <h1 class="text-xl font-semibold text-gray-700 mb-2">Accounts</h1>
            <div class="flex divide-x border rounded-md py-2 px-6">
                <div class="text-center text-xs m-auto pr-6">
                    <p class="mb-2 text-gray-400">Total Accounts</p>
                    <p :class="[(totalAccounts == 0 ? 'text-gray-300' : 'text-blue-500')+' font-semibold text-lg']">{{ totalAccounts }}</p>
                </div>
                <div class="text-center text-xs m-auto px-6">
                    <p class="mb-2 text-gray-400">Mobile</p>
                    <p class="text-gray-300 font-semibold text-lg">{{ totalMobileAccounts }}</p>
                </div>
                <div class="text-center text-xs m-auto px-6">
                    <p class="mb-2 text-gray-400">Simulator</p>
                    <p class="text-gray-300 font-semibold text-lg">{{ totalSimulatorAccounts }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-between mb-6">

            <DefaultSelect v-model="origin" :options="originOptions" @change="refreshContent()" label="Filter by origin" placeholder="Select origin" class="w-60"></DefaultSelect>

            <DefaultSearchBar v-model="search" @onSearch="refreshContent" placeholder="Search sessions" />

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

                //  General stats
                totalAccounts: this.$page.props.statistics.totalAccounts,

                //  Origin stats
                totalMobileAccounts: this.$page.props.statistics.totalMobileAccounts,
                totalSimulatorAccounts: this.$page.props.statistics.totalSimulatorAccounts,

                origin: this.route().params.origin ?? 'any',
                originOptions: [
                    {
                        label: 'Any',
                        value: 'any'
                    },
                    {
                        label: 'Mobile',
                        value: 'mobile'
                    },
                    {
                        label: 'Simulator',
                        value: 'simulator'
                    }
                ],

                search: this.route().params.search,
                refreshContentInterval: null
            }
        },
        methods: {
            refreshContent() {

                const url = route('accounts.show', {
                    project: this.route().params.project,
                    version: this.route().params.version,
                    app: this.route().params.app,
                });

                const data = {
                    origin: this.origin,
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
