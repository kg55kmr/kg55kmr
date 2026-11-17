import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { type FeedPost2, Feed2 } from "~/components/feed";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/information-digest",
)({
  component: RouteComponent,
  validateSearch: z.object({
    id: z.number().optional(),
  }),
  staticData: {
    title: "Інформаційний дайджест",
  },
});

const entries = import.meta.glob<FeedPost2>(
  "./-safe-educational-environment/*/*.tsx",
  {
    eager: true,
  },
);

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Feed2 items={entries} id={id} />;
}

//         <li>
//           <ExternalLink href="https://drive.google.com/drive/folders/1Dk39QXQTYicI1Ularf_iTY5eMykSDvM9">
//             Методичні розробки, посібники
//           </ExternalLink>
//         </li>
//         <li>
//           <ExternalLink href="https://www.youtube.com/playlist?list=PLRRIw-HYRJOqp7tzV3Buwt7aZGfwj5ZHY">
//             Відеоматеріали
//           </ExternalLink>
//         </li>
//         <li>
//           <ExternalLink href="https://drive.google.com/file/d/1bcWQUpJ490m-HQu4XjXzctAFOt-dgM7F/view">
//             Інформація про відповідальність осіб, причетних до булінгу
//           </ExternalLink>
//         </li>
//       </ul>

