import { ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Sort() {

  const dispatch = useDispatch();

    return(
        <div className='inner'>
          <div className='bodybodyheader'>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => dispatch({ type: '낮은 가격순'})} >낮은 가격순</Button>
              <Button onClick={() => dispatch({ type: '높은 가격순'})} >높은 가격순</Button>
              <Button onClick={() => dispatch({ type: '최신순'})} >최신순</Button>
              <Button onClick={() => dispatch({ type: '조회순'})} >조회순</Button>
            </ButtonGroup>
          </div>  
        </div>
    )
  }