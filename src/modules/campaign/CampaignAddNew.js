import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Dropdown } from 'components/dropdown';
import { Input, Textarea } from 'components/input';
import { Label } from 'components/label';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogger } from 'redux-logger';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import { Button } from 'components/button';
import useOnChange from 'hooks/useOnChange';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { apiURL, imgbbAPI } from 'config/config';
import ImageUpload from 'image/ImageUpload';

Quill.register('modules/imageUploader', ImageUploader);

const categoriesData = ['architecture', 'education'];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();

  const getDropdownLabel = (name, defaultValue = '') => {
    const value = watch(name) || defaultValue;
    return value;
  };

  const [content, setContent] = useState();

  const resetValues = () => {
    setStartDate('');
    setEndDate('');
    reset({});
  };

  const handleAddNewCampaign = async (values) => {
    console.log(values);
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success('Create campaign successfully');
      resetValues();
    } catch (error) {
      toast.error('Can not create new campaign');
    }
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
          const bodyFormData = new FormData();
          bodyFormData.append('image', file);
          const response = await axios({
            method: 'post',
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return response.data.data.url;
        },
      },
    }),
    [],
  );

  const [countries, setCountries] = useState();
  const [filterCountry, setFilterCountry] = useOnChange(500);

  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;

      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${filterCountry}`);
        console.log('🚀 ~ response:', response.data);
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

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
              <Dropdown.Select
                placeholder={getDropdownLabel('category', 'Select category')}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() => {
                      handleSelectDropdownOption('category', category);
                    }}
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
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
            <Label>Feature Image</Label>
            <ImageUpload name="featured-image" onChange={setValue}></ImageUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
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
            <Input control={control} name="video" placeholder="Video"></Input>
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
              <Dropdown.Select
                placeholder={getDropdownLabel('country', 'Select country')}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country..."
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries?.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() => handleSelectDropdownOption('country', country?.name?.common)}
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div>
          <Button type="submit" className="px-10 mx-auto mt-8 text-white outline-none bg-primary">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
