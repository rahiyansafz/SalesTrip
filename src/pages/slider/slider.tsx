import banner from "../../media/images/hero-slider/banner_uns.jpg";

// const blue = {
//   50: "#F0F7FF",
//   100: "#C2E0FF",
//   200: "#80BFFF",
//   300: "#66B2FF",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0059B2",
//   800: "#004C99",
//   900: "#003A75",
// };

// const Tab = styled(TabUnstyled)`
//   font-family: IBM Plex Sans, sans-serif;
//   color: ${blue[900]};
//   cursor: pointer;
//   font-size: 0.875rem;
//   font-weight: bold;
//   background-color: #fff;
//   padding: 12px 20px;
//   margin: 6px 4px;
//   border: 1px solid ${blue[700]};
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: 0.3s;

//   &:hover {
//     background-color: ${blue[400]};
//     color: ${blue[50]};
//     border: 1px solid ${blue[500]};
//   }

//   &:focus {
//     color: #fff;
//     border-radius: 5px;
//     outline: none;
//     outline-offset: none;
//   }

//   &.${tabUnstyledClasses.selected} {
//     background-color: ${blue[400]};
//     color: ${blue[50]};
//     border: 1px solid ${blue[500]};
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const TabPanel = styled(TabPanelUnstyled)`
//   width: 100%;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   margin-top: 2em;
// `;

// const TabsList = styled(TabsListUnstyled)`
//   width: 70%;
//   margin: 0 auto;
//   min-width: 220px;
//   background-color: #fff;
//   border-radius: 8px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
// `;

export default function Slider() {
  // const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          backgroundImage: `url(${banner})`,
          minHeight: "80vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "16px",
          padding: 4,
          filter: "brightness(90%)",
        }}
      >
        {/* <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mx: "auto", color: "#000", my: 6 }}
        >
          Welcome to SalesTrip! Find Flights, Hotels & Tour Packages
        </Typography>

        <Grid item>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>Flight</Tab>
              <Tab>Hotel</Tab>
              <Tab>Visa</Tab>
            </TabsList>
            <Box
              sx={{
                flex: 1,
                width: "96%",
                mx: "auto",
                border: 1,
                borderRadius: 1,
                borderColor: "grey.200",
                px: 2,
                minHeight: "75%",
              }}
            >
              <TabPanel value={0}>First page</TabPanel>
              <TabPanel value={1}>Second page</TabPanel>
              <TabPanel value={2}>Third page</TabPanel>
            </Box>
          </TabsUnstyled>
        </Grid> */}
      </div>
    </>
  );
}
