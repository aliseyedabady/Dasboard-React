import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";
import { ToTime } from "../../../Common/Function/index";
export default function SecondsTimePicker({ element, form, setForm }) {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className={`my-2 ${element.col}`} dir="rtl">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            ampm={false}
            openTo="hours"
            views={["hours", "minutes"]}
            inputFormat="HH:mm"
            mask="__:__"
            label={element.name}
            value={form[element.key + "s"] || new Date()}
            onChange={newValue => {
              setForm({
                ...form,
                [element.key]: ToTime(newValue),
                [element.key + "s"]: newValue,
              });
            }}
            renderInput={params => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
