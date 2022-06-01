<template>

    <div>

        <DefaultSelect v-model="form.event_data.method" :options="options" label="Method" class="mb-6"></DefaultSelect>

        <TextOrCodeEditor v-model="form.event_data.url" label="Url" placeholder="http://example.com/api" :error="form.errors.url" :showCode="true"></TextOrCodeEditor>

    </div>

</template>

<script>

    import DefaultSelect from '@components/Select/DefaultSelect';
    import TextOrCodeEditor from '@components/TextOrCodeEditor/TextOrCodeEditor';

    export default {
        props: ['form'],
        components: { DefaultSelect, TextOrCodeEditor },
        data(){
            return {
                options: [
                    {
                        label: 'GET',
                        value: 'get'
                    },
                    {
                        label: 'POST',
                        value: 'post'
                    },
                    {
                        label: 'PUT',
                        value: 'put'
                    },
                    {
                        label: 'PATCH',
                        value: 'patch'
                    },
                    {
                        label: 'DELETE',
                        value: 'delete'
                    }
                ]
            }
        }
    }
</script>
