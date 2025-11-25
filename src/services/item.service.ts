import { api } from "@/lib/api";
import { ItemType } from "@/types/item.types";

export const createItem = async (payload: ItemType) => {
  const res = await api.post("/item", payload);
  return res.data;
};

export const getItems = async () => {
  const res = await api.get("/item");
  return res.data.data;
};
