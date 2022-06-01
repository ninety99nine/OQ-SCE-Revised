<template>

    <Transition name="fade" mode="out-in" :duration="250">

        <EditorContent v-if="showEditor"></EditorContent>

        <SimulatorContent v-else></SimulatorContent>

    </Transition>

</template>

<script>

    import EditorContent from "./Editor";
    import SimulatorContent from "./Simulator";

    export default {
        props: ['showEditor'],
        components: { EditorContent, SimulatorContent },
        data(){
            return {
                docState: 'saved'
            }
        }
    };

</script>
