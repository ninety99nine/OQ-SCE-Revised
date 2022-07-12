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

            <DefaultSearchBar v-model="search" @onSearch="refreshContent()" placeholder="Search sessions" />

        </div>

    </div>

</template>

<script>

    import axios from 'axios';
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

                origin: 'any',
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

                search: null,
                request: null,
                refreshContentInterval: null,

                appId: this.route().params.app,
                projectId: this.route().params.project,
                versionId: this.route().params.version,
            }
        },
        methods: {
            refreshContent(canCancel = true) {

                //  If we can't cancel the previous request that has not eneded, then deny refreshing of content
                if(canCancel == false && this.request) return;

                //  If we can cancel the previous
                if( canCancel == true ) {

                    //  If the request is cancellable, cancel the previous request
                    if(this.request) this.request.cancel();

                    //  Start loader
                    this.$emit('isLoading', true);

                }


                /**
                 *  Generate the axios cancel token to allow this request
                 *  to be cancelled if this action is required
                 *
                 *  Reference: https://stackoverflow.com/questions/50516438/cancel-previous-request-using-axios-with-vue-js
                 */
                const axiosSource = axios.CancelToken.source();
                this.request = { cancel: axiosSource.cancel };

                const config = {
                    cancelToken: axiosSource.token
                };

                const url = route('accounts.show', {
                    project: this.route().params.project,
                    version: this.route().params.version,
                    app: this.route().params.app,

                    //  Query params
                    origin: this.origin,
                    search: this.search,
                    page: this.route().params.page ?? 1
                });

                axios.get(url, config).then((response) => {

                    this.$emit('response', response.data);

                    //  Stop loader
                    this.$emit('isLoading', false);

                    //  Set the request to null to grant refreshing of content
                    this.request = null;

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
                this.refreshContent(false);
            }.bind(this), 3000);

        },
        unmounted() {
            this.cleanUp()
        }
    };

</script>
