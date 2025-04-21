import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Sizes() {
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={filter}
        getOptionLabel={(option) => option.title}
        defaultValue={[filter[0]]}
        renderInput={(params) => (
          <TextField {...params} label="Choose to add filter" placeholder="Categories" />
        )}
      />
    </Stack>
  );
}

const filter = [
  { title: 'All' },
  { title: 'Jee', year: 1994 },
  { title: 'Jee Advance', year: 1972 },
  { title: 'Jee Mains', year: 1974 },
  { title: 'Neet', year: 2008 },
  { title: '11th', year: 1957 },
  { title: '12th', year: 1993 },
];
