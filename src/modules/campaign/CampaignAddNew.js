import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Dropdown } from 'components/dropdown';
import { Input, Textarea } from 'components/input';
import { Label } from 'components/label';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogger } from 'redux-logger';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import { Button } from 'components/button';

Quill.register('modules/imageUploader', ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = useState();

  const handleAddNewCampaign = (value) => {
    console.log(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append('image', file);
          // const response = await axios({
          //   method: 'post',
          //   url: 'https://api.imgbb.com/1/upload?key=2f8c368e709d8b99482087c4e425ec36',
          //   data: bodyFormData,
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    [],
  );

  return (
    <div className="py-10 bg-white rounded-xl px-[66px]">
      <div className="text-center">
        <h1 className="inline-block py-4 px-14 rounded-xl bg-text4 text-[25px] font-bold bg-opacity-20 mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title*</Label>
            <Input control={control} name="title" placeholder="Write a title"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Selector Category*</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description*</Label>
          <Textarea
            placeholder="Wirte a short description"
            control={control}
            name="short_description"
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story*</Label>
          <ReactQuill
            placeholder="Write your story..."
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Goal*</Label>
            <Input control={control} name="goal" placeholder="$0.00 USD"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised amount*</Label>
            <Input control={control} name="amount" placeholder="$0.00 USD"></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input control={control} name="prefilled" placeholder="$0.00 USD"></Input>
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="amount" placeholder="Video"></Input>
            <p className="text-sm text-left text-text3">Play Youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Viet Nam</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <Input control={control} name="start_date" placeholder="Start Date"></Input>
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Input control={control} name="end_date" placeholder="End Date"></Input>
          </FormGroup>
        </FormRow>
        <div>
          <Button className="px-10 mx-auto mt-8 text-white outline-none bg-primary">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
