<template>

    <div class="pt-8 px-16 mt-4">

        <Head :title="appPayload.name + ' - Version ' + versionPayload.number" />

        <div class="flex justify-between">

            <!-- Back Button -->
            <BackButton>Versions</BackButton>

        </div>

        <div class="p-8 bg-white rounded-md shadow-md hover:shadow-lg">

            <!-- App Header -->
            <Header />

            <div class="shadow-md">

                <table class="w-full text-sm text-left text-gray-500">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <!-- Table Header Columns Names -->
                            <th v-for="(header, index) in headers" :key="index" scope="col"
                                :class="['px-6 py-3',
                                    { 'whitespace-nowrap' : header == 'Created Date' },
                                    { 'text-center' : (['Sessions', 'Notifications', 'Global Variables'].includes(header)) }
                                ]">
                                <span>{{ header }}</span>
                            </th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>

                        <TableRow v-for="account in accountsPayload.data" :key="account.id" :account="account"></TableRow>

                    </tbody>

                </table>

                <div v-if="accountsPayload.data.length == false" class="flex items-center bg-gray-50 p-8">
                    <span class="text-gray-500 text-xs">No Accounts</span>
                </div>

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
    import DefaultPagination from "@components/Pagination/DefaultPagination";

    export default {
        props: {
            appPayload: Object,
            versionPayload: Object,
            accountsPayload: Object,
        },
        components: { Head, TableRow, Header, BackButton, DefaultPagination },
        data() {
            return {
                headers: ['Number', 'Origin', 'Sessions', 'Notifications', 'Global Variables', 'Created Date']
            }
        }
    };

</script>
