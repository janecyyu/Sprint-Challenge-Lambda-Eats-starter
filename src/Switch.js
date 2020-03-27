import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gluten Free:</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label="Gluten Free"
        />
        {/* {state.gilad.toString()} */}
      </FormGroup>
    </FormControl>
  );
}
