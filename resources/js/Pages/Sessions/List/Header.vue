<template>

    <div>

        <div class="flex items-center justify-between mb-6">
            <h1 class="text-xl font-semibold text-gray-700 mb-2">Sessions</h1>
            <div class="flex divide-x border rounded-md py-2 px-6">
                <div class="text-center text-xs m-auto pr-6">
                    <p class="mb-2 text-gray-400">Total Sessions</p>
                    <p :class="[(totalSessions == 0 ? 'text-gray-300' : 'text-blue-500')+' font-semibold text-lg']">{{ totalSessions }}</p>
                </div>
                <div v-if="showingOnMainMenu" class="text-center text-xs m-auto px-6">
                    <p class="mb-2 text-gray-400">Mobile</p>
                    <p class="text-gray-300 font-semibold text-lg">{{ totalMobileSessions }}</p>
                </div>
                <div v-if="showingOnMainMenu" class="text-center text-xs m-auto px-6">
                    <p class="mb-2 text-gray-400">Simulator</p>
                    <p class="text-gray-300 font-semibold text-lg">{{ totalSimulatorSessions }}</p>
                </div>
                <div class="text-center text-xs m-auto px-6">
                    <p class="mb-2 text-gray-400">Fail</p>
                    <p :class="[(totalFailSessions == 0 ? 'text-gray-300' : 'text-red-500')+' font-semibold text-lg']">{{ totalFailSessions }}</p>
                </div>
                <div class="text-center text-xs m-auto pl-6">
                    <p class="mb-2 text-gray-400">Success</p>
                    <p :class="[(totalSuccessSessions == 0 ? 'text-gray-300' : 'text-green-500')+' font-semibold text-lg']">{{ totalSuccessSessions }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-between mb-6">

            <DefaultSelect v-model="selectedVersion" :options="versionOptions" @change="refreshContent()" label="Filter by version" placeholder="Select version" class="w-40"></DefaultSelect>

            <DefaultSelect v-if="showingOnMainMenu" v-model="origin" :options="originOptions" @change="refreshContent()" label="Filter by origin" placeholder="Select origin" class="w-40"></DefaultSelect>

            <DefaultSelect v-model="requestType" :options="requestTypeOptions" @change="refreshContent()" label="Filter by request" placeholder="Select request" class="w-40"></DefaultSelect>

            <DefaultSelect v-model="status" :options="statusOptions" @change="refreshContent()" label="Filter by status" placeholder="Select status" class="w-40"></DefaultSelect>

            <DefaultSearchBar v-model="search" @onSearch="refreshContent()" placeholder="Search sessions" />

        </div>

    </div>

</template>

<script>

    import axios from 'axios';
    import DefaultSelect from "@components/Select/DefaultSelect";
    import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";

    export default {
        props: ['showingOnMainMenu'],
        components: { DefaultSelect, DefaultSearchBar },
        data() {
            return {

                //  General stats
                totalSessions: this.$page.props.statistics.totalSessions,

                //  Status stats
                totalFailSessions: this.$page.props.statistics.totalFailSessions,
                totalSuccessSessions: this.$page.props.statistics.totalSuccessSessions,

                //  Origin stats
                totalMobileSessions: this.$page.props.statistics.totalMobileSessions,
                totalSimulatorSessions: this.$page.props.statistics.totalSimulatorSessions,

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

                requestType: 'any',
                requestTypeOptions: [
                    {
                        label: 'Any',
                        value: 'any'
                    },
                    {
                        label: 'Started',
                        value: '1'
                    },
                    {
                        label: 'Running',
                        value: '2'
                    },
                    {
                        label: 'Ended',
                        value: '3'
                    },
                    {
                        label: 'Timed Out',
                        value: '4'
                    }
                ],

                status: 'any',
                statusOptions: [
                    {
                        label: 'Any',
                        value: 'any'
                    },
                    {
                        label: 'Success',
                        value: 'success'
                    },
                    {
                        label: 'Fail',
                        value: 'fail'
                    }
                ],


                selectedVersion: this.route().params.version,
                versionOptions: this.$page.props.versionOptions.map((option) => {
                    return {
                        label: option.number,
                        value: option.id
                    }
                }),

                search: null,
                request: null,
                refreshContentInterval: null,
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

                var url;

                if( route().current() === 'sessions.show' ) {

                    url = route(route().current(), {
                        project: this.route().params.project,
                        app: this.route().params.app,
                        version: this.selectedVersion,

                        //  Query params
                        origin: this.origin,
                        status: this.status,
                        search: this.search,
                        requestType: this.requestType
                    });

                }else if( route().current() === 'account.sessions.show' ) {

                    url = route(route().current(), {
                        project: this.route().params.project,
                        account: this.route().params.account,
                        app: this.route().params.app,
                        version: this.selectedVersion,

                        //  Query params
                        origin: this.origin,
                        status: this.status,
                        search: this.search,
                        requestType: this.requestType
                    });

                }

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
