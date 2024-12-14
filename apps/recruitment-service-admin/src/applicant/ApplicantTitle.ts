import { Applicant as TApplicant } from "../api/applicant/Applicant";

export const APPLICANT_TITLE_FIELD = "fullName";

export const ApplicantTitle = (record: TApplicant): string => {
  return record.fullName?.toString() || String(record.id);
};
