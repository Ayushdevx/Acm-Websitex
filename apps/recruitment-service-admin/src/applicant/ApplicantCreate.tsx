import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AreasOfInterest" multiline source="areasOfInterest" />
        <TextInput label="Branch" source="branch" />
        <TextInput
          label="CurrentClubMemberships"
          multiline
          source="currentClubMemberships"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Expectations" multiline source="expectations" />
        <TextInput label="FullName" source="fullName" />
        <TextInput label="GitHubProfile" source="gitHubProfile" />
        <TextInput label="LinkedInProfile" source="linkedInProfile" />
        <TextInput label="Motivation" multiline source="motivation" />
        <NumberInput step={1} label="PhoneNumber" source="phoneNumber" />
        <TextInput label="PreferredDepartment" source="preferredDepartment" />
        <TextInput
          label="PreviousProjects"
          multiline
          source="previousProjects"
        />
        <TextInput label="Referral" source="referral" />
        <TextInput label="RegistrationNumber" source="registrationNumber" />
        <TextInput label="TechnicalSkills" multiline source="technicalSkills" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
