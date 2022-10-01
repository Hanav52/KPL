import { ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Sort() {

    const [theme, setDesc] = useState();

    return(
        <div className='inner'>
          <div className='bodybodyheader'>
          {/* <ThemeProvider theme={theme}> */}
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => setDesc("writeDate,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>최신순</Button>
              <Button onClick={() => setDesc("views,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>조회순</Button>
              <Button onClick={() => setDesc("replyCount,desc")} color="three" style={{fontFamily: 'CookieRun-Regular', fontWeight: 'normal', fontStyle: 'normal'}}>댓글순</Button>
            </ButtonGroup>
          {/* </ThemeProvider> */}
          </div>  
        </div>
    )
  }