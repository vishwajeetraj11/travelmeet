import { Button, Divider, FormHelperText, TextField } from '@mui/material';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import {urls} from '../../shared/constants'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const travelTypes = [
  'Workation',
  'Exploration',
  'Relaxing',
  'Adventures',
];

const travelDurations = [
  'Short',
  'Long'
];

const travelGroupSizes = [
  'Large',
  'Small'
];

function getStyles(name, arrItem, theme) {
  return {
    fontWeight:
      arrItem.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName is required'),
    lastName: Yup.string().required('Please enter your last Name'),
    location: Yup.string().required('Location'),
    veg: Yup.string().required('Required'),
    smoke: Yup.bool().required('Required'),
    drinks: Yup.bool().required('Required'),

    travelType: Yup.array()
    .of(
      Yup.string()
    )
    .min(1, 'Need at least one travelType'),

    travelDuration: Yup.array()
    .of(
      Yup.string()
    )
    .min(1, 'Need at least one travelDuration'),

    travelGroupSize: Yup.array()
    .of(
      Yup.string()
    )
    .min(1, 'Need at least one travelGroupSize'),

  });


const BasicProfileForm = ({ setAuthenticated }) => {
  const theme = useTheme();
  const {getAccessTokenSilently} = useAuth0();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        location: '',
        veg: 'VEG', // VEG or NON-VEG
        smoke: false,
        drinks: false,
        travelType: [],
        travelDuration: [],
        travelGroupSize: []
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount={false}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(async () => {         
          try {
            const token = await getAccessTokenSilently();
            const { data } = await axios({
              url: urls.baseUrl+urls.userProfile,
              method: `POST`,
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              data: {
               ...values
              },
            });

            console.log(data);

            // if(data.)
            setAuthenticated(true)

            resetForm();
          } catch (error) {
            console.log(error.response);
           
          } finally {
            setSubmitting(false);
          }
        }, 400);
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
        <form className="pb-10" onSubmit={handleSubmit}>
          <div className="">
            <div className="flex align-center justify-between">
              <h3 className="text-t1-lg font-medium mt-6">Experience Block</h3>
            </div>
            <TextField
              id="firstName"
              className="mt-6 pr-10"
              rows={1}
              variant="outlined"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              label="Enter First Name"
              value={values.firstName}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />

            <TextField
              id="lastName"
              className="mt-10 pr-10"
              rows={1}
              variant="outlined"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              label="Enter Last Name"
              value={values.lastName}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />

            <TextField
              id="location"
              className="mt-10 pr-10"
              multiline
              variant="outlined"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              label="Enter Location"
              value={values.location}
              error={!!errors.location}
              helperText={errors.location}
            />

            {/* Food Preference */}
            <FormControl component="fieldset">
            <FormLabel component="legend">Food Preference</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={values.veg}
              onChange={(e) => {console.log(e.target.value); setFieldValue('veg',e.target.value)}}
            >
              <FormControlLabel value={'VEG'} control={<Radio />} label="Vegitarian" />
              <FormControlLabel value={'NON-VEG'} control={<Radio />} label="Non Vegitarian" />
            </RadioGroup>
          </FormControl>


          <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel style={{backgroundColor: '#ffffff', padding: '0 5px'}} id="demo-multiple-chip-label">Travel Type Preference</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={values.travelType}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setFieldValue(
                'travelType',
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {travelTypes.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, travelTypes, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.travelType}</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel style={{backgroundColor: '#ffffff', padding: '0 5px'}} id="demo-multiple-chip-label">Travel Duration Preference</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={values.travelDuration}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setFieldValue(
                'travelDuration',
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {travelDurations.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, travelDurations, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.travelDuration}</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel style={{backgroundColor: '#ffffff', padding: '0 5px'}} id="demo-multiple-chip-label">Travel Group Preference</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={values.travelGroupSize}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setFieldValue(
                'travelGroupSize',
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {travelGroupSizes.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, travelGroupSizes, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.travelGroupSize}</FormHelperText>
        </FormControl>
                
          </div>
          <Divider className="mt-8 -ml-10" />
          <Button className="mt-6" variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default BasicProfileForm;