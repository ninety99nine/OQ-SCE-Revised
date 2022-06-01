<template>

    <div class="p-5 bg-white rounded-t-md shadow-md hover:shadow-lg">

        <!-- App name -->
        <h5 class="text-xl font-medium text-gray-900 border-b pb-5 mb-5">{{ form.name }}</h5>

        <div class="relative mb-5">

            <!-- Loading overlay -->
            <LoaderOverlay :show="form.processing" />

            <!-- App form -->
            <CreateOrUpdateAppForm :form="form" :versionOptions="versionOptions" mode="Update" />

        </div>

        <div class="flex justify-end">
            <PrimaryButton :disabled="form.processing" @click="saveChanges()">
                Save Changes
            </PrimaryButton>
        </div>

    </div>

</template>

<script>

    import { useForm } from '@inertiajs/inertia-vue3';
    import LoaderOverlay from "@components/Loader/LoaderOverlay";
    import CreateOrUpdateAppForm from './../Create/CreateOrUpdateAppForm';
    import PrimaryButton from "@components/Button/PrimaryButton";

    export default {
        components: { CreateOrUpdateAppForm, LoaderOverlay, PrimaryButton },
        props: {
            appPayload: Object,
            versionOptions: Array,
        },
        data() {
            return {
                form: useForm({
                    name: this.appPayload.name,
                    online: this.appPayload.online,
                    description: this.appPayload.description,
                    offline_message: this.appPayload.offline_message,
                    active_version_id: this.appPayload.active_version_id
                })
            }
        },
        methods: {
            saveChanges() {

                const self = this;

                //  Clear existing errors
                this.form.clearErrors();

                //  Attempt to update app
                this.form.put(route('app.update', { project: this.route().params.project, app: this.route().params.app }), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'App updated successfully',
                            type: 'success'
                        });
                    },
                    onError: (errors) => {
                        self.$message({
                            message: 'Sorry, we found some mistakes',
                            type: 'error'
                        });
                    },
                });

            },
        }
    };

</script>
