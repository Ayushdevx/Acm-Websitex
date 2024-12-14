import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Schedule" source="schedule" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
