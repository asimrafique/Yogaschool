<template>
    <div class="row">
        <div class="col-md-8">
            <pagination :data="records" :limit=3 v-on:pagination-change-page="getRecords" class="m-l-10"></pagination>
        </div>
        <div class="col-md-4" v-if="records.total && showPageLength">
            <div class="pull-right m-r-10">
			    <select name="page_length" class="form-control" :value="pageLength" @change="updateValue">
			      <option v-for="option in getConfig('pagination')" v-bind:value="option">
			        {{ option+' '+trans('general.per_page') }}
			      </option>
			    </select>
            </div>
        </div>
    </div>
</template>

<script>
    import pagination from 'laravel-vue-pagination'

	export default {
		components: {pagination},
		props: {
            pageLength: {
                type: Number,
                default: 10
            },
            records: {
                type: Object
            },
            showPageLength: {
                type: Boolean,
                default: true
            }
        },
		methods: {
			getConfig(config){
				return helper.getConfig(config);
			},
            updateValue(e){
                this.$emit('update:pageLength',e.target.value);
            },
            getRecords(page){
            	this.$emit('updateRecords',page);
            }
		}
	}
</script>
