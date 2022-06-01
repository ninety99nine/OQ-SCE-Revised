<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <!--
        The @-routes below is used for ziggy support
        Reference 1: https://github.com/tighten/ziggy
        Reference 2: https://www.magutti.com/blog/install-ziggy-on-laravel-8-and-vue-3

        It must be imported before the application's JavaScript
    -->
    @routes

    <!-- Application's JavaScript -->
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="{{ mix('/js/flowbite.js') }}" defer></script>

    <!--
        The @-inertiaHead below is used for inertia support
    -->
    @inertiaHead

  </head>
  <body class="bg-gray-100">
    @inertia
  </body>
</html>
