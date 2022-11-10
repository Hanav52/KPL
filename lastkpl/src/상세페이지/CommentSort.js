import { ButtonGroup } from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function CommentSort() {

  const dispatch = useDispatch();

    return(
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => dispatch({ type: '최신순'})} >최신순</Button>
              <Button onClick={() => dispatch({ type: '오래된순'})} >오래된순</Button>
            </ButtonGroup>
    )
  }