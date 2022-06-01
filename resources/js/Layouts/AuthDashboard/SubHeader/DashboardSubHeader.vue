<template>

    <nav v-if="versionId" class="flex justify-between px-12 bg-blue-50 shadow-md border-t">

        <!-- Navigation Breadcrubs -->
        <ol class="inline-flex items-center">
            <li class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link href="/" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Builder</span>
                </Link>
            </li>
            <li class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link href="/" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Sessions</span>
                </Link>
            </li>
            <li class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link href="/" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>User Accounts</span>
                </Link>
            </li>
            <li class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link href="/" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Notifications</span>
                </Link>
            </li>
            <li class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link href="/" class="inline-flex items-center text-sm pt-4 pb-4 pr-4 px-4 cursor-pointer">
                    <span>Global Variables</span>
                </Link>
            </li>
        </ol>

        <div class="flex items-center border-r border-l border-gray-200 px-4 mr-4">
            <span class="text-blue-500 font-bold text-md">*321*10#</span>
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
                app: this.$page.props.appPayload
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
    };

</script>
