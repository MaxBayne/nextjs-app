// Material UI
import Box from "@mui/material/Box";

export default function ContentComponent({children})
{
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 ,mt:8}}>
           {children}
        </Box>
    );

}