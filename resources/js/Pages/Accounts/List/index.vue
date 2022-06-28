<template>

    <div class="py-12 px-16">

        <Head :title="appPayload.name + ' - Version ' + versionPayload.number" />

        <div class="flex justify-between">

            <!-- Back Button -->
            <BackButton>Versions</BackButton>

        </div>

        <div class="p-8 bg-white rounded-md shadow-md hover:shadow-lg">

            <!-- App Header -->
            <Header @response="accountsPayload = $event.accountsPayload" @isLoading="isLoading = $event" />

            <div class="shadow-md">

                <table class="w-full text-sm text-left text-gray-500">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <!-- Table Header Columns Names -->
                            <th v-for="(header, index) in headers" :key="index" scope="col"
                                :class="['px-6 py-3',
                                    { 'whitespace-nowrap' : header == 'Created Date' },
                                    { 'text-center' : (['Sessions', 'Notifications', 'Database Entries', 'Global Variables'].includes(header)) }
                                ]">
                                <span>{{ header }}</span>
                            </th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody class="relative">

                        <!-- Loading overlay -->
                        <LoaderOverlay :show="isLoading" />

                        <TableRow v-for="account in accountsPayload.data" :key="account.id" :account="account"></TableRow>

                        <tr v-if="accountsPayload.data.length == false">
                            <td colspan="6" class="bg-gray-50 p-8">
                                <span class="text-gray-500 text-xs">No Accounts</span>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <div class="flex justify-end mt-10">

                <!-- Pagination -->
                <DefaultPagination :pagination="accountsPayload" />

            </div>

        </div>

    </div>

</template>

<script>

    import Header from './Header';
    import TableRow from './TableRow';
    import BackButton from "./BackButton";
    import { Head } from '@inertiajs/inertia-vue3';
    import LoaderOverlay from "@components/Loader/LoaderOverlay";
    import DefaultPagination from "@components/Pagination/DefaultPagination";

    export default {
        props: {
            appPayload: Object,
            versionPayload: Object,
            accountsPayload: Object,
        },
        components: { Head, TableRow, Header, BackButton, LoaderOverlay, DefaultPagination },
        data() {
            return {
                response: null,
                isLoading: false,
                headers: ['Number', 'Origin', 'Sessions', 'Notifications', 'Database Entries', 'Global Variables', 'Created Date']
            }
        }
    };

</script>
