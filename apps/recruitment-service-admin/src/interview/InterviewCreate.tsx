import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Notes" multiline source="notes" />
        <DateTimeInput label="Schedule" source="schedule" />
      </SimpleForm>
    </Create>
  );
};
