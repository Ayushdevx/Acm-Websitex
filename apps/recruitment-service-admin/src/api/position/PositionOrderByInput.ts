import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  closeDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  openDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
