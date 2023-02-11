import React from "react";
import TaskCard from "../../components/TaskCard";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";

function Coop() {
  return (
    <div //page container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 50,
      }}
    >
      <div //content container
        style={{}}
      >
        <div
          style={{
            marginBottom: 20,
          }}
        >
          <Skeleton
            variant="rounded"
            animation={false}
            width={1209}
            height={407}
          />
        </div>

        <div //bottom half of content container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div //left bottom of content container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <div //container for left texts
              style={{
                width: 500,
              }}
            >
              <Typography variant="h1">
                <b>Co-ops...</b>
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
            <div>
              <Skeleton
                variant="rounded"
                animation={false}
                width={567}
                height={505}
              />
            </div>
          </div>
          <div>
            <Skeleton
              variant="rounded"
              animation={false}
              width={625}
              height={1011}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 40,
            justifyContent: "end",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            style={{
              backgroundColor: "#D9D9D9",
              color: "black",
              fontWeight: 700,
              textTransform: "none",
              fontSize: 16,
              borderRadius: 30,
              width: 188,
            }}
          >
            More..
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Coop;
