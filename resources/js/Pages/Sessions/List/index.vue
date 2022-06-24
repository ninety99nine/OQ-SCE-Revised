<template>

    <div :class="{ 'pt-8 px-16 mt-4' : showingOnMainMenu }">

        <template v-if="showingOnMainMenu">

            <Head :title="appPayload.name + ' - Version ' + versionPayload.number" />

            <div class="flex justify-between">

                <!-- Back Button -->
                <BackButton>Versions</BackButton>

            </div>

        </template>

        <div :class="{ 'p-8 bg-white rounded-md shadow-md hover:shadow-lg' : showingOnMainMenu }">

            <!-- App Header -->
            <Header :showingOnMainMenu="showingOnMainMenu" @response="sessionsPayload = $event.sessionsPayload" />

            <div class="shadow-md">

                <table class="w-full text-sm text-left text-gray-500">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <!-- Table Header Columns Names -->
                            <th v-for="(header, index) in headers" :key="index" scope="col"
                                :class="['px-6 py-3',
                                    { 'whitespace-nowrap text-right' : header == 'Created Date' },
                                    { 'text-center' : (header == 'Interactions') }
                                ]">
                                <span>{{ header }}</span>
                            </th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>

                        <TableRow v-for="session in sessionsPayload.data" :key="session.id" :session="session" :headers="headers"></TableRow>

                    </tbody>

                </table>

                <div v-if="sessionsPayload.data.length == false" class="flex items-center bg-gray-50 p-8">
                    <span class="text-gray-500 text-xs">No Sessions</span>
                </div>

            </div>

            <div class="flex justify-end mt-10">

                <!-- Pagination -->
                <DefaultPagination :pagination="sessionsPayload" />

            </div>

        </div>

    </div>

</template>

<script>

    import Header from './Header';
    import TableRow from './TableRow';
    import BackButton from "./BackButton";
    import { Head } from '@inertiajs/inertia-vue3';
    import DefaultPagination from "@components/Pagination/DefaultPagination";

    export default {
        components: { Head, TableRow, Header, BackButton, DefaultPagination },
        data() {
            return {
                headers: this.getHeaders(),
                appPayload: this.$page.props.appPayload,
                versionPayload: this.$page.props.versionPayload,
                sessionsPayload: this.$page.props.sessionsPayload,
                showingOnMainMenu: this.checkIfShowingOnMainMenu()
            }
        },
        watch:{
            /**
             *  Watch for changes on the page props
             */
            '$page.props': function (newUrl, oldUrl) {
                this.sessionsPayload = this.$page.props.sessionsPayload;
            }
        },
        methods: {
            getHeaders() {

                //  If the sessions are viewed from the account menu, then we need to show the following
                var headers = ['Request', 'Status', 'Interactions', 'Duration', 'Created Date'];

                if( this.checkIfShowingOnMainMenu() ) {

                    //  If the sessions are viewed from the sessions menu, then we need to add the following
                    headers.unshift('MSISDN', 'Origin');

                }

                return headers;

            },
            checkIfShowingOnMainMenu() {
                return route().current() === 'sessions.show';
            }
        }
    };

</script>
