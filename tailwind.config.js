/**
 *  Configure Flowbite
 *
 *  Reference: https://flowbite.com/docs/getting-started/quickstart/
 *
 *  I installed a package to enhance the group-* functionality for nested deeply nested children
 *  Issue Reference: https://github.com/tailwindlabs/tailwindcss/issues/1192
 *  Plugin used: https://github.com/ErickTamayo/tailwindcss-named-groups
 */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",  //  Added for Flowbite
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue"
    ],
    theme: {
        extend: {
            transitionProperty: {
                'height': 'height'
            }
        },
        namedGroups: ["2", "3"],           //  Added for enhancing group-* functionality
    },
    plugins: [
        require('flowbite/plugin'),             //  Added for Flowbite
        require("tailwindcss-named-groups"),    //  Added for enhancing group-* functionality
    ]
}
