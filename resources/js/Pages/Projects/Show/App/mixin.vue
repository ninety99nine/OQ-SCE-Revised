<script>

    import moment from 'moment'
    import InfoPopover from '@components/Popover/InfoPopover';
    import FeaturePopover from '@pages/Apps/Show/Version/Features/FeaturePopover';
    import CreateOrUpdateAppModal from './../../../Apps/Create/CreateOrUpdateAppModal';

    export default {
        props: {
            app: Object
        },
        components: { InfoPopover, FeaturePopover, CreateOrUpdateAppModal },
        data() {
            return {
                moment: moment,
                showingOptions: false,
                modalIsClosed: true
            }
        },
        methods: {
            showApp() {
                this.$inertia.get(route('app.show', { project: this.route().params.project, app: this.app.id }));
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
