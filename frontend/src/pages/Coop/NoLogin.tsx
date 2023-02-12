import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const Page = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 50,
});

const Container = styled.div({});

const BottomContent = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

const BottomLeftContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
});

const TextContainer = styled.div({
  width: 500,
});

const ButtonContainer = styled.div({
  display: "flex",
  paddingTop: 40,
  justifyContent: "end",
});

const MoreButton = styled(Button)({
  backgroundColor: "#D9D9D9",
  color: "black",
  fontWeight: 700,
  textTransform: "none",
  fontSize: 16,
  borderRadius: 30,
  width: 188,
});

function Coop() {
  return (
    <Page>
      <Container>
        <Skeleton
          variant="rounded"
          animation={false}
          width={1209}
          height={407}
          style={{ marginBottom: 20 }}
        />
        <BottomContent>
          <BottomLeftContent>
            <TextContainer>
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
            </TextContainer>
            <Skeleton
              variant="rounded"
              animation={false}
              width={567}
              height={505}
            />
          </BottomLeftContent>
          <Skeleton
            variant="rounded"
            animation={false}
            width={625}
            height={1011}
          />
        </BottomContent>
        <ButtonContainer>
          <MoreButton variant="contained" disableElevation>
            More..
          </MoreButton>
        </ButtonContainer>
      </Container>
    </Page>
  );
}

export default Coop;
