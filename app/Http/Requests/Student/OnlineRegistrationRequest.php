<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;

class OnlineRegistrationRequest extends FormRequest {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize() {
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules() {

		
		if (request()->get('section_no')) {
          $favcolor=request()->get('section_no');
          
			switch ($favcolor) {
  case 1:
return ['course_id'                       => 'required'];
 
    break;
  case 2:

  $passwordRule='required';
        $emailRule='required';
        if (request()->get('check')==false) {
            $emailRule='required|email|unique:users,email|max:191';
            // $phoneRule='required_without_all:email|unique:users,phone|max:191';
            $passwordRule='required|min:8|max:191|confirmed';
        }
        else
        {   
        	$emailRule='required|exists:users,email';
        }
      return [  'email'                         => $emailRule,
			'password'                         => $passwordRule];
  
    
    break;
  case 3:
    

    if (request()->get('check')==false) {
    	return [
             'first_name'                      => 'required|min:2',
             'date_of_birth'                   => 'required|date',
             'gender'                          => 'required',

    	];
    }
    
    break;
    case 4:
    

   
    	return [
             'contact_number'                  => 'required',
             'address_line_1'                  => 'required',
            
             'city'                            => 'required',
             'state'                           => 'required',
			'zipcode'                         => 'required',
			'country'                         => 'required',

    	];
    
    
    break;
     case 5:
    

   
    	return [
                            
    	];
    
    
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
			
		}

        $relations = implode(',', gv(getVar('list'), 'relations', []));
        $passwordRule='required';
        $emailRule='required';
        if (request()->get('check')==false) {
            $emailRule='required|email|unique:users,email|max:191';
            // $phoneRule='required_without_all:email|unique:users,phone|max:191';
            $passwordRule='required|min:8|max:191|confirmed';
        }
        else
        {   
        	$emailRule='required|exists:users,email';
        }
        
		return [
			'first_name'                      => 'required|min:2',
			// 'last_name'                       => 'required|min:2',
			'date_of_birth'                   => 'required|date',
			'contact_number'                  => 'required',
			'gender'                          => 'required',
			'first_guardian_name'             => 'required',
			'first_guardian_relation'         => 'required|different:second_guardian_relation|in:'.$relations,
			'second_guardian_name'            => 'required',
			'second_guardian_relation'        => 'required|different:first_guardian_relation|in:'.$relations,
			'first_guardian_email'            => 'email',
			'first_guardian_contact_number_1' => 'required',
			'course_id'                       => 'required',
			'address_line_1'                  => 'required',
			'city'                            => 'required',
			'state'                           => 'required',
			'zipcode'                         => 'required',
			'country'                         => 'required',
			'email'                         => $emailRule,
			'password'                         => $passwordRule,

		];
	}

	/**
	 * Translate fields with user friendly name.
	 *
	 * @return array
	 */
	public function attributes() {
		return [
			'first_name'                      => trans('student.first_name'),
			'last_name'                       => trans('student.last_name'),
			'date_of_birth'                   => trans('student.date_of_birth'),
			'contact_number'                  => trans('student.contact_number'),
			
			'first_guardian_name'             => trans('student.first_guardian_name'),
			'second_guardian_name'            => trans('student.second_guardian_name'),
			'first_guardian_email'            => trans('student.first_guardian_email'),
			'first_guardian_contact_number_1' => trans('student.first_guardian_contact_number'),
			'course_id'                       => trans('academic.course'),
			'address_line_1'                  => trans('student.address_line_1'),
			'city'                            => trans('student.city'),
			'state'                           => trans('student.state'),
			'zipcode'                         => trans('student.zipcode'),
			'country'                         => trans('student.country'),
		];
	}

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'first_guardian_relation.different' => trans('general.different_custom', ['attribute' => trans('general.relation')]),
            'second_guardian_relation.different' => trans('general.different_custom', ['attribute' => trans('general.relation')])
        ];
    }
}
