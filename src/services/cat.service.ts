import { api } from "@/lib/api";
import { CatType } from "@/types/cat.types";

export const createCat = async (payload: CatType) => {
  const res = await api.post("/cat", payload);
  return res.data;
};

export const getCat = async () => {
  const res = await api.get("/cat");
  return res.data.data;
};
