<template>

    <draggable
        :invertSwap="true"
        item-key="display-menus"
        handle=".draggble-handle"
        ghost-class="bg-yellow-100"
        v-model="filteredScreenDisplays">
        <template #item="{element, index}">
            <DisplayMenu :display="element" :index="index" :key="element.id" class="draggble-display"></DisplayMenu>
        </template>
        <template #footer>
            <NoDisplays v-if="filteredScreenDisplays.length == 0"></NoDisplays>
        </template>
    </draggable>

</template>

<script>
    import draggable from 'vuedraggable'
    import NoDisplays from './NoDisplays';
    import DisplayMenu from "./DisplayMenu";
    import { useVersionBuilder } from '@stores/VersionBuilder';

    export default {
        components: { draggable, NoDisplays, DisplayMenu },
        data() {
            return {
                useVersionBuilder: useVersionBuilder(),
            }
        },
        computed: {
            filteredScreenDisplays: {
                get() {
                    return this.useVersionBuilder.filteredScreenDisplays;
                },
                set(displays) {

                    //  Allow re-ordering when the display filtering input is empty
                    if( this.useVersionBuilder.filterDisplaySearch == '' ) {

                        this.useVersionBuilder.selectedScreen.displays = displays;

                    }else{

                        this.$message({
                            message: 'You cannot reorder displays while searching',
                            type: 'warning'
                        });

                    }
                }
            }
        }
    };

</script>
