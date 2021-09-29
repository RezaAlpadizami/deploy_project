import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const useGetDetailPaymentRequest = () => {
  const params = useParams();
  console.log("params >> ", params);
  const { isLoading, isError, data, refetch } = useQuery(
    `detailPaymentRequest:${params.id}`,
    async () => {
      const response = await fetch(
        "http://localhost:5000/paymentRequest/" + params.id
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetDetailPaymentRequest;
