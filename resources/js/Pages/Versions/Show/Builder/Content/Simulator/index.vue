<template>

    <div class="grid grid-cols-3">

        <div class="grid-span-1 py-8 px-4">
            <SimulatorLogs :response="response"></SimulatorLogs>
        </div>

        <div class="grid-span-1">
            <div class="flex justify-center pt-8">
                <Nexus5 class="scale-75 origin-top">
                    <MobileScreen @response="response = $event"></MobileScreen>
                </Nexus5>
            </div>
        </div>

        <div class="grid-span-1">

        </div>

    </div>

</template>

<script>

    import SimulatorLogs from "./Logs";
    import MobileScreen from "./MobileScreen";
    import Nexus5 from "@components/MobileDevice/Nexus5";

    export default {
        components: { SimulatorLogs, MobileScreen, Nexus5 },
        data() {
            return {
                response: null
            }
        }
    };

</script>
