/* eslint-disable id-length */
import { create } from 'zustand';

export type useProductsStoreType = {
  actions: {
    filterCarState: (carStare: string) => void;
    filterModel: (model: string) => void;
    searchInTable: (pageNumer: string | undefined) => void;
  };

  carState: string | undefined;
  model: string | undefined;
  query: string | undefined;
};
export const useProductsStore = create<useProductsStoreType>((set) => ({
  actions: {
    async filterCarState(data) {
      set({ carState: data });
    },
    async filterModel(data) {
      set({ model: data });
    },

    async searchInTable(data) {
      set({ query: data });
    },
  },
  // state
  carState: undefined,
  model: undefined,
  query: undefined,
}));
export const { filterCarState, filterModel, searchInTable } =
  useProductsStore.getState().actions;

export const useGetAllModel = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/cars');
    },
    queryKey: ['getAllCategory'],
  });
};

export const useGetAllProductsQuery = (
  model: string,
  carStare: string,
  search: string,
) => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/cars', {
        params: {
          query: {
            carState: carStare,
            model,

            q: search,
          },
        },
      });
    },
    queryKey: ['getAllCars', carStare, model, search],
  });
};
