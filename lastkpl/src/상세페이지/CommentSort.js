import { ButtonGroup } from "@mui/material";
import { Button } from "react-bootstrap";

export default function CommentSort({setDesc}) {

    return(
        <ButtonGroup variant="text" aria-label="text button group" className="filter_sort_basic__sort">
              <Button onClick={() => setDesc("c_time,desc")}>최신순</Button>
              <Button onClick={() => setDesc("c_time,asc")}>오래된순</Button>
        </ButtonGroup>
    )
  }