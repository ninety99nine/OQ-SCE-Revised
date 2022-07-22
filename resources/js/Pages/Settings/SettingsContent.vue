<template>

    <div class="bg-white rounded-md shadow-md hover:shadow-lg p-8">

        <AccountSettings v-if="selectedSettings === 'settings.account'"></AccountSettings>
        <ServerCommandSettings v-if="selectedSettings === 'settings.server.commands'"></ServerCommandSettings>
        <ApplicationLogsSettings v-if="selectedSettings === 'settings.application.logs'"></ApplicationLogsSettings>

    </div>

</template>

<script>

    import AccountSettings from './AccountSettings';
    import ServerCommandSettings from './ServerCommandSettings';
    import ApplicationLogsSettings from './ApplicationLogsSettings';

    export default {
        components: { AccountSettings, ServerCommandSettings, ApplicationLogsSettings },
        data() {
            return {
                selectedSettings: this.getSelectedSettings()
            }
        },
        methods: {
            getSelectedSettings() {
                return route().current();
            }
        }
    };

</script>
