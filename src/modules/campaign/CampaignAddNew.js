import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Input } from 'components/input';
import { Label } from 'components/label';
import React from 'react';
import { useForm } from 'react-hook-form';

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="py-10 bg-white rounded-xl px-[66px]">
      <div className="text-center">
        <h1 className="inline-block py-4 px-14 rounded-xl bg-text4 text-[25px] font-bold bg-opacity-20 mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title*</Label>
            <Input control={control} name="title" placeholder="Write a title"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Selector Category*</Label>
            {/* Dropdown */}
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
};

export default CampaignAddNew;
