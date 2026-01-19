import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetAllDonors from "@/hooks/useGetAllDonors";
import { useSelector } from "react-redux";

function AdminGetUsers() {
  // ✅ fetch donors
  useGetAllDonors();

  // ✅ read from redux
  const donors = useSelector((store) => store.admin.donors) || [];

  return (
    <Table className="max-w-7xl mx-auto my-12">
      <TableCaption>
        A list of recent <span className="text-gray-500">Donors</span>.
      </TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Donor Name</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Dan Date</TableHead>
          <TableHead className="text-right">Dan Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {donors.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-gray-500">
              No donors found
            </TableCell>
          </TableRow>
        ) : (
          donors.map((donor) => (
            <TableRow
              key={donor._id}
              className={donor.amount > 2500 ? "bg-blue-400" : ""}
            >
              <TableCell className="font-medium">{donor.fullname}</TableCell>
              <TableCell>{donor.phoneNumber}</TableCell>
              <TableCell>
                {new Date(donor.danDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right font-semibold">
                {donor.amount}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default AdminGetUsers;
