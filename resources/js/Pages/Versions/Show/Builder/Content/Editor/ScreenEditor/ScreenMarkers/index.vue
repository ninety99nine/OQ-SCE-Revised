<template>

    <div class="p-4 rounded-lg bg-gray-50 shadow-md border">

        <div class="flex items-center justify-between border-b border-dotted pb-4 mb-4">

            <!-- Marker Search Bar -->
            <DefaultSearchBar v-model="searchTerm" placeholder="Search markers" />

            <!-- Add Marker Button & Modal -->
            <CreateOrUpdateMarkerModal v-if="markers.length" :markers="markers" mode="create"></CreateOrUpdateMarkerModal>

        </div>

        <!-- Markers -->
        <Markers v-model="markers" :searchTerm="searchTerm" class="mb-6"></Markers>

    </div>

</template>

<script>

import Markers from "./Markers";
import { useVersionBuilder } from "@stores/VersionBuilder";
import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";
import CreateOrUpdateMarkerModal from './CreateOrUpdate/CreateOrUpdateMarkerModal';

export default {
    props: ['display'],
    components: { Markers, DefaultSearchBar, CreateOrUpdateMarkerModal },
    data() {
        return {
            searchTerm: '',
            useVersionBuilder: useVersionBuilder()
        }
    },
    computed: {
        markers: {
            get() {
                return this.useVersionBuilder.selectedScreen.markers;
            },
            set(markers) {
                return this.useVersionBuilder.selectedScreen.markers = markers;
            }
        }
    }
}
</script>
