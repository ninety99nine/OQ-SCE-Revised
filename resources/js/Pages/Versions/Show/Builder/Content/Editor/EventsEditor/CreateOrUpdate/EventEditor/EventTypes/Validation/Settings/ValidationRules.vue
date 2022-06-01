<template>

    <draggable
        :invertSwap="true"
        handle=".draggble-handle"
        ghost-class="bg-yellow-100"
        item-key="validation-rules"
        v-model="filteredRules">
        <template #item="{element, index}">
            <ValidationRule :rules="modelValue" :rule="element" :index="index" :key="element.id"></ValidationRule>
        </template>
        <template #footer>
            <NoValidationRules v-if="filteredRules.length == 0" :form="form"></NoValidationRules>
        </template>
    </draggable>

</template>

<script>
    import draggable from 'vuedraggable'
    import ValidationRule from "./ValidationRule";
    import NoValidationRules from './NoValidationRules';

    export default {
        props: ['modelValue', 'form', 'searchTerm'],
        components: { draggable, ValidationRule, NoValidationRules },
        computed: {
            filteredRules: {
                get() {

                    return this.modelValue.filter((validationRule) => {

                        const matchesEventName = validationRule.name.toLowerCase().includes(this.searchTerm.toLowerCase());

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
