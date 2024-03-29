<template>
  <div>
    <div class="page-title">
      <div class="fix-width fix-width-mobile">
        <h2>{{ trans('student.online_registration') }}</h2>
      </div>
    </div>

    <div class="fix-width fix-width-mobile p-3">
      <div class="page-body" v-html="getConfig('online_registration_header')"></div>
    </div>

    <div class="fix-width fix-width-mobile">
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="submit" @keydown="registrationForm.errors.clear($event.target.name)">
            <h2>{{ trans('student.registration_field_info', {name: trans('academic.course')}) }}</h2>
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label for="">{{ trans('academic.course') }}</label>
                  <v-select label="name" v-model="selected_course" group-values="courses" group-label="course_group"
                            :group-select="false" name="course_id" id="course_id" :options="courses"
                            :placeholder="trans('academic.select_course')" @select="onCourseSelect"
                            @close="registrationForm.errors.clear('course_id')"
                            @remove="registrationForm.course_id = ''">
                    <div class="multiselect__option" slot="afterList" v-if="!courses.length">
                      {{ trans('general.no_option_found') }}
                    </div>
                  </v-select>
                  <span class="help-block"
                        v-if="registrationForm.course_id && enable_registration_fee && registration_fee >= 0">{{
                      trans('student.registration_fee')
                    }} {{ formatCurrency(registration_fee) }}</span>
                  <show-error :form-name="registrationForm" prop-name="course_id"></show-error>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Select Course Batches</label>
                  <select v-model="registrationForm.batch_id" class="custom-select col-12" name="batch_id"
                          @change="onBatchSelect"  >
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="Batch in batches" v-bind:value="Batch.id">
                      {{ Batch.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="batch_id"></show-error>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Select Course Location</label>
                  <select v-model="registrationForm.course_location" class="custom-select col-12" name="course_location"
                          @change="registrationForm.errors.clear('course_location')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="course_location in course_locations" v-bind:value="course_location.id">
                      {{ course_location.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="course_location"></show-error>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Accommodation choice</label>
                  <select v-model="registrationForm.accommodation" class="custom-select col-12" name="accommodation"
                          @change="registrationForm.errors.clear('accommodation')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="accommodation in accommodations" v-bind:value="accommodation.id">
                      {{ accommodation.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="accommodation"></show-error>
                </div>
              </div>
            </div>

            <h2>About You</h2>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.first_name') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.first_name" name="first_name"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="first_name"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.middle_name') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.middle_name" name="middle_name"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="middle_name"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.last_name') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.last_name" name="last_name"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="last_name"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.date_of_birth') }}</label>
                  <datepicker v-model="registrationForm.date_of_birth" :bootstrapStyling="true"
                              @selected="registrationForm.errors.clear('date_of_birth')"
                              :placeholder="trans('student.date_of_birth')"></datepicker>
                  <show-error :form-name="registrationForm" prop-name="date_of_birth"></show-error>
                </div>
              </div>


              <div class="col-4 col-4">
                <div class="form-group">
                  <label for="">Nationality</label>
                  <input class="form-control" type="text" v-model="registrationForm.nationality"
                         name="nationality" placeholder="Your Nationality">
                  <show-error :form-name="registrationForm" prop-name="nationality"></show-error>
                </div>
              </div>
              <div class="col-4 col-4">
                <div class="form-group">
                  <label for="">Your occupation</label>
                  <input class="form-control" type="text" v-model="registrationForm.occupation"
                         name="occupation" placeholder="Your Occupation">
                  <show-error :form-name="registrationForm" prop-name="occupation"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.gender') }}</label>
                  <div class="radio radio-info p-l-0">
                    <div class="form-check form-check-inline " v-for="gender in genders">
                      <input class="form-check-input" type="radio" :value="gender.id" :id="gender.id"
                             v-model="registrationForm.gender" :checked="registrationForm.gender == gender.id"
                             name="gender" @click="registrationForm.errors.clear('gender')">
                      <label class="form-check-label" :for="gender.id">{{ trans('list.' + gender.id) }}</label>
                    </div>
                  </div>
                  <show-error :form-name="registrationForm" prop-name="gender"></show-error>
                </div>
              </div>

            </div>
             <h2>Customer Information</h2>
            <input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">Already Have an account? (login)</label><br>
        <!--      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1">Already Have an account (please checked)</label> --><br>
  <div class="row">
    <div class="col-12 col-sm-12">
                <div class="form-group">
                  <label for="">Email</label>
                  <input class="form-control" type="email" v-model="registrationForm.email"
                         name="email" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="email"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <div class="form-group">
                  <label for="">Password </label>
                  <input class="form-control" type="password" v-model="registrationForm.password"
                         name="password" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="password"></show-error>
                </div>
              </div>
               <div class="col-12 col-sm-12" v-show="!checked">
                <div class="form-group">
                  <label for="">confirm Password </label>
                  <input class="form-control" type="password" v-model="registrationForm.password_confirmation"
                         name="confirm_password" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="confirm_password"></show-error>
                </div>
              </div>
  </div>

            <h2>{{ trans('student.registration_field_info', {name: trans('student.guardian')}) }}</h2>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">First Guardian Name</label>
                  <input class="form-control" type="text" v-model="registrationForm.first_guardian_name"
                         name="first_guardian_name" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="first_guardian_name"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('general.relation') }}</label>
                  <select v-model="registrationForm.first_guardian_relation" class="custom-select col-12"
                          name="first_guardian_relation"
                          @change="registrationForm.errors.clear('first_guardian_relation')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="relation in guardian_relations" v-bind:value="relation.id">
                      {{ relation.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="first_guardian_relation"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.first_guardian_email') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.first_guardian_email"
                         name="first_guardian_email" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="first_guardian_email"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.first_guardian_contact_number') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.first_guardian_contact_number_1"
                         name="first_guardian_contact_number_1" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="first_guardian_contact_number_1"></show-error>
                </div>
              </div>


              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.second_guardian_name') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.second_guardian_name"
                         name="second_guardian_name" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="second_guardian_name"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.second_guardian_relation') }}</label>
                  <select v-model="registrationForm.second_guardian_relation" class="custom-select col-12"
                          name="second_guardian_relation"
                          @change="registrationForm.errors.clear('second_guardian_relation')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="relation in guardian_relations" v-bind:value="relation.id">
                      {{ relation.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="second_guardian_relation"></show-error>
                </div>
              </div>
            </div>

            <h2>{{ trans('student.registration_field_info', {name: trans('student.contact')}) }}</h2>
            <div class="row">
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">Email</label>
                  <input class="form-control" type="text" v-model="registrationForm.email"
                         name="email" placeholder="Your Email Address">
                  <show-error :form-name="registrationForm" prop-name="email"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.contact_number') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.contact_number"
                         name="contact_number" :placeholder="trans('student.contact_number')">
                  <show-error :form-name="registrationForm" prop-name="contact_number"></show-error>
                </div>
              </div>

              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.address_line_1') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.address_line_1"
                         name="address_line_1" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="address_line_1"></show-error>
                </div>
              </div>

              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.address_line_2') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.address_line_2"
                         name="address_line_2" :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="address_line_2"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.city') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.city" name="city"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="city"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.state') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.state" name="state"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="state"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.zipcode') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.zipcode" name="zipcode"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="zipcode"></show-error>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label for="">{{ trans('student.country') }}</label>
                  <input class="form-control" type="text" v-model="registrationForm.country" name="country"
                         :placeholder="trans('student.contact_name')">
                  <show-error :form-name="registrationForm" prop-name="country"></show-error>
                </div>
              </div>
            </div>
            <custom-field :fields="custom_fields" :customValues="custom_values" :clear="clearCustomField"
                          :formErrors="customFieldFormErrors" @updateCustomValues="updateCustomValues"></custom-field>


            <h2>Other Details</h2>
            <div class="row">
              <div class="col-4 ">
                <label for="">How long have you been practicing Yoga?</label>
                <select v-model="registrationForm.how_long_yoga"
                        name="how_long_yoga"
                        placeholder="Select one"
                        class="custom-select col-12"
                        @change="registrationForm.errors.clear('how_long_yoga')">
                  <option value="">{{ trans('general.select_one') }}</option>
                  <option v-for="how_log_option in how_long_yoga_options" v-bind:value="how_log_option.id">
                    {{ how_log_option.name }}
                  </option>

                </select>
              </div>
              <div class="col-4">
                <div class="form-group">


                  <label for="">Do you have any experience teaching yoga?</label>
                  <select v-model="registrationForm.teaching_experience"
                          name="teaching_experience"
                          class="custom-select col-12"
                          @change="registrationForm.errors.clear('teaching_experience')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="teaching_experience_option in teaching_experience_options"
                            v-bind:value="teaching_experience_option.id">
                      {{ teaching_experience_option.name }}
                    </option>
                  </select>
                  <show-error :form-name="registrationForm" prop-name="teaching_experience"></show-error>
                </div>
              </div>
              <div class=" col-4">
                <div class="form-group">
                  <label for="">What is your primary reason to join the course? </label>
                  <input type="text"
                         class="form-control"
                         v-model="registrationForm.joining_reason"
                         name="joining_reason">
                  <show-error :form-name="registrationForm" prop-name="joining_reason"></show-error>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group ">
                  <label for="">What is important to you in life?</label>
                  <input class="form-control " type="text"
                         name="important_to_life"
                         v-model="registrationForm.important_to_life">
                  <show-error :form-name="registrationForm" prop-name="important_to_life"></show-error>
                </div>

              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Why did you choose Arhanta Yoga?</label>
                  <input type="text" name="why_choose_us" class="form-control" v-model="registrationForm.why_choose_us">
                  <show-error :form-name="registrationForm" prop-name="why_choose_us"></show-error>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">How did you hear about us?</label>
                  <input type="text" class="form-control" name="how_hear_about_us"
                         v-model="registrationForm.how_hear_about_us">
                  <show-error :form-name="registrationForm" prop-name="how_hear_about_us"></show-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="">Please mention in case you have any allergies or special dietary needs:</label>
                  <br>
                  <input type="text" name="allergies_dietary_needs" v-model="registrationForm.allergies_dietary_needs"
                         class="form-control mt-3">

                  <show-error :form-name="registrationForm" prop-name="allergies_dietary_needs"></show-error>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="">Have you in the last 12 months used tobacco, alcohol, recreational drugs, or illicit
                    substances?(Required)</label>
                  <select name="use_drugs" v-model="registrationForm.use_drugs" class="custom-select col-12 "
                          @change="registrationForm.errors.clear('use_drugs')">
                    <option value="">{{ trans('general.select_one') }}</option>
                    <option v-for="use_drugs_option in use_drugs_options" v-bind:value="use_drugs_option.id">
                      {{ use_drugs_option.name }}
                    </option>
                  </select>

                  <show-error :form-name="registrationForm" prop-name="use_drugs"></show-error>

                </div>
              </div>
              <div class="col-6" >
                <div class="form-group">
                  <label for="">Please list substance and frequency of use</label>
                  <textarea v-model="registrationForm.substance_frequency_of_use" class="form-control" placeholder="add multiple lines"></textarea>

                  <show-error :form-name="registrationForm" prop-name="substance_frequency_of_use"></show-error>
                  <span class="text-xs">Please note that for any residential courses conducted at the premises of the Arhanta Yoga Ashrams in India and the Netherlands, the use of tobacco, alcohol and any other drugs is strictly prohibited. Please consider carefully before applying that you will be able to discontinue the use of any such substances during the entire duration of your course.</span>

                </div>
              </div>


            </div>




        <div class="form-group">
          <button type="submit" class="btn btn-info btn-lg waves-effect waves-light m-t-10">
            {{ trans('general.submit') }}
          </button>
        </div>
        </form>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import registration from "../../../student/registration";

export default {
  components: {},
  data() {
    return {
      courses: [],
      genders: [],
      course_details: [],
      data_to_show: [],
      batches: [],
      checked:false,
      registrationForm: new Form({
        course_id: '',
        batch_id: '',
        first_name: '',
        course_location_id: '',
        middle_name: '',
        last_name: '',
        email: '',
        date_of_birth: '',
        first_guardian_name: '',
        first_guardian_relation: '',
        second_guardian_name: '',
        second_guardian_relation: '',
        contact_number: '',
        first_guardian_contact_number_1: '',
        first_guardian_email: '',
        gender: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        custom_values: [],
        course_location: '',
        accommodation: '',
        nationality: '',
        occupation: '',
        how_long_yoga: '',
        teaching_experience: '',
        joining_reason: '',
        important_to_life: '',
        why_choose_us: '',
        how_hear_about_us: '',
        allergies_dietary_needs: '',
        use_drugs: '',
        use_drugs_details: '',
        substance_frequency_of_use: '',
        email:'',
        password:'',
        password_confirmation:'',
        check:false

      }),
      selected_course: null,
      selected_batch: null,
      guardian_relations: [],
      custom_fields: [],
      custom_values: [],
      clearCustomField: false,
      customFieldFormErrors: {},
      course_locations: [],
      accommodations: [],
      how_long_yoga_options: [],
      teaching_experience_options: [],
      use_drugs_options: [],
    }
  },
  mounted() {
    if (!this.getConfig('online_registration')) {
      this.$router.push('/dashboard');
    }

    let loader = this.$loading.show();
    axios.get('/api/frontend/online-registration/pre-requisite')
        .then(response => {
          this.genders = response.genders;
          this.courses = response.courses.courses;
          this.course_details = response.courses.course_details;
          // this.batches = response.batches;
          this.custom_fields = response.custom_fields;
          this.guardian_relations = response.guardian_relations;
          this.accommodations = response.accommodations;
          this.course_locations = response.course_locations;
          this.how_long_yoga_options = response.how_long_yoga_options;
          this.teaching_experience_options = response.teaching_experience_options;
          this.use_drugs_options = response.use_drugs_options;
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          helper.showErrorMsg(error);
        })
  },
  methods: {
    getConfig(config) {
      return helper.getConfig(config)
    },
    check(){
    alert(this.checked);
    },
    updateCustomValues(value) {
      this.registrationForm.custom_values = value;
    },
    submit() {
      let loader = this.$loading.show();
    
       if (this.checked) {
        this.registrationForm.password_confirmation='';
        this.registrationForm.check=this.checked;
       }
       else
       {
        this.registrationForm.check=false;
       }
       
      this.registrationForm.post('/api/frontend/online-registration')
          .then(response => {
            toastr.success(response.message);
            this.selected_course = null;
            this.clearCustomField = true;
            loader.hide();
          })
          .catch(error => {
            loader.hide();
            this.customFieldFormErrors = error;
            console.log('error',error);
            helper.showErrorMsg(error);
          });
    },
    onCourseSelect(selectedOption) {
      this.registrationForm.course_id = selectedOption.id;
      let course = this.course_details.find(o => o.course_id == selectedOption.id);
      this.enable_registration_fee = (course != 'undefined') ? course.enable_registration_fee : 0;
      this.registration_fee = (this.enable_registration_fee) ? course.registration_fee : 0
      // let course = this.course_details.find(o => o.course_id == selectedOption.id);
      let batches = this.course_details.find(
          o => o.course_id == selectedOption.id
      );

      this.batches=batches.batch_data;
      // let location_data = batches.batch_data.find(o => o.location);
      // console.table(location_data);

// console.log(batches.batch_data);
      // this.batches = this.course_details.find(o => o.course_id == selectedOption.id);
      // console.log(this.batches,this.batches.find(o => o.course_id == selectedOption.id));
      // let valObj = this.course_details.filter(function(elem){
      //   if(elem.course_id == selectedOption.id) return elem.batch_data;
      // });
      // this.batches=valObj;
    },
    onBatchSelect(selectedOption) {
      // this.registrationForm.batch_id = selectedOption.id;
      // this.registrationForm.batch_id = selectedOption.id;
      // let batches = this.batches.find(o => o.course_id == selectedOption.id);
      // this.batches = batches;

      // this.enable_registration_fee = (course != 'undefined') ? course.enable_registration_fee : 0;
      // this.registration_fee = (this.enable_registration_fee) ? course.registration_fee : 0

      let loader = this.$loading.show();
      axios.get('/api/frontend/online-registration/getlocationforbatch/'+this.registrationForm.batch_id)
          .then(response => {
            this.course_locations = response.course_location;
            loader.hide();
          })
          .catch(error => {
            loader.hide();
            helper.showErrorMsg(error);
          })

    },
    formatCurrency(amount) {
      return helper.formatCurrency(amount);
    },
  },
  filters: {
    moment(date) {
      return helper.formatDate(date);
    },
    momentDateTime(date) {
      return helper.formatDateTime(date);
    },
    onChangeUseDrugsOptions(selectedOption){
      this.registration.use_drugs_option=selectedOption.id;
    }
  },
}
</script>

<style lang="scss">
.contact-info-box {
  .comma:before {
    content: ", "
  }
}
</style>