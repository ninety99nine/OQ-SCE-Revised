<template>

    <div :class="[showingOptions ? 'h-44' : 'h-32 delay-200']" class="bg-white p-6 border rounded-md cursor-pointer shadow-sm hover:shadow-lg hover:bg-blue-50 active:shadow-xl active:bg-white transition-height duration-250 ease-in-out"
        @mouseenter="showOptions" @mouseleave="hideOptions" @click="showVersion">

        <div class="flex justify-between border-b border-dotted pb-4 mb-4">

            <h5 class="text-sm tracking-tight">
                <span class="text-gray-500 mr-2">version</span>
                <span class="text-gray-900 font-semibold text-xl">{{ version.number }}</span>
            </h5>

            <div class="flex ml-4">

                <!-- Total Features -->
                <span v-if="version.features.length" class="text-xs text-gray-400 mr-4">{{ version.features.length }} {{ version.features.length == 1 ? 'Feature' : 'Features' }}</span>

                <!-- Info Icon -->
                <InfoPopover v-if="version.description || version.features.length" :title="'Version ' + version.number">

                    <div class="space-y-4 border-t border-dashed pt-4 mt-4">

                        <template v-if="version.description">

                            <span class="text-xs text-gray-500 break-normal">{{ version.description }}</span>

                        </template>

                        <template v-if="version.features.length">

                            <p class="text-xs text-gray-700 font-semibold mb-2">Features</p>

                            <div class="space-y-2">
                                <div v-for="(feature, index) in version.features" :key="index" class="flex items-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="text-xs text-gray-500">{{ feature }}</span>

                                </div>
                            </div>

                        </template>

                    </div>

                </InfoPopover>

            </div>

        </div>

        <div v-if="version.updated_at" class="flex justify-between mb-4">
            <div class="flex items-center">
                <span class="text-gray-600 text-xs">{{ moment(version.updated_at).fromNow() }}</span>
                <span class="text-gray-500 text-xs ml-1 italic"> &#8212; Last update</span>
            </div>
            <el-tag v-if="appPayload.active_version_id === version.id" size="small" type="success">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Active Version</span>
                </div>
            </el-tag>
        </div>

        <Transition name="slide-fade">

            <div v-show="showingOptions" class="flex justify-end">

                <!-- Delete Version Modal -->
                <CreateOrUpdateVersionModal :version="version" mode="Delete" class="mr-2"></CreateOrUpdateVersionModal>

                <!-- Update Version Modal -->
                <CreateOrUpdateVersionModal :version="version" mode="Update"></CreateOrUpdateVersionModal>

            </div>

        </Transition>

    </div>

</template>

<script>

    import mixin from './mixin.vue';

    /**
     *  Everything is contained within the mixin file
     */
    export default {
        mixins: [ mixin ],
    };

</script>
