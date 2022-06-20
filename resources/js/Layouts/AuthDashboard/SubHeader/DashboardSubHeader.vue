<template>

    <nav v-if="versionId" class="flex justify-between px-12 bg-blue-50 shadow-md border-t">

        <!-- Navigation Breadcrubs -->
        <ol class="inline-flex items-center">
            <li :class="[selectedBuilderMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Builder</span>
                </Link>
            </li>
            <li :class="[selectedSessionsMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('sessions.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Sessions</span>
                </Link>
            </li>
            <li :class="[selectedAccountsMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Accounts</span>
                </Link>
            </li>
            <li :class="[selectedNotificationsMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Notifications</span>
                </Link>
            </li>
            <li :class="[selectedDatabaseEntriesMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Database Entries</span>
                </Link>
            </li>
            <li :class="[selectedGlobalVariablesMenu ? 'border-blue-500' : 'border-transparent', 'border-b-2 hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500']">
                <Link :href="route('version.show', { project: projectId, app: appId, version: versionId })" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Global Variables</span>
                </Link>
            </li>
        </ol>

        <div class="flex items-center border-r border-l border-gray-200 px-4 mr-4">
            <span class="text-blue-500 font-bold text-md">
                {{ app.short_code.primary_code }}
            </span>
        </div>

    </nav>

</template>

<script>

    import { Link } from "@inertiajs/inertia-vue3";

    export default {
        components: { Link },
        data(){
            return {
                appId: this.route().params.app,
                projectId: this.route().params.project,
                versionId: this.route().params.version,

                project: this.$page.props.projectPayload,
                version: this.$page.props.versionPayload,
                app: this.$page.props.appPayload,

                selectedBuilderMenu: false,
                selectedSessionsMenu: false,
                selectedAccountsMenu: false,
                selectedNotificationsMenu: false,
                selectedGlobalVariablesMenu: false,
                selectedDatabaseEntriesMenu: false,
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

                this.setActiveMenus();
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
            setActiveMenus() {
                this.selectedBuilderMenu = this.checkIfSelectedBuilderMenu();
                this.selectedSessionsMenu = this.checkIfSelectedSessionsMenu();
                this.selectedAccountsMenu = this.checkIfSelectedAccountsMenu();
                this.selectedNotificationsMenu = this.checkIfSelectedNotificationsMenu();
                this.selectedGlobalVariablesMenu = this.checkIfSelectedGlobalVariablesMenu();
                this.selectedDatabaseEntriesMenu = this.checkIfSelectedDatabaseEntriesMenu();
            },
            checkIfSelectedBuilderMenu() {
                return route().current('version.show', { project: this.projectId, app: this.appId, version: this.versionId });
            },
            checkIfSelectedSessionsMenu() {
                return route().current('sessions.show', { project: this.projectId, app: this.appId, version: this.versionId });
            },
            checkIfSelectedAccountsMenu() {
                return false;
            },
            checkIfSelectedNotificationsMenu() {
                return false;
            },
            checkIfSelectedGlobalVariablesMenu() {
                return false;
            },
            checkIfSelectedDatabaseEntriesMenu() {
                return false;
            }
        },
        created() {
            this.setActiveMenus();
        }
    };

</script>
