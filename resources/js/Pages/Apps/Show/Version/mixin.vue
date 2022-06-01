<script>

    import moment from 'moment'
    import InfoPopover from '@components/Popover/InfoPopover';
    import CreateOrUpdateVersionModal from './../../../Versions/Create/CreateOrUpdateVersionModal';

    export default {
        props: {
            version: Object,
            appPayload: Object
        },
        components: { InfoPopover, CreateOrUpdateVersionModal },
        data() {
            return {
                moment: moment,
                showingOptions: false,
                modalIsClosed: true
            }
        },
        methods: {
            showVersion() {
                this.$inertia.get(route('version.show', { project: this.route().params.project, app: this.route().params.app, version: this.version.id }));
            },
            modalClosed() {
                this.modalIsClosed = true;
                this.hideOptions();
            },
            modalOpened() {
                this.modalIsClosed = false;
            },
            showOptions(){
                this.showingOptions = true;
            },
            hideOptions(){
                //  Hide options if the modal is closed
                if( this.modalIsClosed == true ) {
                    this.showingOptions = false;
                }
            }
        }
    };

</script>
