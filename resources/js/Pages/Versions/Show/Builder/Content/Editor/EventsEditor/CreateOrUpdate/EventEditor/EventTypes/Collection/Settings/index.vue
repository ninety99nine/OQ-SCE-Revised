<template>

    <div>

        <!-- Explainer -->
        <PrimaryAlert class="mb-6">Manage a collection of related events</PrimaryAlert>

        <!-- Events Editor -->
        <EventsEditor :events="form.event_data.events"></EventsEditor>

        <!-- Error -->
        <DefaultError :error="form.errors.events" class="mt-2"></DefaultError>

    </div>

</template>

<script>

    import DefaultError from '@components/Error/DefaultError';
    import PrimaryAlert from "@components/Alert/PrimaryAlert";

    export default {
        props: ['form'],
        components: { DefaultError, PrimaryAlert },
        data(){
            return {}
        }
    }
</script>
