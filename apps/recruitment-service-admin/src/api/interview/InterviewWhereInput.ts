import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type InterviewWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  schedule?: DateTimeNullableFilter;
};
