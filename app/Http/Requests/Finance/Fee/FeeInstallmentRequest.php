<?php

namespace App\Http\Requests\Finance\Fee;

use Illuminate\Foundation\Http\FormRequest;

class FeeInstallmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rule = [
            'due_date' => 'required|date',
            'title' => 'required'
        ];

        if ($this->late_fee_applicable) {
            $rule['late_fee_frequency'] = 'required|numeric|min:1';
            $rule['late_fee'] = 'required|numeric|min:0';
        }

        return $rule;
    }

    /**
     * Translate fields with user friendly name.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'due_date' => trans('finance.fee_installment_due_date'),
            'late_fee_frequency' => trans('finance.late_fee_frequency'),
            'late_fee' => trans('finance.late_fee'),
            'title' => trans('finance.fee_installment_title'),
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
            'late_fee_frequency.required_if' => trans('validation.required', ['attribute' => trans('finance.late_fee_frequency')]),
            'late_fee.required_if' => trans('validation.required', ['attribute' => trans('finance.late_fee')])
        ];
    }
}
