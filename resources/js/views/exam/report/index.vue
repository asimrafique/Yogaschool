<template>
    <div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('exam.report')}}</h3>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="action-buttons pull-right">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card card-form">
                <div class="card-body p-t-20">
			        <form @submit.prevent="submit" @keydown="reportForm.errors.clear($event.target.name)">
			            <div class="row">
			                <div class="col-12 col-sm-3">
			                    <div class="form-group">
			                        <label for="">{{trans('academic.batch')}} </label>
			                        <v-select label="name" :disabled="disable_filter" v-model="selected_batch" group-values="batches" group-label="course_group" :group-select="false" name="batch_id" id="batch_id" :options="batches" :placeholder="trans('academic.select_batch')" @select="onBatchSelect" @close="reportForm.errors.clear('batch_id')" @remove="reportForm.batch_id = ''">
			                            <div class="multiselect__option" slot="afterList" v-if="!batches.length">
			                                {{trans('general.no_option_found')}}
			                            </div>
			                        </v-select>
			                        <show-error :form-name="reportForm" prop-name="batch_id"></show-error>
			                    </div>
			                </div>
			                <div class="col-12 col-sm-3">
			                    <div class="form-group">
			                        <label for="">{{trans('student.student')}} </label>
			                        <v-select label="name" :disabled="disable_filter" v-model="selected_student" name="student_id" id="student_id" :options="students" :placeholder="trans('student.select_student')" @select="onStudentSelect" @close="reportForm.errors.clear('student_id')" @remove="reportForm.student_id = ''">
			                            <div class="multiselect__option" slot="afterList" v-if="!students.length">
			                                {{trans('general.no_option_found')}}
			                            </div>
			                        </v-select>
			                        <show-error :form-name="reportForm" prop-name="student_id"></show-error>
			                    </div>
			                </div>
                            <div class="col-12 col-sm-3" v-if="types.length > 1">
                                <div class="form-group">
                                    <label for="">{{trans('exam.term_report_type')}}</label>
                                    <select v-model="reportForm.type" class="custom-select col-12" name="type" @change="reportForm.errors.clear('type')">
                                      <option v-for="option in types" v-bind:value="option.value">
                                        {{ option.text }}
                                      </option>
                                    </select>
                                    <show-error :form-name="reportForm" prop-name="type"></show-error>
                                </div>
                            </div>
                            <div class="col-12 col-sm-3" v-if="types.length > 1 && reportForm.type == 'term_wise'">
                                <div class="form-group">
                                    <label for="">{{trans('exam.term')}}</label>
                                    <select v-model="reportForm.exam_term_id" class="custom-select col-12" name="exam_term_id" @change="reportForm.errors.clear('exam_term_id')">
                                      <option value="">{{trans('general.select_one')}}</option>
                                      <option v-for="option in exam_terms" v-bind:value="option.id">
                                        {{ option.name }}
                                      </option>
                                    </select>
                                    <show-error :form-name="reportForm" prop-name="exam_term_id"></show-error>
                                </div>
                            </div>
                            <div class="col-12 col-sm-3" v-if="types.length > 1 && reportForm.type == 'exam_wise'">
                                <div class="form-group">
                                    <label for="">{{trans('exam.term')}}</label>
                                    <select v-model="reportForm.exam_id" class="custom-select col-12" name="exam_id" @change="reportForm.errors.clear('exam_id')">
                                      <option value="">{{trans('general.select_one')}}</option>
                                      <option v-for="option in exams" v-bind:value="option.id">
                                        {{ option.name }}
                                      </option>
                                    </select>
                                    <show-error :form-name="reportForm" prop-name="exam_id"></show-error>
                                </div>
                            </div>
			            </div>
			            <div class="card-footer text-right">
			                <button type="button" @click="getReport" class="btn btn-info waves-effect waves-light">{{trans('general.print')}}</button>
                            <button type="button" @click="getPDFReport" class="btn btn-info waves-effect waves-light">{{trans('general.generate_pdf')}}</button>
			            </div>
			        </form>
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
                reportForm: new Form({
                    batch_id: '',
                    student_id: '',
                    exam_term_id: '',
                    exam_id: '',
                    type: ''
                },false),
                exams: [],
                types: [],
                exam_terms: [],
                batches: [],
                selected_batch: null,
                students: [],
                selected_student: null,
                disable_filter: false
            }
        },
        mounted(){
            if(!helper.hasPermission('access-exam-report') && !helper.hasPermission('access-class-teacher-wise-exam-report')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }

            this.getPreRequisite();
        },
        methods: {
            hasPermission(permission){
                return helper.hasPermission(permission);
            },
            getPreRequisite(){
                let loader = this.$loading.show();
                axios.get('/api/exam/report/pre-requisite')
                    .then(response => {
                        this.batches = response.batches;
                        this.types = response.types;
                        this.exam_terms = response.exam_terms;
                        this.exams = response.exams;
                        this.reportForm.type = this.types[0].value;
                        loader.hide();
                    })
                    .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    })
            },
            getStudents(){
                let loader = this.$loading.show();
                this.students = [];
                this.selected_student = null;
                axios.post('/api/exam/report/student', {
                    batch_id: this.reportForm.batch_id
                })
                .then(response => {
                    this.students = response.students;
                    loader.hide();
                })
                .catch(error => {
                    loader.hide();
                    helper.showErrorMsg(error);
                })
            },
            resetFilter(){
                this.disable_filter = false;
            },
            getReport(){
                let loader = this.$loading.show();
                axios.post('/api/exam/report', {
                	batch_id: this.reportForm.batch_id,
                    student_record_id: this.reportForm.student_id,
                    type: this.reportForm.type,
                    exam_term_id: this.reportForm.type == 'term_wise' ? this.reportForm.exam_term_id : '',
                    exam_id: this.reportForm.type == 'exam_wise' ? this.reportForm.exam_id : ''
                })
                .then(response => {
                    let print = window.open("/print");
                    loader.hide();
                    print.document.write(response);
                })
                .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                });
            },
            getPDFReport(){
                let loader = this.$loading.show();
                axios.post('/api/exam/report/pdf',{
                        batch_id: this.reportForm.batch_id,
                        student_record_id: this.reportForm.student_id,
                        type: this.reportForm.type,
                        exam_term_id: this.reportForm.type == 'term_wise' ? this.reportForm.exam_term_id : '',
                        exam_id: this.reportForm.type == 'exam_wise' ? this.reportForm.exam_id : ''
                    }
                    )
                    .then(response => {
                        loader.hide();
                        window.open('/download/report/'+response+'?token='+this.authToken);
                    })
                    .catch(error => {
                        loader.hide();
                        helper.showErrorMsg(error);
                    });
            },
            onBatchSelect(selectedOption){
                this.reportForm.batch_id = selectedOption.id;
                this.getStudents();
            },
            onStudentSelect(selectedOption){
                this.reportForm.student_id = selectedOption.id;
            }
        },
        watch: {
        },
        computed: {
            authToken(){
                return helper.getAuthToken();
            }
        }
	}
</script>