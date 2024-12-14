import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ApplicantWhereInput = {
  areasOfInterest?: StringNullableFilter;
  branch?: StringNullableFilter;
  currentClubMemberships?: StringNullableFilter;
  email?: StringNullableFilter;
  expectations?: StringNullableFilter;
  fullName?: StringNullableFilter;
  gitHubProfile?: StringNullableFilter;
  id?: StringFilter;
  linkedInProfile?: StringNullableFilter;
  motivation?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  preferredDepartment?: StringNullableFilter;
  previousProjects?: StringNullableFilter;
  referral?: StringNullableFilter;
  registrationNumber?: StringNullableFilter;
  technicalSkills?: StringNullableFilter;
  year?: IntNullableFilter;
};
