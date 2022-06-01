<template>

    <draggable
        group="events"
        :invertSwap="true"
        item-key="event-menus"
        handle=".draggble-handle"
        ghost-class="bg-yellow-100"
        v-model="filteredEvents">
        <template #item="{element, index}">
            <EventMenu :events="modelValue" :event="element" :index="index" :key="element.id"></EventMenu>
        </template>
        <template #footer>
            <NoEvents v-if="filteredEvents.length == 0" :events="modelValue"></NoEvents>
        </template>
    </draggable>

</template>

<script>
    import NoEvents from './NoEvents';
    import draggable from 'vuedraggable'
    import EventMenu from "./EventMenu";
    import { useVersionBuilder } from '@stores/VersionBuilder';

    export default {
        props: ['modelValue', 'searchTerm'],
        components: { NoEvents, draggable, EventMenu },
        data() {
            return {
                useVersionBuilder: useVersionBuilder(),
            }
        },
        computed: {
            filteredEvents: {
                get() {

                    return this.modelValue.filter((event) => {

                        const matchesEventId = event.id.toLowerCase().includes(this.searchTerm.toLowerCase());
                        const matchesEventName = event.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                        const matchesEventType = event.type.toLowerCase().includes(this.searchTerm.toLowerCase());

                        return (this.searchTerm == '' || matchesEventId || matchesEventName || matchesEventType);

                    })

                },
                set(events) {

                    //  Allow re-ordering when the event filtering input is empty
                    if( this.searchTerm == '' ) {

                        this.$emit('update:modelValue', events);

                    }else{

                        this.$message({
                            message: 'You cannot reorder events while searching',
                            type: 'warning'
                        });

                    }
                }
            }
        }
    };

</script>
