import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export const ViewAllButton = styled(Button)({
  color: "white",
  backgroundColor: deepOrange[500],
  textTransform: "capitalize",
});

export const BottomBadge = styled(Box)({
  position: "absolute",
  bottom: 0,
});

export const BadgeContent = styled("span")({
  backgroundColor: "whitesmoke",
  color: "rgb(112, 112, 112)",
  padding: "1rem",
  borderRadius: "1px",
  position: "absolute",
  bottom: 0,
  zIndex: 1000,
});

export const HorizontalStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "15px",
});

export const LeftHorizontalStack = styled(Box)({
  width: "40%",
});

export const RightHorizontalStack = styled(Box)({
  width: "60%",
});

export const CardContentWrapper = styled(Stack)({
  gap: "20px",
});

export const CardHeader = styled(Typography)({
  fontWeight: "400",
  fontSize: "1.5rem",
  lineHeight: "1.4",
  marginTop: "10px",
  marginBottom: "10px",
});

export const CardContentsBottom = styled(Stack)({
  flexDirection: "row",
  gap: "20px",
  color: "GrayText",
});

export const CardVideoFrame = styled(Box)({
  width: "250px",
  height: "200px",
  backgroundColor: "grey",
});
