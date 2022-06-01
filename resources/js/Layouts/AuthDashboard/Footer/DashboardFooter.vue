<template>

    <div class="flex justify-center py-2 bg-white shadow-md absolute bottom-0 left-0 right-0">

        <span class="text-sm text-gray-500">© 2018 - {{ currentYear }} Optimum Quality. All Rights Reserved</span>

    </div>

</template>

<script>

    export default {
        data() {
            return {
            currentYear: new Date().getFullYear()   // 2022
            };
        }
    };

</script>
