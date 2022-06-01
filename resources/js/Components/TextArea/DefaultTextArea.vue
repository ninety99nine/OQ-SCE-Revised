<template>
    <div>
        <label v-if="label" :for="uniqueId" :class="'block mb-2 text-'+size+' font-medium text-gray-900'">{{ label }}</label>
        <textarea :id="uniqueId" :value="modelValue" @input="updateValue" :name="label" :rows="rows" :placeholder="placeholder" :disabled="disabled" :class="['bg-gray-50 border border-gray-300', ( disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900') ,'text-'+size+' rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5']"></textarea>
        <DefaultError :error="error" class="mt-2"></DefaultError>
    </div>
</template>

<script>

    import { uniqueId } from 'lodash';
    import DefaultError from './../Error/DefaultError';

    export default {
        components: { DefaultError },
        props: {
            modelValue: String,
            label: String,
            rows: {
                type: Number,
                default: 2
            },
            size: {
                type: String,
                default: 'xs'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: String,
            error: {
                type: String,
                default: ''
            },
        },
        data(){
            return {
                uniqueId: uniqueId('textarea-')
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>
