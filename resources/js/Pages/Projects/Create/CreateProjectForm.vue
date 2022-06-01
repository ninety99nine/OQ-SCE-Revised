<template>
    <DefaultInput v-model="form.name" label="Name" placeholder="My Project" :disabled="form.processing" :error="form.errors.name" class="mb-6"></DefaultInput>
</template>

<script>
    import DefaultInput from "@components/Input/DefaultInput";
    import DefaultSwitch from "@components/Switch/DefaultSwitch.vue";
    import DefaultTextArea from "@components/TextArea/DefaultTextArea.vue";

    export default {
        components: { DefaultInput, DefaultSwitch, DefaultTextArea },
        props: ['form']
    }
</script>

<style>

</style>>
