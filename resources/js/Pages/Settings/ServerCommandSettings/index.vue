<template>

    <div>

        <PrimaryAlert class="mb-6">
            <span>Run server commands</span>
        </PrimaryAlert>

        <div class="flex justify-between">
            <DefaultSelect v-model="command" :options="commands" class="w-40"></DefaultSelect>
            <PrimaryButton @click.stop="changePassword()" :disabled="isLoading">Run Command</PrimaryButton>
        </div>

        <PrimaryAlert v-if="response" class="flex-none mt-6">
            <span class="text-xs text-gray-500 whitespace-pre-wrap">{{ response }}</span>
        </PrimaryAlert>

    </div>

</template>

<script>

    import axios from 'axios';
    import PrimaryAlert from "@components/Alert/PrimaryAlert";
    import DefaultSelect from "@components/Select/DefaultSelect";
    import PrimaryButton from "@components/Button/PrimaryButton";

    export default {
        components: { PrimaryAlert, DefaultSelect, PrimaryButton },
        data() {
            return {
                commands: this.$page.props.commands.map((command) => { return { label: command } }),
                command: this.$page.props.commands[0],
                isLoading: false,
                response: null
            }
        },
        methods: {
            changePassword() {

                const self = this;

                this.isLoading = true;

                const data = { command: this.command };

                const url = route('settings.server.commands.run');

                axios.post(url, data)
                    .then((response) => {

                        this.response = response.data;

                        self.$message({
                            message: 'Command executed successfully',
                            type: 'success'
                        });

                    }).catch((error) => {

                        var message = (error || {}).message ?? 'Sorry, something went wrong';

                        //  Request failed with status code 419 (CSRF token mismatch.)
                        if( error.response.status === 419 ) {

                            message = 'Please login';

                            //  Proceed to login
                            this.$inertia.get(route('login.show'));

                        }

                        self.$message({
                            message: message,
                            type: 'warning'
                        });

                    }).finally(() => {

                        this.isLoading = false;

                    });

            }
        }
    };

</script>
