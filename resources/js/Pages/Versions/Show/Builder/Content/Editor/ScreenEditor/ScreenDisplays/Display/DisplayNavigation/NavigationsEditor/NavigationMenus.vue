<template>

    <draggable
        :invertSwap="true"
        handle=".draggble-handle"
        item-key="navigation-menus"
        ghost-class="bg-yellow-100"
        v-model="filteredNavigations">
        <template #item="{element, index}">
            <NavigationMenu :navigations="modelValue" :navigation="element" :index="index" :key="element.id"></NavigationMenu>
        </template>
        <template #footer>
            <NoNavigations v-if="filteredNavigations.length == 0" :navigations="modelValue"></NoNavigations>
        </template>
    </draggable>

</template>

<script>
    import draggable from 'vuedraggable'
    import NoNavigations from './NoNavigations';
    import NavigationMenu from "./NavigationMenu";
    import { useVersionBuilder } from '@stores/VersionBuilder';

    export default {
        props: ['modelValue', 'searchTerm'],
        components: { NoNavigations, draggable, NavigationMenu },
        data() {
            return {
                useVersionBuilder: useVersionBuilder(),
            }
        },
        computed: {
            filteredNavigations: {
                get() {

                    return this.modelValue.filter((navigation) => {

                        const matchesNavigationName = navigation.name.toLowerCase().includes(this.searchTerm.toLowerCase());

                        return (this.searchTerm == '' || matchesNavigationName);

                    })

                },
                set(navigations) {

                    //  Allow re-ordering when the navigation filtering input is empty
                    if( this.searchTerm == '' ) {

                        //  this.$emit('update', navigations);
                        this.$emit('update:modelValue', navigations);

                    }else{

                        this.$message({
                            message: 'You cannot reorder navigations while searching',
                            type: 'warning'
                        });

                    }
                }
            }
        }
    };

</script>
