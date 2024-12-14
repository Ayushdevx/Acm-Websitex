import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PositionWhereInput = {
  closeDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  openDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
