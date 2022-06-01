<template>

    <nav class="flex justify-end px-12 bg-white shadow-md">

        <ol class="inline-flex items-center">
            <li :class="{ 'border-blue-500 bg-blue-50' : showingSignInPage }" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link :href="route('login.show')" class="flex items-center text-sm pt-4 pb-4 px-8 cursor-pointer">
                    <span>Sign In</span>
                </Link>
            </li>
            <li :class="{ 'border-blue-500 bg-blue-50' : showingSignUpPage }" class="border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500">
                <Link :href="route('register.show')" class="flex items-center text-sm pt-4 pb-4 px-8 cursor-pointer">
                    <span>Sign Up</span>
                </Link>
            </li>
        </ol>

    </nav>

</template>

<script>

    import { Link } from "@inertiajs/inertia-vue3";

    export default {
        components: { Link },
        computed: {
            showingSignInPage() {
                return true;
            },
            showingSignUpPage() {
                return false;
            }
        }
    };

</script>
