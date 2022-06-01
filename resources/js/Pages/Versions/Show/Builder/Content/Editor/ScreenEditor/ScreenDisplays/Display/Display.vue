<template>

    <div>

        <div class="flex items-end mb-6">

            <!-- Name -->
            <DefaultInput v-model="display.name" placeholder="Home" class="flex-1 mr-4"></DefaultInput>

            <!-- Color Picker -->
            <DefaultColorPicker v-model="display.hexColor"></DefaultColorPicker>

        </div>

        <DefaultTabs v-model="selectedTab" :tabs="tabs" class="mb-8" color="green"></DefaultTabs>

        <!--
            Since the display instruction is always the first component to show, let's use the v-show directive
            to allow the wrapping parent SlideUpDown component to calculate this component height to enable
            the smooth slide up and down transition. The rest of the components can use the v-if directive.
          -->

        <Transition name="fade" mode="out-in" :duration="250">
            <DisplayInstruction v-if="selectedTab == 1" :display="display"></DisplayInstruction>
            <DisplayAction v-else-if="selectedTab == 2" :display="display"></DisplayAction>
            <DisplayEvents v-else-if="selectedTab == 3" :display="display"></DisplayEvents>
            <DisplayPagination v-else-if="selectedTab == 4" :display="display"></DisplayPagination>
            <DisplayNavigation v-else-if="selectedTab == 5" :display="display"></DisplayNavigation>
        </Transition>
    </div>

</template>

<script>
    import DisplayAction from './DisplayAction';
    import DisplayEvents from './DisplayEvents';
    import DisplayNavigation from './DisplayNavigation';
    import DisplayPagination from './DisplayPagination';
    import DisplayInstruction from './DisplayInstruction';
    import DefaultTabs from '@components/Tabs/DefaultTabs';
    import DefaultInput from '@components/Input/DefaultInput';
    import { useVersionBuilder } from '@stores/VersionBuilder';
    import DefaultColorPicker from '@components/ColorPicker/DefaultColorPicker';

    export default {
        props: ['display'],
        components: { DisplayInstruction, DisplayAction, DisplayNavigation, DisplayEvents, DisplayPagination, DefaultTabs, DefaultInput, DefaultColorPicker },
        data(){
            return {
                useVersionBuilder: useVersionBuilder(),
                selectedTab: 1,
                tabs: [],
            }
        },
        watch: {
            totalDisplayEvents() {
                this.tabs = this.getTabs();
            },
            totalDisplayNavigations() {
                this.tabs = this.getTabs();
            },
        },
        computed: {
            totalDisplayEvents() {
                return this.display.content.events.on_enter.collection.length
                     + this.display.content.events.on_leave.collection.length
                     + this.display.content.events.on_response.collection.length;
            },
            totalDisplayNavigations() {
                return this.display.content.screen_repeat_navigation.forward_navigation.length
                     + this.display.content.screen_repeat_navigation.backward_navigation.length;
            }
        },
        methods: {
            getTabs() {

                return [
                    {
                        label: 'Instruction',
                        value: 1
                    },
                    {
                        label: 'Action',
                        value: 2
                    },
                    {
                        count: this.totalDisplayEvents,
                        label: 'Events',
                        value: 3
                    },
                    {
                        label: 'Pagination',
                        value: 4
                    },
                    {
                        count: this.totalDisplayNavigations,
                        label: 'Navigation',
                        value: 5
                    }
                ];
            }
        },
        created() {
            this.tabs = this.getTabs();
        }
    };

</script>
