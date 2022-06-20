<template>
    <div>

        <label :for="uniqueId" class="inline-flex relative items-center cursor-pointer">

            <!-- Label -->
            <span v-if="label" class="text-xs font-medium text-gray-900 mr-2">{{ label }}</span>

            <div class="flex relative items-center cursor-pointer">

                <!-- Input -->
                <input :id="uniqueId" v-model="model" type="checkbox" class="sr-only" :disabled="disabled">

                <!-- Background -->
                <div :class="['w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg', { 'opacity-50': disabled }]"></div>

                <!-- Note -->
                <span v-if="note" class="text-xs text-gray-400 ml-2"> &#8212; {{ note }}</span>

                <!-- Info Text -->
                <InfoPopover v-if="info" :info="info" class="ml-2"></InfoPopover>

                <!-- Info Slot -->
                <InfoPopover v-else-if="$slots.info" class="ml-2">
                    <slot name="info"></slot>
                </InfoPopover>

                <!-- Slot Content -->
                <slot />

            </div>

        </label>

        <DefaultError :error="error" class="mt-2"></DefaultError>

    </div>
</template>

<script>

    import { uniqueId } from 'lodash';
    import DefaultError from './../Error/DefaultError';
    import InfoPopover from '@components/Popover/InfoPopover';

    export default {
        components: { DefaultError, InfoPopover },
        props: {
            modelValue: Boolean,
            label: String,
            info: String,
            note: String,
            size: {
                type: String,
                default: 'xs'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
                default: ''
            },
        },
        data(){
            return {
                uniqueId: uniqueId('switch-')
            }
        },
        computed: {
            model: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit('update:modelValue', value);

                },
            },
        },
    }
</script>
