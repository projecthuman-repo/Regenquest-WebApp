import React from "react";
import Skeleton from "@mui/material/Skeleton";
import styled from "@emotion/styled";

type CoopSkeletonProps = {
  // width: number,
  // height: number,
  // variant: "rounded",
  // animation: "{false}",
  type: 1 | 2 | 3;
};

const CoopSkeleton = ({
  // width,
  // height,
  type,
  ...rest
}: CoopSkeletonProps) => {
  const CustomCard = styled(Skeleton)({
    height: type === 1 ? 407 : type === 2 ? 505 : type === 3 ? 1011 : 505,
    width: type === 1 ? 1209 : type === 2 ? 567 : type === 3 ? 625 : 567,
  });

  return <CoopSkeleton type={type} />;
};

export default CoopSkeleton;
