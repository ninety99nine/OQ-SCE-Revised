<template>

    <div class="pt-8 mt-4">

        <Head title="Projects" />

        <div class="flex items-center justify-between w-2/3 m-auto mb-12">
            <h1 class="text-xl font-semibold text-gray-700">Projects</h1>
            <DefaultSearchBar v-model="search" @onSearch="startSearch" placeholder="Search projects" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3 m-auto mb-6">

            <div v-for="project in projectsPayload.data" :key="project.id" @click="showProject(project)" class="bg-white p-6 rounded-md cursor-pointer shadow-sm hover:shadow-lg hover:bg-blue-50 active:shadow-xl active:bg-white">

                <div class="border-b border-dotted pb-4 mb-4">
                    <h5 class="text-sm font-semibold tracking-tight text-gray-600">{{ project.name }}</h5>
                </div>

                <div class="flex justify-between">
                    <div class="flex items-center">
                        <el-tag v-if="project.apps_count == 0" type="warning" size="small">No apps</el-tag>
                        <el-tag v-else size="small">{{ project.apps_count + (project.apps_count == 1 ? ' App' : ' Apps') }}</el-tag>
                    </div>

                    <div v-if="project.created_at" class="flex justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-400 text-xs mr-1 italic">Created &#8212; </span>
                            <span class="text-gray-500 text-xs">{{ moment(project.created_at).fromNow() }}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div v-if="projectsPayload.total == 0" class="w-1/4 m-auto bg-white rounded-sm border border-dashed border-gray-400 p-5">
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <div>
                    <p class="text-gray-800 text-md mb-1">No projects</p>
                    <p class="text-gray-600 text-xs mb-8">Get started by creating your first project</p>
                </div>
            </div>
            <div class="flex justify-end">

                <!-- Create App Modal -->
                <CreateProjectModal></CreateProjectModal>

            </div>
        </div>

        <div v-if="projectsPayload.total > 0" class="w-2/3 m-auto flex justify-end">
            <DefaultPagination :pagination="projectsPayload" />
        </div>

    </div>

</template>

<script>

import PrimaryButton from "@components/Button/PrimaryButton";
import DefaultPagination from "@components/Pagination/DefaultPagination";
import DefaultSearchBar from "@components/SearchBar/DefaultSearchBar";
import CreateProjectModal from "./../Create/CreateProjectModal";
import { Head } from '@inertiajs/inertia-vue3';
import moment from 'moment'

export default {
    props: {
        projectsPayload: Object
    },
    components: { Head, DefaultPagination, DefaultSearchBar, PrimaryButton, CreateProjectModal },
    data() {
        return {
            moment: moment,
            search: this.route().params.search
        }
    },
    methods: {
        showProject(project) {
            this.$inertia.get(route('project.show', { project: project.id }));
        },
        startSearch(search) {
            this.$inertia.get(route('projects.show'), { search: search }, {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
        }
    }
};

</script>
