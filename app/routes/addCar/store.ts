export const useGetTypesQuery = () => {
  return useQuery({
    queryFn: async () => {
      return client.GET('/');
    },
    queryKey: ['getTypes'],
  });
};



export const useGetProductDetialsbyIdQuery = (
  productId: number | null,
  enable: boolean,
) => {
  return useQuery({
    enabled: productId !== null && enable,
    queryFn: () => {
      return client.GET('/api/Temp/GetProductDetailesById/{ProductId}', {
        params: {
          path: { ProductId: productId },
        },
      });
    },

    queryKey: ['productDetails', productId],
  });
};
