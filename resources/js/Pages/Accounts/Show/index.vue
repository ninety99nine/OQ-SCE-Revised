<template>

    <div class="pt-8 px-16 mt-4">

        <Head :title="appPayload.name + ' - Version ' + versionPayload.number" />

        <div class="grid grid-cols-12 gap-8">

            <div class="col-span-3">

                <!-- Back Button -->
                <BackButton>Accounts</BackButton>

                <!-- Account Details -->
                <AccountDetails />

            </div>

            <div class="col-span-9">

                <!-- Tabs -->
                <DefaultTabs v-model="selectedTab" :tabs="tabs" class="mb-4 mx-20" color="blue"></DefaultTabs>

                <div class="bg-white rounded-md shadow-md hover:shadow-lg p-8">

                    <!-- Tab Content -->
                    <AccountSessions v-if="selectedTab == 1" />
                    <AccountNotifications v-else-if="selectedTab == 2" />
                    <AccountGlobalVariables v-else-if="selectedTab == 3" />

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import BackButton from "./BackButton";
    import AccountDetails from "./Details";
    import AccountSessions from '@pages/Sessions/List';
    import { Head } from '@inertiajs/inertia-vue3';
    import AccountNotifications from "./Notifications";
    import AccountGlobalVariables from "./GlobalVariables";
    import DefaultTabs from '@components/Tabs/DefaultTabs';

    export default {
        props: {
            appPayload: Object,
            versionPayload: Object,
            accountPayload: Object,
        },
        components: { Head, BackButton, AccountDetails, AccountSessions, AccountNotifications, AccountGlobalVariables, DefaultTabs },
        data() {
            return {
                tabs: [
                    {
                        label: 'Sessions',
                        value: 1
                    },
                    {
                        label: 'Notifications',
                        value: 2
                    },
                    {
                        label: 'Global Variables',
                        value: 3
                    }
                ],
                selectedTab: 1,
                refreshContentInterval: null
            }
        }
    };

</script>
