<template>

    <div>

        <DefaultSelect v-model="useVersionBuilder.builder.restrictions.selected_type" :options="restrictions" label="Select restriction" class="w-1/4 mb-6"></DefaultSelect>


        <Transition name="fade" mode="out-in" :duration="250">
            <div v-if="useVersionBuilder.builder.restrictions.selected_type == 'Whitelist'">
                <TextOrCodeEditor v-model="useVersionBuilder.builder.restrictions.whitelist.numbers" label="Whitelist" placeholder="number1, number2, e.t.c" note="Separate numbers by comma" :showCode="true"></TextOrCodeEditor>
                <p class="text-gray-500 text-xs mt-4">Block access to all mobile numbers except the numbers provided above</p>
            </div>

            <div v-else-if="useVersionBuilder.builder.restrictions.selected_type == 'Blacklist'">
                <TextOrCodeEditor v-model="useVersionBuilder.builder.restrictions.blacklist.numbers" label="Blacklist" placeholder="number1, number2, e.t.c" note="Separate numbers by comma" :showCode="true"></TextOrCodeEditor>
                <p class="text-gray-500 text-xs mt-4">Grant access to all mobile numbers except the numbers provided above</p>
            </div>

            <p v-else class="text-gray-500 text-xs">Grant access to all mobile numbers</p>
        </Transition>

    </div>

</template>

<script>

    import { useVersionBuilder } from '@stores/VersionBuilder';
    import DefaultSelect from '@components/Select/DefaultSelect';
    import TextOrCodeEditor from '@components/TextOrCodeEditor/TextOrCodeEditor';

    export default {
        components: { DefaultSelect, TextOrCodeEditor },
        data(){
            return {
                useVersionBuilder: useVersionBuilder(),
                restrictions: [
                    {
                        label: 'None',
                    },
                    {
                        label: 'Blacklist',
                    },
                    {
                        label: 'Whitelist',
                    }
                ]
            }
        }
    };

</script>
