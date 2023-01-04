<template>
  <form @submit.prevent="proceed" @keydown="buildingForm.errors.clear($event.target.name)">
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="form-group">
          <label for="">{{ trans('asset.building_name') }}</label>
          <input class="form-control" type="text" v-model="buildingForm.name" name="name"
                 :placeholder="trans('asset.building_name')">
          <show-error :form-name="buildingForm" prop-name="name"></show-error>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="form-group">
          <label for="">Select Location</label>
          <select class="custom-select col-12" required name="location" id="location" v-model="buildingForm.location"
                  @change="buildingForm.errors.clear('location')">
            <option value="">{{ trans('general.select_one') }}</option>
            <option value="India">India</option>
            <option value="Netherlands">Netherlands</option>
          </select>
          <show-error :form-name="buildingForm" prop-name="location"></show-error>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="form-group">
          <label for="">{{ trans('asset.building_description') }}</label>
          <input class="form-control" type="text" v-model="buildingForm.description" name="description"
                 :placeholder="trans('asset.building_description')">
          <show-error :form-name="buildingForm" prop-name="description"></show-error>
        </div>
      </div>
    </div>
    <div class="card-footer text-right">
      <router-link to="/configuration/asset/building" class="btn btn-danger waves-effect waves-light " v-show="id">
        {{ trans('general.cancel') }}
      </router-link>
      <button v-if="!id" type="button" class="btn btn-danger waves-effect waves-light " @click="$emit('cancel')">
        {{ trans('general.cancel') }}
      </button>
      <button type="submit" class="btn btn-info waves-effect waves-light">
        <span v-if="id">{{ trans('general.update') }}</span>
        <span v-else>{{ trans('general.save') }}</span>
      </button>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      locations: '',
      buildingForm: new Form({
        name: '',
        location: '',
        description: '',

      })
    };
  },
  props: ['id'],
  mounted() {
    if (this.id) {
      this.get();
    }
    let loader = this.$loading.show();
    axios.get('/api/frontend/asset/building/pre-requisite')
        .then(response => {
          this.locations = response.locations;
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          helper.showErrorMsg(error);
        })

  },
  methods: {
    proceed() {
      if (this.id)
        this.update();
      else
        this.store();
    },
    store() {
      let loader = this.$loading.show();
      this.buildingForm.post('/api/asset/building')
          .then(response => {
            toastr.success(response.message);
            this.$emit('completed');
            loader.hide();
          })
          .catch(error => {
            loader.hide();
            helper.showErrorMsg(error);
          });
    },
    get() {
      let loader = this.$loading.show();
      axios.get('/api/asset/building/' + this.id)
          .then(response => {
            this.buildingForm.name = response.name;
            this.buildingForm.description = response.description;
            this.buildingForm.location = response.location;
            loader.hide();
          })
          .catch(error => {
            loader.hide();
            helper.showErrorMsg(error);
            this.$router.push('/configuration/asset/building');
          });
    },
    update() {
      let loader = this.$loading.show();
      this.buildingForm.patch('/api/asset/building/' + this.id)
          .then(response => {
            toastr.success(response.message);
            loader.hide();
            this.$router.push('/configuration/asset/building');
          })
          .catch(error => {
            loader.hide();
            helper.showErrorMsg(error);
          });
    }
  }
}
</script>
