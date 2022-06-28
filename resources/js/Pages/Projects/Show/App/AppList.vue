<template>

    <tr @click="showApp" class="group border-b cursor-pointer hover:bg-gray-50">

        <!-- App -->
        <td scope="row" class="px-6 py-4 text-xs font-medium text-gray-900">
            <span class="block" :style="{ minWidth: '10em' }">{{ app.name }}</span>
        </td>

        <!-- Active Version -->
        <td scope="row" class="px-6 py-4 text-xs text-center">
            <span>{{ app.active_version.number }}</span>
        </td>

        <!-- Short Code -->
        <td scope="row" class="px-6 py-4 text-xs text-center">
            <span>{{ (app.short_code || {}).primary_code}}</span>
        </td>

        <!-- Description -->
        <td scope="row" class="px-6 py-4 text-xs text-gray-500">
            <div class="text-justify">
                <span class="text-xs text-gray-500 break-normal">{{ app.description }}</span>
            </div>
        </td>

        <!-- Action -->
        <td scope="row" class="p-4">

            <div class="flex justify-end opacity-0 group-hover:opacity-100">

                <!-- Delete App Modal -->
                <CreateOrUpdateAppModal :app="app" mode="Delete" :showButton="false" class="mr-2"></CreateOrUpdateAppModal>

                <!-- Update App Modal -->
                <CreateOrUpdateAppModal :app="app" mode="Update" :showButton="false"></CreateOrUpdateAppModal>

            </div>

        </td>

    </tr>

</template>

<script>

    import mixin from './mixin.vue';

    /**
     *  Everything is contained within the mixin file
     */
    export default {
        mixins: [ mixin ],
    };

</script>
