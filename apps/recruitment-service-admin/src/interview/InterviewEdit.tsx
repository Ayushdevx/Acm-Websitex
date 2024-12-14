import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Notes" multiline source="notes" />
        <DateTimeInput label="Schedule" source="schedule" />
      </SimpleForm>
    </Edit>
  );
};
