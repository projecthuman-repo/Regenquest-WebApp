import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";

const Page = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 50,
});

const BottomContent = styled.div({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
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

const CustomButton = styled(Button)({
    backgroundColor: "#D9D9D9",
    color: "black",
    fontWeight: 700,
    textTransform: "none",
    fontSize: 16,
    borderRadius: 30,
    width: 188,
});

type TextProps = {
    text: string;
};

const TextHeader = ({ text }: TextProps) => (
    <Typography fontSize={96} fontWeight={600} lineHeight={1.5} variant="h1">
        {text}
    </Typography>
);

const TextBody = ({ text }: TextProps) => (
    <Typography fontSize={15} fontWeight={400} lineHeight={1.5} variant="h6">
        {text}
    </Typography>
);

function Coop() {
    return (
        <Page>
            <div>
                <Skeleton width={1209} height={407} />
                <BottomContent>
                    <BottomLeftContent>
                        <TextContainer>
                            <TextHeader text="Co-ops..." />
                            <TextBody
                                text="Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."
                            />
                        </TextContainer>
                        <Skeleton width={567} height={505} />
                    </BottomLeftContent>
                    <Skeleton width={625} height={1011} />
                </BottomContent>
                <ButtonContainer>
                    <CustomButton variant="contained" disableElevation>
                        More..
                    </CustomButton>
                </ButtonContainer>
            </div>
        </Page>
    );
}

export default Coop;
