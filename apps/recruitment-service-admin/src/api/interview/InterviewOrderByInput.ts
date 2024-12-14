import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  schedule?: SortOrder;
  updatedAt?: SortOrder;
};
