import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Alert } from "@mui/material";
import AskDoubt from "./AskDoubtForm";
import AccordionUsage from "../../Common/Accordian";
import Accordion2 from "../../Common/Accordian2";

const Doubts = [
  {
    id: 1,
    subject: "Integration Techniques in Calculus",
    message:
      "I'm having trouble understanding when to use integration by parts versus substitution. Can you explain the difference?",
    file: "calculus_problems.pdf",
    timestamp: "2024-08-10T14:30:00Z",
    teacherReply: {
      message:
        "Integration by parts is used when the integrand is a product of two functions, and substitution is better when the integrand contains a function and its derivative. I've added some examples in the attached file.",
      file: "integration_examples.pdf",
      timestamp: "2024-08-10T18:00:00Z",
    },
  },
  {
    id: 2,
    subject: "Physics - Newton's Laws",
    message:
      "Can someone explain the concept of inertia and how it relates to Newton's First Law?",
    file: null,
    timestamp: "2024-08-11T09:15:00Z",
    teacherReply: {
      message:
        "Inertia is the resistance of an object to changes in its state of motion. Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by a force.",
      file: null,
      timestamp: "2024-08-11T12:30:00Z",
    },
  },
  {
    id: 3,
    subject: "Organic Chemistry - Reaction Mechanisms",
    message:
      "I don't understand the mechanism of the SN2 reaction. Could you provide a step-by-step explanation?",
    file: "reaction_mechanisms.png",
    timestamp: "2024-08-11T11:45:00Z",
    teacherReply: {
      message:
        "The SN2 reaction is a single-step process where the nucleophile attacks the electrophile from the opposite side of the leaving group. The attached diagram should help clarify.",
      file: "SN2_mechanism_diagram.jpg",
      timestamp: "2024-08-11T15:00:00Z",
    },
  },
  {
    id: 4,
    subject: "History - World War II",
    message:
      "What were the main causes of World War II, and how did they lead to the conflict?",
    file: null,
    timestamp: "2024-08-12T13:00:00Z",
    teacherReply: {
      message:
        "The main causes were the Treaty of Versailles, economic instability, and the rise of totalitarian regimes. These factors combined to create a situation where war became inevitable.",
      file: "WWII_causes_summary.pdf",
      timestamp: "2024-08-12T16:45:00Z",
    },
  },
  {
    id: 5,
    subject: "Computer Science - Sorting Algorithms",
    message:
      "Can you explain the difference between quicksort and mergesort, and when to use each?",
    file: "sorting_algorithms_code.txt",
    timestamp: "2024-08-12T16:20:00Z",
    teacherReply: {
      message:
        "Quicksort is generally faster for smaller datasets and when you can afford in-place sorting. Mergesort is stable and works better with large datasets or linked lists. Check the attached code for examples.",
      file: "sorting_algorithms_comparison.txt",
      timestamp: "2024-08-12T19:30:00Z",
    },
  },
  {
    id: 6,
    subject: "Mathematics - Probability Theory",
    message:
      "How do I calculate the probability of independent and dependent events? Examples would be helpful.",
    file: "probability_examples.xlsx",
    timestamp: "2024-08-13T08:50:00Z",
    teacherReply: {
      message:
        "For independent events, multiply the probabilities of each event. For dependent events, adjust the probability of the second event based on the first. Refer to the attached examples for clarification.",
      file: "independent_dependent_events_examples.xlsx",
      timestamp: "2024-08-13T11:00:00Z",
    },
  },
  {
    id: 7,
    subject: "Biology - Photosynthesis Process",
    message:
      "Could you clarify the light-dependent and light-independent reactions in photosynthesis?",
    file: "photosynthesis_diagram.jpg",
    timestamp: "2024-08-13T10:25:00Z",
    teacherReply: {
      message:
        "The light-dependent reactions convert light energy into chemical energy (ATP and NADPH), while the light-independent reactions (Calvin cycle) use that energy to synthesize glucose.",
      file: "photosynthesis_process_explained.pdf",
      timestamp: "2024-08-13T13:45:00Z",
    },
  },
  {
    id: 8,
    subject: "Economics - Supply and Demand",
    message:
      "What factors influence the elasticity of demand, and how does it affect pricing?",
    file: null,
    timestamp: "2024-08-13T12:15:00Z",
    teacherReply: {
      message:
        "Factors include the availability of substitutes, the necessity of the product, and time horizon. Elasticity affects pricing strategies, with elastic demand leading to price sensitivity.",
      file: "elasticity_of_demand.pdf",
      timestamp: "2024-08-13T14:30:00Z",
    },
  },
];

export default function InboxTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            className="bg-white rounded-lg"
            aria-label="lab API tabs example"
          >
            <Tab label="Ask Doubts" value="1" />
            <Tab label="Open" value="2" />
            <Tab label="Close" value="3" />
            <Tab label="Expolre Doubts" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <Alert className="-my-4" severity="info">
              Please explore the Other Faq's first before asking any of doubt
            </Alert>
            <div className="mt-8 rounded-lg  w-full">
              <AskDoubt />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          {Doubts.map((items) => (
            <AccordionUsage
              AccordionTitle={items.subject}
              AccordionDescription={items.message}
              time={items.timestamp}
              Reply={items.teacherReply.message}
            />
          ))}
        </TabPanel>
        <TabPanel value="3">
          {Doubts.map((items) => (
            <Accordion2
              AccordionTitle={items.subject}
              AccordionDescription={items.message}
              time={items.timestamp}
              Reply={items.teacherReply.message}
            />
          ))}
        </TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
