import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDonors } from "@/redux/adminSlice";
import { ADMIN_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";

const useGetAllDonors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          dispatch(setDonors([]));
          return;
        }

        const res = await axios.get(`${ADMIN_API_ENDPOINT}/donors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ STORE BACKEND DATA
        dispatch(setDonors(res.data.donors));
      } catch (error) {
        dispatch(setDonors([]));
        toast.error("Failed to fetch donors");
      }
    };

    fetchDonors();
  }, [dispatch]);
};

export default useGetAllDonors;
