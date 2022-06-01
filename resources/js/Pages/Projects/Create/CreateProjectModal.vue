<template>

    <!-- Create Project Modal -->
    <DefaultModal
        @close="$emit('close')"
        :isLoading="form.processing"
        defaultText="Cancel" primaryText="Create Project"
        :primaryAction="createApp" :defaultAction="cancelCreateApp">

        <!-- Create Project Title (Modal Title) -->
        <template v-slot:title>Create Project</template>

        <!-- Create Project Content (Modal Content) -->
        <CreateProjectForm :form="form" />

        <!-- Create Project Button (Modal Trigger) -->
        <template v-slot:trigger>
            <PrimaryButton :disabled="form.processing" class="mr-4" name="trigger">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Create Project
            </PrimaryButton>
        </template>

    </DefaultModal>

</template>

<script>

    import { useForm } from '@inertiajs/inertia-vue3'
    import CreateProjectForm from './CreateProjectForm';
    import DefaultModal from "@components/Modal/DefaultModal";
    import PrimaryButton from "@components/Button/PrimaryButton.vue";

    export default {
        components: { useForm, CreateProjectForm, DefaultModal, PrimaryButton },
        data() {
            return {
                form: useForm({
                    name: ''
                })
            }
        },
        methods: {
            createApp(closeModal) {

                const self = this;

                //  Clear existing errors
                this.form.clearErrors();

                //  Attempt to create project
                this.form.post(route('projects.create'), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'Project created successfully',
                            type: 'success'
                        });
                        self.form.reset();
                        closeModal();
                    },
                    onError: (errors) => {
                        self.$message({
                            message: 'Sorry, we found some mistakes',
                            type: 'error'
                        });
                    },
                });

            },
            cancelCreateApp() {

                //  Clear existing errors
                this.form.clearErrors();

                //  Reset the form
                this.form.reset();

            }
        }
    };

</script>
