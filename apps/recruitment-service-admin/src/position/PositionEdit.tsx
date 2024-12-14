import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="CloseDate" source="closeDate" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="OpenDate" source="openDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
