import { useQuery } from "react-query";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const useGetPaymentRequest = (id = "") => {
  const fecthData = async () => {
    const response = await fetch(`http://localhost:5000/paymentRequest/${id}`, {
      headers: new Headers({
        Authorization: "Barrer " + cookies.get("accessToken"),
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { isLoading, isError, data, refetch } = useQuery(`paymentRequest`, fecthData, {
    cacheTime: 0,
  });

  return { data, isLoading, isError, refetch };
};

export default useGetPaymentRequest;
