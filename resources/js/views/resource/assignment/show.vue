<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container modal-lg">
                    <div class="modal-header" v-if="assignment.id">
                        <slot name="header">
                            <span>{{assignment.title}}</span>
                            <span class="float-right pointer" @click="$emit('close')">x</span>
                        </slot>
                    </div>
                    <div class="modal-body" v-if="assignment.id">
                        <slot name="body">
                            <h6 class="card-title">
                                <strong>{{trans('academic.subject')}}:</strong> {{assignment.subject.name+' ('+assignment.subject.code+')'}} 
                                <br />
                                <strong>{{trans('academic.batch')}}:</strong> {{assignment.subject.batch.course.name+' '+assignment.subject.batch.name}} 
                                <br />
                                <strong>{{trans('resource.date_of_assignment')}}:</strong> {{assignment.date_of_assignment | moment}} 
                                <br />
                                <strong>{{trans('resource.due_date_of_assignment')}}:</strong> {{assignment.due_date | moment}} 
                                <p class="pull-right" v-if="assignment.employee">
                                    <strong>{{trans('resource.assignment_posted_by')}}:</strong> {{getEmployeeName(assignment.employee)}} {{getEmployeeDesignation(assignment.employee, assignment.date_of_assignment)}}
                                </p>
                            </h6>
                            <div class="m-t-20 html-view" v-html="assignment.description"></div>
                            <div v-if="attachments.length">
                                <ul class="m-t-10 upload-file-list">
                                    <li class="upload-file-list-item" v-for="attachment in attachments">
                                        <a :href="`/resource/assignment/${assignment.uuid}/attachment/${attachment.uuid}/download?token=${authToken}`" class="no-link-color"><i :class="['file-icon', 'fas', 'fa-lg', attachment.file_info.icon]"></i> <span class="upload-file-list-item-size">{{attachment.file_info.size}}</span> {{attachment.user_filename}}</a>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <p>
                                <i class="far fa-clock"></i> <small>{{trans('general.created_at')}} {{assignment.created_at | momentDateTime}}</small>
                                <span class="pull-right">
                                    <i class="far fa-clock"></i> <small>{{trans('general.updated_at')}} {{assignment.updated_at | momentDateTime}}</small>
                                </span>
                            </p>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        components: {},
        props: ['uuid', 'url'],
        mounted(){
            if(this.uuid)
                this.get();
        },
        data(){
            return {
                assignment: [],
                attachments: []
            }
        },
        methods: {
            get(){
                let loader = this.$loading.show();
                axios.get('/api/assignment/'+this.uuid)
                    .then(response => {
                        this.assignment = response.assignment;
                        this.attachments = response.attachments;
                        loader.hide();
                    })
                    .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    });
            },
            getEmployeeName(employee){
                return helper.getEmployeeName(employee);
            },
            getEmployeeDesignation(employee, date){
                return helper.getEmployeeDesignation(employee, date);
            }
        },
        computed: {
            authToken(){
                return helper.getAuthToken();
            }
        },
        filters: {
          momentDateTime(date) {
            return helper.formatDateTime(date);
          },
          moment(date) {
            return helper.formatDate(date);
          }
        }
    }
</script>