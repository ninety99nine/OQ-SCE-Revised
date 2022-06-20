<template>

    <tr @click="showSession" class="group border-b cursor-pointer hover:bg-gray-50">

        <!-- Mobile Number -->
        <td scope="row" class="px-6 py-4 text-xs">
            <span>{{ session.mobile_number }}</span>
        </td>

        <!-- Origin -->
        <td scope="row" class="px-6 py-4 text-xs">
            <span :class="{ 'text-blue-500' : !session.test }">{{ session.origin }}</span>
        </td>

        <!-- Request Type Status -->
        <td scope="row" class="px-6 py-4 text-xs">
            <SuccessBadge v-if="session.request_type_status.name === 'Started'">{{ session.request_type_status.name }}</SuccessBadge>
            <PrimaryBadge v-if="session.request_type_status.name === 'Running'">{{ session.request_type_status.name }}</PrimaryBadge>
            <WarningBadge v-if="session.request_type_status.name === 'Timeout'">{{ session.request_type_status.name }}</WarningBadge>
            <DefaultBadge v-if="session.request_type_status.name === 'Ended'">{{ session.request_type_status.name }}</DefaultBadge>
        </td>

        <!-- Success Status -->
        <td scope="row" class=" px-6 py-4 text-xs">
            <div :class="['flex', (session.fatal_error ? 'text-red-500' : 'text-green-500')]">

                <!-- Error Status -->
                <el-popover v-if="session.fatal_error" placement="top" :width="300" trigger="hover">
                    <span class="text-xs text-red-500">{{ session.fatal_error_msg }}</span>

                    <template v-slot:reference>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{{ session.success_status.name }}</span>
                        </div>
                    </template>
                </el-popover>

                <!-- Success Status -->
                <template v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ session.success_status.name }}</span>
                </template>

            </div>
        </td>

        <!-- Replies -->
        <td scope="row" class="text-center px-6 py-4 text-xs">
            <span>{{ session.total_inputs_and_outputs }}</span>
        </td>

        <!-- Duration -->
        <td scope="row" class="px-6 py-4 text-xs">
            <span>{{ session.total_duration }}</span>
        </td>

        <!-- Created Date -->
        <td scope="row" class="px-6 py-4 text-xs text-gray-500">
            <span>{{ moment(session.created_at).fromNow() }}</span>
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
            session: Object
        },
        data() {
            return {
                moment: moment,
            }
        },
        methods: {
            showSession() {
                this.$inertia.get(route('session.show', { project: this.route().params.project, app: this.route().params.app, version: this.route().params.version, session: this.session.id }));
            }
        }
    };

</script>
