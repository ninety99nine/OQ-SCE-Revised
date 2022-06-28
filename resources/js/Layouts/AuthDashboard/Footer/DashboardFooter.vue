<template>

    <div class="flex items-center justify-center py-4 bg-white shadow-md absolute bottom-0 left-0 right-0">

        <Logo width="w-16" class="mr-2" />

        <span class="text-sm text-gray-500">© 2018 - {{ currentYear }} Optimum Quality. All Rights Reserved</span>

    </div>

</template>

<script>

    import Logo from "@components/Logo/Logo";

    export default {
        components: { Logo },
        data() {
            return {
                currentYear: new Date().getFullYear()   // 2022
            };
        }
    };

</script>
