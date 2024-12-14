import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  areasOfInterest?: SortOrder;
  branch?: SortOrder;
  createdAt?: SortOrder;
  currentClubMemberships?: SortOrder;
  email?: SortOrder;
  expectations?: SortOrder;
  fullName?: SortOrder;
  gitHubProfile?: SortOrder;
  id?: SortOrder;
  linkedInProfile?: SortOrder;
  motivation?: SortOrder;
  phoneNumber?: SortOrder;
  preferredDepartment?: SortOrder;
  previousProjects?: SortOrder;
  referral?: SortOrder;
  registrationNumber?: SortOrder;
  technicalSkills?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
