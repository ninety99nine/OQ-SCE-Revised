<template>

    <div>

        <!-- Tabs -->
        <DefaultTabs v-if="tabs.length >= 2" v-model="selectedTab" :tabs="tabs" class="mb-8" color="blue"></DefaultTabs>

        <Transition name="fade" mode="out-in" appear>

            <div :key="selectedTab">

                <!-- General Event Settings -->
                <General v-if="selectedTab == 1" :form="form" :event="event" :mode="mode"></General>

                <!-- CRUD API -->
                <CrudApiEvent v-if="event.type == 'CRUD API'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></CrudApiEvent>

                <!-- SMS API -->
                <SmsApiEvent v-if="event.type == 'SMS API'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></SmsApiEvent>

                <!-- Airtime Billing API -->
                <AirtimeBillingApiEvent v-if="event.type == 'Airtime Billing API'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></AirtimeBillingApiEvent>

                <!-- Orange Money API -->
                <OrangeMoneyApiEvent v-if="event.type == 'Orange Money API'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></OrangeMoneyApiEvent>

                <!-- Validation -->
                <ValidationEvent v-if="event.type == 'Validation'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></ValidationEvent>

                <!-- Formatting -->
                <FormattingEvent v-if="event.type == 'Formatting'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></FormattingEvent>

                <!-- Set Property -->
                <SetPropertyEvent v-if="event.type == 'Set Property'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></SetPropertyEvent>

                <!-- Custom Code -->
                <CustomCodeEvent v-if="event.type == 'Custom Code'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></CustomCodeEvent>

                <!-- Auto Link -->
                <AutoLinkEvent v-if="event.type == 'Auto Link'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></AutoLinkEvent>

                <!-- Auto Reply -->
                <AutoReplyEvent v-if="event.type == 'Auto Reply'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></AutoReplyEvent>

                <!-- Revisit -->
                <RevisitEvent v-if="event.type == 'Revisit'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></RevisitEvent>

                <!-- Redirect -->
                <RedirectEvent v-if="event.type == 'Redirect'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></RedirectEvent>

                <!-- Notification -->
                <NotificationEvent v-if="event.type == 'Notification'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></NotificationEvent>

                <!-- Collection -->
                <CollectionEvent v-if="event.type == 'Event Collection'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></CollectionEvent>

                <!-- Database -->
                <DatabaseEvent v-if="event.type == 'Database'" :selectedTab="selectedTab" :updateTabs="updateTabs" :form="form"></DatabaseEvent>

            </div>

        </Transition>

    </div>

</template>

<script>

    import General from './General';
    import RevisitEvent from './EventTypes/Revisit';
    import RedirectEvent from './EventTypes/Redirect';
    import AutoLinkEvent from './EventTypes/AutoLink';
    import SmsApiEvent from './EventTypes/Apis/SmsApi';
    import AutoReplyEvent from './EventTypes/AutoReply';
    import CollectionEvent from './EventTypes/Collection';
    import CrudApiEvent from './EventTypes/Apis/CrudApi';
    import FormattingEvent from './EventTypes/Formatting';
    import ValidationEvent from './EventTypes/Validation';
    import CustomCodeEvent from './EventTypes/CustomCode';
    import DefaultTabs from '@components/Tabs/DefaultTabs';
    import SetPropertyEvent from './EventTypes/SetProperty';
    import NotificationEvent from './EventTypes/Notification';
    import OrangeMoneyApiEvent from './EventTypes/Apis/OrangeMoneyApi';
    import DatabaseEvent from './EventTypes/Database';
    import AirtimeBillingApiEvent from './EventTypes/Apis/AirtimeBillingApi';

    export default {
        props: ['form', 'event', 'mode'],
        components: {
            General, RevisitEvent, RedirectEvent, AutoLinkEvent, SmsApiEvent, AutoReplyEvent, CollectionEvent, CrudApiEvent,
            DefaultTabs, SetPropertyEvent, NotificationEvent, FormattingEvent, ValidationEvent, CustomCodeEvent,
            OrangeMoneyApiEvent, DatabaseEvent, AirtimeBillingApiEvent
        },
        data() {
            return {
                tabs: [],
                defaultTabs: [
                    {
                        label: 'General',
                        value: 1
                    }
                ],
                selectedTab: 1,
            }
        },
        methods: {
            updateTabs(tabs) {

                for (let index = 0; index < tabs.length; index++) {

                    //  Assign values to the tabs
                    tabs[index]['value'] = (index + this.defaultTabs.length + 1);

                }

                this.tabs = this.defaultTabs.concat(tabs);

            }
        }
    };

</script>
