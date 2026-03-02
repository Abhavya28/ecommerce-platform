import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";

const ProductCategories = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-headings">Product Categories</h1>
      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">
            Vitamins & Supplements
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">
            Personal Care & Beauty
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">Medicines</span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">
            Health & First Aids
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">
            Weight Loss & Fitness
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          backgroundColor: "transparent",
          "&:before": { display: "none" },
        }}
        className=""
      >
        <AccordionSummary
          expandIcon={<ChevronDown size={18} />}
          sx={{
            padding: 0,
            "& .MuiAccordionSummary-content": { margin: 0 },
          }}
        >
          <span className="font-semibold text-primary">Mum & Baby</span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="flex flex-col text-primary gap-2 text-sm">
              <li className=" hover:text-black ">Vitamins A-E (221)</li>
              <li className=" hover:text-black ">
                Multivitamins & Minerals (303)
              </li>
              <li className=" hover:text-black ">Bone & Joints Health (321)</li>
              <li className=" hover:text-black ">Magnesium (117)</li>
              <li className=" hover:text-black ">Probiotics (196)</li>
              <li className=" hover:text-black ">
                Fish Oil & Omega 3, 6, 9 (47)
              </li>
              <li className=" hover:text-black ">Homeopathy (39)</li>
              <li className=" hover:text-black ">Herbal (239)</li>
              <li className=" hover:text-black ">Antioxidants (307)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductCategories;
