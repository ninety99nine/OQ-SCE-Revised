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

            <!-- Sign Out Button -->
            <DefaultButton @click="logout" :disabled="logoutForm.processing">
                <svg v-if="logoutForm.processing" role="status" class="inline w-4 h-4 text-blue-500 animate-spin mr-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                </svg>
                {{ logoutForm.processing ? 'Signing out': 'Sign Out' }}
            </DefaultButton>

        </div>

    </nav>

</template>

<script>

    import Logo from "@components/Logo/Logo";
    import { Link } from "@inertiajs/inertia-vue3";
    import { useForm } from '@inertiajs/inertia-vue3';
    import DefaultButton from "@components/Button/DefaultButton";
    import CreateProjectModal from "./../../../Pages/Projects/Create/CreateProjectModal";

    export default {
        components: { Link, Logo, useForm, DefaultButton, CreateProjectModal },
        data() {
            return {
                form: useForm({
                    name: '',
                    online: true,
                    description: '',
                    offline_message: 'This service is currently not available'
                }),
                logoutForm: useForm(),
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
            logout() {

                const self = this;

                //  Attempt to logout
                this.logoutForm.post(route('logout'), {
                    replace: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'Logged Out',
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
