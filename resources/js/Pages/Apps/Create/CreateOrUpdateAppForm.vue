<template>

    <!-- Delete -->
    <template v-if="mode == 'Delete'">

        <p class="text-sm text-gray-500 mb-5">Once you delete this app, there is no going back. Please be certain. Enter the delete code <span class="text-gray-800 font-bold">{{ app.delete_code }}</span> to confirm this action.</p>
        <DefaultInput v-model="form.delete_code" label="Reset code" placeholder="Enter the reset code" :disabled="form.processing || form.processing" :error="form.errors.delete_code" class="mb-6"></DefaultInput>

    </template>

    <!-- Create / Update -->
    <template v-else>
        <DefaultInput v-model="form.name" label="Name" placeholder="My App" :disabled="form.processing" :error="form.errors.name" class="mb-6"></DefaultInput>
        <DefaultTextArea v-model="form.description" label="Description" placeholder="This is a budget app" :disabled="form.processing" :error="form.errors.description" class="mb-6"></DefaultTextArea>
        <DefaultSwitch v-model="form.online" label="Online" :disabled="form.processing" :error="form.errors.online" class="mb-6">
            <span class="text-xs text-gray-400 ml-2"> &#8212; Your app is {{ form.online ? 'online' : 'offline' }}</span>
        </DefaultSwitch>
        <DefaultTextArea v-if="!form.online" v-model="form.offline_message" label="Offline Message" placeholder="This service is currently not available" :disabled="form.processing" :error="form.errors.offline_message" class="mb-4"></DefaultTextArea>
    </template>

    <!-- Create -->
    <template v-if="mode == 'Create'">

        <DefaultSelect v-model="form.shared_short_code" :options="sharedShortCodeOptions" label="Shared Short Code" placeholder="Select a shared shortcode" :disabled="form.processing" :error="form.errors.shared_short_code" class="mb-6"></DefaultSelect>

    </template>

    <!-- Update -->
    <template v-if="mode == 'Update'">

        <DefaultSelect v-model="form.active_version_id" :options="selectableVersionOptions" label="Active version" placeholder="Select a version" :disabled="form.processing" :error="form.errors.active_version_id" class="mb-6"></DefaultSelect>

    </template>

</template>

<script>
    import DefaultInput from "@components/Input/DefaultInput";
    import DefaultSelect from "@components/Select/DefaultSelect";
    import DefaultSwitch from "@components/Switch/DefaultSwitch.vue";
    import DefaultTextArea from "@components/TextArea/DefaultTextArea.vue";

    export default {
        components: { DefaultInput, DefaultSelect, DefaultSwitch, DefaultTextArea },
        props: {
            form: Object,
            mode: String,
            app: {
                type: Object,
                default: null
            },
            versionOptions: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            sharedShortCodes: {
                type: Array,
                default: () => {
                    return [];
                }
            },
        },
        computed: {
            sharedShortCodeOptions() {
                return this.sharedShortCodes.map((option) => {
                    return {
                        label: option.code,
                        value: option.code
                    }
                });
            },
            selectableVersionOptions() {
                let options = (this.app || {}).versions ? this.app.versions : this.versionOptions;

                return options.map((option) => {
                    return {
                        label: option.number,
                        value: option.id
                    }
                });
            }
        }
    }
</script>

