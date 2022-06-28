<template>

    <div class="relative min-h-screen pb-20 bg-contain bg-center bg-[url('/images/flow-bg.png')]">

        <!-- Dashboard Header For Authenticated User -->
        <DashboardHeader></DashboardHeader>

        <!-- Dashboard SubHeader For Authenticated User -->
        <DashboardSubHeader></DashboardSubHeader>

        <!-- Place the custom content here -->
        <slot />

        <!-- Dashboard Footer For Authenticated User -->
        <DashboardFooter></DashboardFooter>

    </div>

</template>

<script>

    import DashboardSubHeader from './SubHeader/DashboardSubHeader';
    import DashboardHeader from './Header/DashboardHeader';
    import DashboardFooter from './Footer/DashboardFooter';

    export default {
        components: { DashboardSubHeader, DashboardHeader, DashboardFooter }
    };

</script>
