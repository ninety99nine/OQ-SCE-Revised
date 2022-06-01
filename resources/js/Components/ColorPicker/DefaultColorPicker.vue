<template>
    <el-color-picker ref="colorPicker" v-model="modelValue" @change="updateValue" :show-alpha="false" :predefine="predefineColors"></el-color-picker>
</template>

<script>

    import { useVersionBuilder } from "@stores/VersionBuilder";

    export default {
        props: {
            modelValue: String
        },
        data() {
            return {
                useVersionBuilder: useVersionBuilder(),
                predefineColors: []
            }
        },
        methods: {
            updateValue(value) {
                this.$emit('update:modelValue',value);
            }
        },
        created() {
            this.predefineColors = Object.values(this.useVersionBuilder.builder.color_scheme.event_colors);
        }
    }
</script>
