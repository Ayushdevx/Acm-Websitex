import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Applicants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="AreasOfInterest" source="areasOfInterest" />
        <TextField label="Branch" source="branch" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="CurrentClubMemberships"
          source="currentClubMemberships"
        />
        <TextField label="Email" source="email" />
        <TextField label="Expectations" source="expectations" />
        <TextField label="FullName" source="fullName" />
        <TextField label="GitHubProfile" source="gitHubProfile" />
        <TextField label="ID" source="id" />
        <TextField label="LinkedInProfile" source="linkedInProfile" />
        <TextField label="Motivation" source="motivation" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="PreferredDepartment" source="preferredDepartment" />
        <TextField label="PreviousProjects" source="previousProjects" />
        <TextField label="Referral" source="referral" />
        <TextField label="RegistrationNumber" source="registrationNumber" />
        <TextField label="TechnicalSkills" source="technicalSkills" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />{" "}
      </Datagrid>
    </List>
  );
};
