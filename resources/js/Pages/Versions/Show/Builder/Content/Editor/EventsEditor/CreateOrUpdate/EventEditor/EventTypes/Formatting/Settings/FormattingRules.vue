<template>

    <draggable
        :invertSwap="true"
        handle=".draggble-handle"
        ghost-class="bg-yellow-100"
        item-key="formatting-rules"
        v-model="filteredRules">
        <template #item="{element, index}">
            <FormattingRule :rules="modelValue" :rule="element" :index="index" :key="element.id"></FormattingRule>
        </template>
        <template #footer>
            <NoFormattingRules v-if="filteredRules.length == 0" :form="form"></NoFormattingRules>
        </template>
    </draggable>

</template>

<script>
    import draggable from 'vuedraggable'
    import FormattingRule from "./FormattingRule";
    import NoFormattingRules from './NoFormattingRules';

    export default {
        props: ['modelValue', 'form', 'searchTerm'],
        components: { draggable, FormattingRule, NoFormattingRules },
        computed: {
            filteredRules: {
                get() {

                    return this.modelValue.filter((formattingRule) => {

                        const matchesEventName = formattingRule.name.toLowerCase().includes(this.searchTerm.toLowerCase());

                        return (this.searchTerm == '' || matchesEventName);

                    })

                },
                set(minifiedEvents) {

                    //  Allow re-ordering when the search term filtering input is empty
                    if( this.searchTerm == '' ) {

                        const rules = minifiedEvents;

                        this.$emit('update:modelValue', rules);

                    }else{

                        this.$message({
                            message: 'You cannot reorder rules while searching',
                            type: 'warning'
                        });

                    }
                }
            }
        }
    };

</script>
