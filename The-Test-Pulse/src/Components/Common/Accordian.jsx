import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({
  AccordionDescription,
  AccordionTitle,
  time,
  Reply,
}) {
  return (
    <div className="my-2 relative">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <h1 className="font-bold text-md">{AccordionTitle}</h1> 
        </AccordionSummary>
        <AccordionDetails>
          <div>
           <p className="text-blue-400"><span className="text-black font-bold space-x-3 pr-3">Doubt:</span>{AccordionDescription}</p>
           <p className="text-green-500"><span className="text-black font-bold space-x-3 pr-3">Solution:</span>{Reply}</p>
            <p className="text-richblack-100 absolute bottom-0">{time}</p>
          </div>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
