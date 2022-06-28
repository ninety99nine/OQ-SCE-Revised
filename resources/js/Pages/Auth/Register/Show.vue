<template>

    <Head title="Sign Up" />

    <div class="flex flex-row h-screen justify-center items-center">

        <div class="w-1/3 -mt-40 -mb-20">

            <Logo class="m-auto mb-10" width="w-32" />

            <div class="p-5 bg-white rounded-md shadow-md hover:shadow-lg">

                <!-- Title -->
                <h5 class="text-xl font-medium text-gray-900 border-b pb-5 mb-5">Sign Up</h5>

                <div class="relative mb-5">

                    <!-- Loading overlay -->
                    <LoaderOverlay :show="form.processing" />

                    <!-- Register form -->
                    <DefaultInput v-model="form.name" label="Name" :disabled="form.processing || form.processing" :error="form.errors.name" @keyup.enter="register()" class="mb-6"></DefaultInput>
                    <DefaultInput v-model="form.email" label="Email" :disabled="form.processing || form.processing" :error="form.errors.email" @keyup.enter="register()" class="mb-6"></DefaultInput>
                    <DefaultInput v-model="form.password" type="password" label="Password" :disabled="form.processing || form.processing" :error="form.errors.password" @keyup.enter="register()"></DefaultInput>

                </div>

                <div class="flex justify-end">
                    <PrimaryButton :disabled="form.processing" @click="register()">
                        Sign Up
                    </PrimaryButton>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import { useForm, Head } from '@inertiajs/inertia-vue3';

    import Logo from "@components/Logo/Logo";
    import DefaultInput from "@components/Input/DefaultInput";
    import LoaderOverlay from "@components/Loader/LoaderOverlay";
    import PrimaryButton from "@components/Button/PrimaryButton";
    import GuestDashboardLayout from '../../../Layouts/GuestDashboard/GuestDashboardLayout.vue';

    export default {
        layout: GuestDashboardLayout,
        components: { Head, Logo, DefaultInput, LoaderOverlay, PrimaryButton },
        data() {
            return {
                form: useForm({
                    name: '',
                    email: '',
                    password: ''
                })
            }
        },
        methods: {
            register() {

                const self = this;

                //  Clear existing errors
                this.form.clearErrors();

                //  Attempt to register
                this.form.post(route('register.create'), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'Account created',
                            type: 'success'
                        });
                    },
                    onError: (errors) => {
                        self.$message({
                            message: 'Sorry, we found some mistakes',
                            type: 'error'
                        });
                    },
                });

            },
        }
    };

</script>
