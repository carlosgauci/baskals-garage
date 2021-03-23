// Data for the Services section (what we do)

import {
  Breakdown,
  Diagnostics,
  Engine,
  Parts,
  Repairs,
  Servicing,
} from "../images/svg"

export const data = [
  {
    id: 1,
    title: "Mechanical Repairs",
    text:
      "We repair all types of vehicles and mechanical equipment, including heavy machinery and industrial equipment.",
    icon: Repairs,
  },
  {
    id: 2,
    title: "Vehicle Servicing",
    text:
      "Complete vehicle servicing is offered at our garage for all types of vehicles including cars & trucks.",
    icon: Servicing,
  },
  {
    id: 3,
    title: "Advanced Diagnostics",
    text:
      "We are fully licensed to offer Advanced diagnostics such as TEXA TXT diagnostics and DAF Davie Paccar diagnostics.",
    icon: Diagnostics,
  },
  {
    id: 4,
    title: "On-Site Breakdown Repairs",
    text:
      "Having car touble? Call us and we'll come to you anywhere in Gozo and repair your vehicle on site.",
    icon: Breakdown,
  },
  {
    id: 5,
    title: "Complete Engine Rebuilding",
    text:
      "We offer complete engine rebuilding services at our garage for cars, trucks and heavy machinery equipment.",
    icon: Engine,
  },
  {
    id: 6,
    title: "Sale of Parts",
    text: "New and rebuilt parts are available for purchase at our garage.",
    icon: Parts,
    // button: true,
  },
]
