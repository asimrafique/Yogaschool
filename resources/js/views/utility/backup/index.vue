<template>
    <div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('utility.backup')}}
                        <span class="card-subtitle d-none d-sm-inline" v-if="!backups.length">{{trans('general.no_result_found')}}</span>
                    </h3>
                </div>
                <div class="col-12 col-sm-6">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card border-bottom">
                <div class="card-body p-4">
                    <h4 class="card-title">{{trans('utility.generate_backup')}}</h4>
                    <show-tip module="utility" tip="tip_backup"></show-tip>
                    <div class="form-group">
                        <switches class="m-l-20" v-model="backupForm.delete_previous" theme="bootstrap" color="success"></switches> {{trans('utility.delete_previous_backup?')}}
                    </div>
                    <div class="form-group">
                        <button class="btn btn-info btn-sm" @click.prevent="createBackup">{{trans('utility.generate_backup')}}</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive" v-if="backups">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th>{{trans('utility.backup_name')}}</th>
                                    <th>{{trans('utility.backup_size')}}</th>
                                    <th class="table-option">{{trans('general.action')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr v-for="backup in backups">
                                    <td v-text="backup.name"></td>
                                     <td v-text="backup.size"></td>
                                    <td class="table-option">
                                        <div class="btn-group">
                                            <a :href="getDownloadLink(backup)" class="btn btn-success btn-sm" v-tooltip="trans('utility.download_backup')"><i class="fas fa-download"></i></a>
                                            <button class="btn btn-danger btn-sm" :key="backup.name" v-confirm="{ok: confirmDelete(backup)}" v-tooltip="trans('utility.delete_backup')"><i class="fas fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <module-info v-if="!backups.length" module="utility" title="backup_module_title" description="backup_module_description" icon="list">
                    </module-info>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        components : {  },
        data() {
            return {
                backupForm: new Form({
                    delete_previous: false
                }),
                backups: [],
                filter: {
                    page_length: helper.getConfig('page_length'),
                    sort_by: 'created_at',
                    order: 'desc'
                },
                orderByOptions: [
                    {
                        value: 'created_at',
                        translation: i18n.general.created_at
                    }
                ]
            };
        },
        mounted(){
            if(!helper.hasPermission('access-configuration')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }

            if(!helper.featureAvailable('backup')){
                helper.featureNotAvailableMsg();
                this.$router.push('/dashboard');
            }

            this.getBackups();
        },
        methods: {
            createBackup(){
                let loader = this.$loading.show();
                this.backupForm.post('/api/backup')
                    .then(response => {
                        toastr.success(response.message);
                        this.getBackups();
                        loader.hide();
                    })
                    .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    })
            },
            getBackups(page){
                let loader = this.$loading.show();
                if (typeof page !== 'number') {
                    page = 1;
                }
                let url = helper.getFilterURL(this.filter);
                axios.get('/api/backup?page=' + page + url)
                    .then(response => {
                        this.backups = response;
                        loader.hide();
                    })
                    .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    });
            },
            confirmDelete(backup){
                return dialog => this.deleteBackup(backup);
            },
            deleteBackup(backup){
                let loader = this.$loading.show();
                axios.delete('/api/backup/'+backup.name)
                    .then(response => {
                        toastr.success(response.message);
                        this.getBackups();
                        loader.hide();
                    }).catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    });
            },
            getDownloadLink(backup){
                return '/backup/'+backup.name+'/download/?token='+helper.getAuthToken();
            },
        },
        filters: {
          momentDateTime(date) {
            return helper.formatDateTime(date);
          }
        },
        watch: {
            filter: {
                handler(val){
                    this.getBackups();
                },
                deep: true
            }
        }
    }
</script>
