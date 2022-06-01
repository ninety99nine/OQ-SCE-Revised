<template>

    <div>

        <template v-if="screen">

            <div class="flex items-end mb-4">

                <div class="flex flex-1 items-center">

                    <DefaultInput v-model="screen.name" label="Screen Name" placeholder="Home" class="flex-1 mr-4"></DefaultInput>

                    <PastePropertiesModal v-if="hasScreenPropertiesToPaste" class="mt-6 mr-4"></PastePropertiesModal>

                </div>

                <DefaultDropdown :menus="menus">
                    <template #appendMenus>
                        <!-- Additional Menus-->
                        <CopyPropertiesModal></CopyPropertiesModal>
                    </template>
                </DefaultDropdown>
            </div>

            <DefaultTabs v-model="selectedTab" :tabs="tabs" class="mb-8"></DefaultTabs>

            <Transition name="fade" mode="out-in" :duration="250">

                <screenDisplays v-if="selectedTab == 1"></screenDisplays>
                <screenEvents v-else-if="selectedTab == 2"></screenEvents>
                <screenMarkers v-else-if="selectedTab == 3"></screenMarkers>
                <screenRepeat v-else-if="selectedTab == 4"></screenRepeat>

            </Transition>

        </template>

        <template v-else>

            <NoScreens></NoScreens>

        </template>

    </div>

</template>

<script>
    import NoScreens from './NoScreens';
    import ScreenEvents from './ScreenEvents';
    import ScreenRepeat from './ScreenRepeat';
    import screenMarkers from './ScreenMarkers';
    import ScreenDisplays from './ScreenDisplays';
    import DefaultTabs from '@components/Tabs/DefaultTabs';
    import DefaultInput from '@components/Input/DefaultInput';
    import { useVersionBuilder } from '@stores/VersionBuilder';
    import DefaultDropdown from '@components/Dropdown/DefaultDropdown';
    import CopyPropertiesModal from './CopyProperties/CopyPropertiesModal';
    import PastePropertiesModal from './PasteProperties/PastePropertiesModal';

    export default {
        components: { NoScreens, ScreenEvents, ScreenRepeat, screenMarkers, ScreenDisplays, DefaultTabs, DefaultInput, DefaultDropdown, CopyPropertiesModal, PastePropertiesModal },
        data(){
            return {
                useVersionBuilder: useVersionBuilder(),
                hasScreenPropertiesToPaste: false,
                menus: [
                    {
                        label: 'Copy ID',
                        onclick: () => {
                            //  Copy to clipboard
                            navigator.clipboard.writeText(this.screen.id).then(() => {
                                // Alert the user that the action took place.
                                this.$message({
                                    message: 'Copied the Screen ID',
                                    type: 'success'
                                });
                            });
                        }
                    },
                    {
                        label: 'Copy Name',
                        borders: ['b'],
                        onclick: () => {
                            //  Copy to clipboard
                            navigator.clipboard.writeText(this.screen.name).then(() => {
                                // Alert the user that the action took place.
                                this.$message({
                                    message: 'Copied the Screen Name',
                                    type: 'success'
                                });
                            });
                        }
                    }
                ],
                selectedTab: 1,
                tabs: []
            }
        },
        computed: {
            screen() {
                return this.useVersionBuilder.selectedScreen
            },
            totalScreenDisplays(){
                return this.useVersionBuilder.totalScreenDisplays;
            },
            totalScreenEvents(){
                return this.useVersionBuilder.totalScreenEvents;
            },
            totalScreenMarkers(){
                return this.useVersionBuilder.totalScreenMarkers;
            },
        },
        watch: {
            'screen.repeat.active.selected_type': {
                handler: function (after, before) {
                    this.tabs = this.getTabs();
                },
                deep: true
            },
            screen() {
                this.tabs = this.getTabs();
            },
            totalScreenDisplays() {
                this.tabs = this.getTabs();
            },
            totalScreenEvents() {
                this.tabs = this.getTabs();
            },
            totalScreenMarkers() {
                this.tabs = this.getTabs();
            },
        },
        methods: {
            getTabs() {

                if( this.screen == null ) return [];

                const repeatActiveState = this.screen.repeat.active.selected_type;

                return [
                    {
                        count: this.totalScreenDisplays,
                        label: 'Displays',
                        value: 1
                    },
                    {
                        count: this.totalScreenEvents,
                        label: 'Events',
                        value: 2
                    },
                    {
                        count: this.totalScreenMarkers,
                        label: 'Markers',
                        value: 3
                    },
                    {
                        label: 'Repeat ('+repeatActiveState+')',
                        value: 4
                    }
                ];
            }
        },
        created(){
            this.tabs = this.getTabs();
            this.hasScreenPropertiesToPaste = window.localStorage.getItem('screen_properties') !== null;
        }
    };

</script>
