import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar as MaterialToolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styled from "@emotion/styled";

type ProfileButtonProps = {
    name: string;
};

const Container = styled.div({
    width: "100%",
});

const Spacer = styled.div({
    width: 5,
});

const ProfileContainer = styled.div({
    display: "flex",
    marginRight: 30,
    gap: 10,
    paddingLeft: 25,
});

const Options = styled.div({
    display: "flex",
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
});

const LogoContainer = styled.div({
    alignContent: "end",
    width: 150,
});

const ProfileIcon = styled(AccountCircleIcon)({
    color: "rgba(0, 0, 0)",
});

const Content = styled(MaterialToolbar)({
    justifyContent: "space-between",
    padding: 10,
});

const ButtonContainer = styled.div({
    display: "flex",
    gap: 20,
});

const Link = styled(Typography)({
    color: "black",
});

const ProfileButton = ({ name }: ProfileButtonProps) => (
    <ProfileContainer>
        <Typography>{name}</Typography>
        <ProfileIcon />
    </ProfileContainer>
);

function Links() {
    return (
        <ButtonContainer>
            <Button variant="text">
                <Link>About</Link>
            </Button>
            <Button variant="text">
                <Link>Map</Link>
            </Button>
            <Button variant="text">
                <Link>Communities</Link>
            </Button>
            <Button variant="text">
                <Link>Projects</Link>
            </Button>
            <Button variant="text">
                <Link>Programs</Link>
            </Button>
            <Button variant="text">
                <Link>Co-op</Link>
            </Button>
        </ButtonContainer>
    );
}

function Logo() {
    return (
        <div>
            <Button variant="text">
                <Typography variant="h6" color="black">
                    <b>Regenquest Logo</b>
                </Typography>
            </Button>
        </div>
    );
}
const Toolbar = () => (
    <Container>
        <AppBar>
            <Content>
                <Options>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <Links />
                </Options>
                <ProfileButton name="Log in" />
            </Content>
        </AppBar>
    </Container>
);

export default Toolbar;
