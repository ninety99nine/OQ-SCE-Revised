<template>

    <CrudRequest v-if="selectedTab == 2" :form="form"></CrudRequest>
    <CrudQuery v-else-if="selectedTab == 3" :form="form"></CrudQuery>
    <CrudBody v-else-if="selectedTab == 4" :form="form"></CrudBody>
    <CrudHeaders v-else-if="selectedTab == 5" :form="form"></CrudHeaders>
    <CrudResponse v-else-if="selectedTab == 6" :form="form"></CrudResponse>

</template>

<script>

import CrudBody from './Body';
import CrudQuery from './Query';
import CrudHeaders from './Headers';
import CrudRequest from './Request';
import CrudResponse from './Response';

export default {
    props: ['form', 'selectedTab', 'updateTabs'],
    components: { CrudBody, CrudQuery, CrudHeaders, CrudRequest, CrudResponse },
    watch: {
        'form.event_data.headers': {
            handler: function (after, before) {

                this.updateTabs(this.getTabs());

            },
            deep: true
        },
        'form.event_data.query_params': {
            handler: function (after, before) {

                this.updateTabs(this.getTabs());

            },
            deep: true
        },
        'form.event_data.form_data.params': {
            handler: function (after, before) {

                this.updateTabs(this.getTabs());

            },
            deep: true
        }
    },
    methods: {
        getTabs() {
            return [
                {
                    label: 'Request'
                },
                {
                    label: 'Query',
                    count: this.form.event_data.query_params.length
                },
                {
                    label: 'Body',
                    count: this.form.event_data.form_data.params.length
                },
                {
                    label: 'Headers',
                    count: this.form.event_data.headers.length
                },
                {
                    label: 'Response'
                }
            ]
        }
    },
    created(){
        this.updateTabs(this.getTabs());
    }
}
</script>
