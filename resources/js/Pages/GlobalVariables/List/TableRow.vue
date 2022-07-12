<template>

    <tr @click="showGlobalVariable" class="group border-b cursor-pointer hover:bg-gray-50">

        <!-- Mobile Number -->
        <td v-if="headers.includes('Number')" scope="row" class="px-6 py-4 text-xs">
            <span>{{ globalVariable.account.mobile_number }}</span>
        </td>

        <!-- Metadata -->
        <td v-if="headers.includes('Metadata')" scope="row" :class="['px-6 py-4 text-xs', { 'whitespace-pre-wrap' : prettifyJson }]">
            <span>{{ globalVariable.metadata }}</span>
        </td>

        <!-- Created Date -->
        <td v-if="headers.includes('Created Date')" scope="row" class="px-6 py-4 text-xs text-gray-500 text-right">
            <span>{{ moment(globalVariable.created_at).fromNow() }}</span>
        </td>

    </tr>

</template>

<script>

    import moment from 'moment'

    export default {
        props: {
            headers: Array,
            prettifyJson: Boolean,
            globalVariable: Object,
        },
        data() {
            return {
                moment: moment,
            }
        },
        methods: {
            showGlobalVariable() {
                this.$inertia.get(route('global.variable.show', { project: this.route().params.project, app: this.route().params.app, version: this.global_variable.version_id, global_variable: this.globalVariable.id }));
            }
        }
    };

</script>
