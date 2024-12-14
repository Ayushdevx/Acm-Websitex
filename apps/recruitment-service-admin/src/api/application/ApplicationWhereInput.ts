import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ApplicationWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  submissionDate?: DateTimeNullableFilter;
};
