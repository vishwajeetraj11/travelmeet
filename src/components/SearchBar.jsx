import React, { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [value, setValue] = useState("");
  const handleCancel = () => {
    setValue("");
    // handleClear && handleClear();
    setShowIcon(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    if (e.target.value) {
      setShowIcon(true);
      // search(e.target.value);
    } else {
      handleCancel();
    }
  };

  // const handleEnter = (e: any) => {
  //   if (e.keyCode == 13) {
  //     handleSearch(value);
  //   }
  // };

  return (
    <div>
      <FormControl variant='filled' fullWidth>
        <OutlinedInput
          placeholder='Type here'
          value={value}
          onChange={handleChange}
          autoFocus={true}
          endAdornment={
            <InputAdornment position='end'>
              {showIcon ? (
                <IconButton edge='end' >
                  <CloseIcon color='disabled' onClick={handleCancel}  />
                </IconButton>
              ) : null}

              <IconButton edge='end'>
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};
