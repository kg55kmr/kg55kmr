import type { Sections } from "./types";
import { educationalProcess } from "./educational-process";
import { educationalWork } from "./educational-work";
import { main } from "./main";
import { occupationalSafety } from "./occupational-safety";
import { parentForum } from "./parent-forum";
import { socialAndPsychologicalService } from "./social-and-psychological-service";

export const sections: Sections = {
  "/(main)": main,
  "/educational-process": educationalProcess,
  "/educational-work": educationalWork,
  "/occupational-safety": occupationalSafety,
  "/social-and-psychological-service": socialAndPsychologicalService,
  "/parent-forum": parentForum,
};
