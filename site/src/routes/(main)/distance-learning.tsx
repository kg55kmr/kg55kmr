import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import z from "zod";
import { Loader } from "~/components/loader";
import { Tabs } from "~/components/tabs";
import { yearsList } from "~/data/distance-learning";
import { DistanceLearning } from "./-components/distance-learning";

export const Route = createFileRoute("/(main)/distance-learning")({
  component: RouteComponent,
  validateSearch: z.object({
    years: z.string().default(yearsList[0]),
    class: z.string().default("1-А"),
  }),
  staticData: { title: "Дистанційне навчання" },
  ssr: false,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => ({
    title: `Дистанційне навчання ${deps.years}`,
  }),
});

function RouteComponent() {
  const { years, class: className } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <div>
      <Tabs
        value={years}
        onValueChange={(years) =>
          navigate({
            search: { years },
            replace: true,
            resetScroll: false,
          })
        }
      >
        {yearsList.map((years) => (
          <Tabs.Tab key={years} id={years} title={`${years} н.р.`}>
            <Suspense fallback={<Loader />}>
              <DistanceLearning
                activeTab={className}
                onTabClick={(className) =>
                  navigate({
                    search: (s) => ({ ...s, class: className }),
                    replace: true,
                    resetScroll: false,
                  })
                }
                years={years}
              />
            </Suspense>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
}
