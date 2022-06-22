<template>

    <tr @click="showAccount" class="group border-b cursor-pointer hover:bg-gray-50">

        <!-- Mobile Number -->
        <td scope="row" class="px-6 py-4 text-xs">
            <span>{{ account.mobile_number }}</span>
        </td>

        <!-- Origin -->
        <td scope="row" class="px-6 py-4 text-xs">
            <span :class="{ 'text-blue-500' : !account.test }">{{ account.origin }}</span>
        </td>

        <!-- Sessions -->
        <td scope="row" class="text-center px-6 py-4 text-xs">
            <span>{{ account.sessions_count }}</span>
        </td>

        <!-- Notifications -->
        <td scope="row" class="text-center px-6 py-4 text-xs">
            <span>{{ account.session_notifications_count }}</span>
        </td>

        <!-- Global Variables -->
        <td scope="row" class="text-center px-6 py-4 text-xs">
            <span>{{ account.global_variables_count }}</span>
        </td>

        <!-- Created Date -->
        <td scope="row" class="px-6 py-4 text-xs text-gray-500">
            <span>{{ moment(account.created_at).fromNow() }}</span>
        </td>

    </tr>

</template>

<script>

    import PrimaryBadge from '@components/Badges/PrimaryBadge';
    import DefaultBadge from '@components/Badges/DefaultBadge';
    import WarningBadge from '@components/Badges/WarningBadge';
    import SuccessBadge from '@components/Badges/SuccessBadge';
    import DangerBadge from '@components/Badges/DangerBadge';
    import moment from 'moment'

    export default {
        components: { PrimaryBadge, DefaultBadge, WarningBadge, SuccessBadge, DangerBadge },
        props: {
            account: Object
        },
        data() {
            return {
                moment: moment,
            }
        },
        methods: {
            showAccount() {
                this.$inertia.get(route('account.sessions.show', { project: this.route().params.project, app: this.route().params.app, version: this.route().params.version, account: this.account.id }));
            }
        }
    };

</script>
