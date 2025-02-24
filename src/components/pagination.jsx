"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export default function PaginationRounded({ count, onChange, defaultPage }) {
  
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        defaultChecked={defaultPage}
        defaultPage={defaultPage}
        onChange={(e, page) => {
          onChange(page);
        }}
        renderItem={(item) => {return (item.type !== "previous" && item.type !== "next" )&&  (
          <PaginationItem
            className="text-[#92929D]"
            {...item}
            style={{
              backgroundColor: item.selected ? "#0053A60D" : null,
              border: item.selected ? "#ECF0F3" : "none",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              color: item.selected ? "#0053A6" : "#0053A6",
            }}
          />
        )}}
      />
    </Stack>
  );
}
