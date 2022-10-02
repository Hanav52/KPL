import { ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function SSort() {

  const sort = useSelector(sort=>sort.sort)
  const dispatch = useDispatch();
    return(
        <div className='inner'>
          <div className='bodybodyheader'>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => dispatch({ type: '낮은 가격순'})} >낮은 가격순</Button>
              <Button>조회순</Button>
              {/* <Button onClick={() => Sort("b_price,desc")} >높은 가격순</Button>
              <Button onClick={() => Sort("b_time,desc")} >최신순</Button>
              <Button onClick={() => Sort("b_views,desc")} >조회순</Button> */}
            </ButtonGroup>
          </div>  
        </div>
    )
  }