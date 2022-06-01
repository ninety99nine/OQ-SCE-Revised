<template>
    <div>
        <label v-if="label" :for="uniqueId" :class="'block mb-2 text-'+size+' font-medium text-gray-900'">{{ label }}</label>

        <div v-if="read_only" v-html="contentWithHtmlTags"></div>

        <div v-else :id="uniqueId" :ref="uniqueId" :class="['editable-content-field bg-gray-50 border border-gray-300', ( disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900') ,'text-'+size+' rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5']" :style="{minHeight: minHeight}"
            v-html="isEditting ? contentWithoutHtmlTags : contentWithHtmlTags"
            :placeholder="placeholder" :contenteditable="true" :resize="true"
            @focus="onFocus($event)" @blur="onBlur($event)">
        </div>

        <DefaultError :error="error" class="mt-2"></DefaultError>

    </div>

</template>

<script>

    import { uniqueId } from 'lodash';
    import DefaultError from './../Error/DefaultError';

    export default {
        components: { DefaultError },
        props: {
            modelValue: String,
            label: String,
            size: {
                type: String,
                default: 'xs'
            },
            height: {
                type: String,
                default: 'xs'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            read_only: {
                type: Boolean,
                default: false
            },
            placeholder: String,
            error: {
                type: String,
                default: ''
            },
        },
        data(){
            return {
                isEditting: false,
                contentWithHtmlTags: null,
                contentWithoutHtmlTags: null,
                uniqueId: uniqueId('text-editor-')
            }
        },
        watch: {
            modelValue(newValue, oldValue) {
                this.setDynamicContent(newValue);
            }
        },
        computed: {
            minHeight() {
                if( this.height == 'lg' ) {
                    return '12em';
                }else if( this.height == 'md' ) {
                    return '8em';
                }else if( this.height == 'sm' ) {
                    return '4em';
                }else if( this.height == 'xs' ) {
                    return '0em';
                }else{
                    return this.height + 'em';
                }
            }
        },
        methods: {
            onFocus() {
                if( this.read_only == false ) {
                    this.isEditting = true;
                    this.setDynamicContent(this.$refs[this.uniqueId].innerText);
                }
            },
            onBlur() {
                if( this.read_only == false ) {
                    this.isEditting = false;
                    this.setDynamicContent(this.$refs[this.uniqueId].innerText);
                    this.$emit('update:modelValue', this.contentWithoutHtmlTags);
                }
            },
            setDynamicContent(text = ''){

                //  Insert dynamic content inside curly braces within span tags with special styles
                function wrapInHTMLTags(match, offset, string){

                    return '<span class="bg-blue-100 text-blue-900 shadow-sm rounded-md py-1 px-2 mx-1">' + match + '</span>';

                }

                //  Replace all matches with nothing (An empty string)
                function replaceWithNothing(match, offset, string){

                    return '';

                }

                if( text !== null ){

                    //  This pattern searches for any HTML tags e.g <span ...> or </span>
                    var pattern = /([<][a-zA-Z/!][^>]*[>])/g;

                    //  Replace all HTML tags within the text string with nothing
                    this.contentWithoutHtmlTags = text.replace(pattern, replaceWithNothing);

                    //  This pattern searches for anything using curly braces e.g {{ user }}
                    var pattern = /[{]{2}[\s]*[a-zA-Z_]{1}[a-zA-Z0-9_\.]{0,}[\s]*[}]{2}/g;

                    //  Wrap text with curly braces in HTML tags
                    this.contentWithHtmlTags = text.replace(pattern, wrapInHTMLTags);

                }

                //  Set the formatted text as the content
                this.content = text;

            }
        },
        created(){

            this.setDynamicContent(this.modelValue);

        },
        beforeUnmount() {

            this.onBlur();

        }
    }
</script>
