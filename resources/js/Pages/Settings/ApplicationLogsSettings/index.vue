<template>

    <div class="flex items-center justify-between">

        <PrimaryAlert>
            <span>Download application log file</span>
        </PrimaryAlert>

        <a :href="route('settings.application.logs.download')" target="_blank">

            <PrimaryButton>Download</PrimaryButton>

        </a>

    </div>

</template>

<script>

    import PrimaryAlert from "@components/Alert/PrimaryAlert";
    import PrimaryButton from "@components/Button/PrimaryButton";

    export default {
        components: { PrimaryAlert, PrimaryButton },
        data() {
            return {

            }
        }
    };

</script>
