import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="CloseDate" source="closeDate" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="OpenDate" source="openDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
