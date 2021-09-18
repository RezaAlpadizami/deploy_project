import { useQuery } from "react-query";

const useGetPaymentRequest = (id = "") => {
  const { isLoading, isError, data, refetch } = useQuery(
    "paymentRequest",
    async () => {
      const response = await fetch(
        `http://localhost:5000/paymentRequest/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  return {data, isLoading, isError}
};

export default useGetPaymentRequest;