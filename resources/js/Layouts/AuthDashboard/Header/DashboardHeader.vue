<template>

    <nav  class="flex justify-between px-12 bg-white shadow-md" aria-label="Breadcrumb">

        <!-- Navigation Breadcrubs -->
        <ol class="inline-flex items-center">
            <li>
                <Link :href="route('projects.show')" class="block py-3 mx-6 cursor-pointer">
                    <Logo />
                </Link>
            </li>
            <li v-if="projectId" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500 inline-flex items-center">
                <Link :href="route('projects.show')" class="inline-flex items-center text-sm py-4 pr-4 px-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Projects</span>
                </Link>
            </li>
            <li v-if="projectId" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link :href="route('project.show', { project: projectId })" class="flex items-center text-sm py-4 pr-4 px-2 cursor-pointer">
                    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span>{{ project.name }}</span>
                </Link>
            </li>
            <li v-if="appId" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link :href="route('app.show', { project: projectId, app: appId })" class="flex items-center text-sm py-4 pr-4 px-2 cursor-pointer">
                    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span>{{ app.name }}</span>
                </Link>
            </li>
            <li v-if="versionId" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="flex items-center text-sm py-4 pr-4 px-2 cursor-pointer">
                    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Version {{ version.number }}</span>
                </Link>
            </li>
        </ol>

        <div class="flex items-center mt-1">

            <!-- Create App Modal -->
            <CreateProjectModal></CreateProjectModal>

            <!-- Profile Dropdown -->
            <ProfileDropdown class="ml-4"></ProfileDropdown>

        </div>

    </nav>

</template>

<script>

    import Logo from "@components/Logo/Logo";
    import { Link } from "@inertiajs/inertia-vue3";
    import ProfileDropdown from './ProfileDropdown';
    import { useForm } from '@inertiajs/inertia-vue3';
    import DefaultButton from "@components/Button/DefaultButton";
    import CreateProjectModal from "@pages/Projects/Create/CreateProjectModal";

    export default {
        components: { Link, Logo, useForm, DefaultButton, CreateProjectModal, ProfileDropdown },
        data() {
            return {
                form: useForm({
                    name: '',
                    online: true,
                    description: '',
                    offline_message: 'This service is currently not available'
                }),
                appId: this.route().params.app,
                projectId: this.route().params.project,
                versionId: this.route().params.version,
                project: this.$page.props.projectPayload,
                version: this.$page.props.versionPayload,
                app: this.$page.props.appPayload,
            }
        },
        watch:{
            /**
             *  Watch for changes on the page url
             */
            '$page.url': function (newUrl, oldUrl) {
                this.projectId = this.route().params.project;
                this.versionId = this.route().params.version;
                this.appId = this.route().params.app;

                this.project = this.$page.props.projectPayload;
                this.version = this.$page.props.versionPayload;
                this.app = this.$page.props.appPayload;
            },
            /**
             *  Watch for changes on the page props
             */
            '$page.props': function (newUrl, oldUrl) {
                this.project = this.$page.props.projectPayload;
                this.version = this.$page.props.versionPayload;
                this.app = this.$page.props.appPayload;
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
