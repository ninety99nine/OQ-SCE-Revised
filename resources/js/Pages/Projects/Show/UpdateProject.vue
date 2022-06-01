<template>

    <div class="p-5 bg-white rounded-t-md shadow-md hover:shadow-lg">

        <!-- Project name -->
        <h5 class="text-xl font-medium text-gray-900 border-b pb-5 mb-5">{{ form.name }}</h5>

        <div class="relative mb-5">

            <!-- Loading overlay -->
            <LoaderOverlay :show="form.processing" />

            <!-- Project form -->
            <CreateProjectForm :form="form" mode="Update" />

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
    import CreateProjectForm from './../Create/CreateProjectForm';
    import LoaderOverlay from "@components/Loader/LoaderOverlay";
    import PrimaryButton from "@components/Button/PrimaryButton";

    export default {
        components: { CreateProjectForm, LoaderOverlay, PrimaryButton },
        props: {
            projectPayload: Object
        },
        data() {
            return {
                form: useForm({
                    name: this.projectPayload.name,
                    online: this.projectPayload.online,
                    description: this.projectPayload.description,
                    offline_message: this.projectPayload.offline_message
                })
            }
        },
        methods: {
            saveChanges() {

                const self = this;

                //  Clear existing errors
                this.form.clearErrors();

                //  Attempt to update project
                this.form.put(route('project.update', { project: this.route().params.project }), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'Project updated successfully',
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

            }
        }
    };

</script>
