<template>

    <draggable
        :invertSwap="true"
        item-key="markers"
        handle=".draggble-handle"
        ghost-class="bg-yellow-100"
        v-model="filteredMarkers">
        <template #item="{element, index}">
            <Marker :markers="modelValue" :marker="element" :index="index" :key="element.id"></Marker>
        </template>
        <template #footer>
            <NoMarkers v-if="filteredMarkers.length == 0" :markers="modelValue"></NoMarkers>
        </template>
    </draggable>

</template>

<script>
    import Marker from "./Marker";
    import NoMarkers from './NoMarkers';
    import draggable from 'vuedraggable'

    export default {
        props: ['modelValue', 'searchTerm'],
        components: { NoMarkers, draggable, Marker },
        data() {
            return {}
        },
        computed: {
            filteredMarkers: {
                get() {

                    return this.modelValue.filter((marker) => {

                        //  Check if the marker matches the search term
                        const matchesSearchTerm = marker.toLowerCase().includes(this.searchTerm);

                        return (this.searchTerm == '' || matchesSearchTerm);

                    })

                },
                set(markers) {

                    //  Allow re-ordering when the markers filtering input is empty
                    if( this.searchTerm == '' ) {

                        this.$emit('update:modelValue', markers);

                    }else{

                        this.$message({
                            message: 'You cannot reorder markers while searching',
                            type: 'warning'
                        });

                    }
                }
            }
        }
    };

</script>
