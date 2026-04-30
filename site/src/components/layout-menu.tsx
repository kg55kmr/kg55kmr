import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown, Menu as LucideMenu } from "lucide-react";
import { type ComponentProps, createContext, useContext, useId } from "react";
import { ExternalLink, Link } from "~/components/link";
import {
  type GroupItem,
  type NavigationItem,
  type Section,
  type SectionItem,
  getLocalLinkFromItem,
  getPathFromItem,
  isLocalItem,
} from "~/data/sections/types";
import { useRouteByPath } from "~/hooks/use-sections";
import { useSectionMenu } from "~/hooks/use-sections";
import { useSticky } from "~/hooks/use-sticky";
import { cn } from "~/lib/utils";
import { Responsive } from "./responsive";

const iconColors = [
  "text-amber-300",
  "text-lime-300",
  "text-teal-300",
  "text-indigo-300",
  "text-pink-300",
];

const iconColorsLength = iconColors.length;

type MenuContextType = {
  groupIndexMap: Map<string, string>;
};

const MenuContext = createContext<MenuContextType | null>(null);

export function LayoutMenu() {
  const menu = useSectionMenu()!;
  const ref = useSticky();
  const groupIndexMap = useGroupIndexMap(menu);

  return (
    <NavigationMenu.Root
      ref={ref}
      className="font-philosopher relative z-5 w-full bg-blue-950 text-white"
    >
      <MenuContext value={{ groupIndexMap }}>
        <Responsive
          when="lg"
          render={<Desktop data={menu} />}
          fallback={<Mobile data={menu} />}
        />
      </MenuContext>
    </NavigationMenu.Root>
  );
}

function Desktop(props: { data: SectionItem[] }) {
  return (
    <>
      <NavigationMenu.List className="flex items-center justify-center">
        {props.data.map((item, i) => (
          <SectionMenuItem
            key={`${props.data}-${item.title}-${i}`}
            item={item}
          />
        ))}
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner className="z-5 max-w-(--available-width)">
          <NavigationMenu.Popup className="relative top-2">
            <NavigationMenu.Arrow className="z-1 -translate-y-3.75 fill-blue-950">
              <ArrowSvg />
            </NavigationMenu.Arrow>
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </>
  );
}

function Mobile(props: { data: SectionItem[] }) {
  return (
    <>
      <NavigationMenu.List className="flex justify-end">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <NavigationMenu.Icon>
              <LucideMenu className="size-10" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="flex max-h-(--available-height) flex-col gap-5 overflow-y-auto overscroll-y-contain rounded-md border-2 border-white bg-blue-950 p-2 shadow-[0_0_5px] shadow-black">
            {props.data.map((sectionItem) => (
              <Groups
                key={sectionItem.title}
                items={sectionItem.groups}
                sectionItemTitle={sectionItem.title}
                isMobile
              />
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner className="z-5 max-w-(--available-width)">
          <NavigationMenu.Popup className="relative max-h-(--available-height)">
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </>
  );
}

function SectionMenuItem(props: { item: SectionItem }) {
  const { item } = props;
  const id = useId();

  return (
    <NavigationMenu.Item value={id}>
      <NavigationMenu.Trigger className="font-philosopher flex items-center px-5 py-2 text-xl data-popup-open:bg-white data-popup-open:text-black">
        {item.title}{" "}
        <NavigationMenu.Icon className="transition-transform duration-200 data-popup-open:rotate-180">
          <ChevronDown className="size-4" />
        </NavigationMenu.Icon>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        className={
          "rounded-md border-2 border-white bg-blue-950 p-2 shadow-[0_0_5px] shadow-black " +
          "flex max-h-[calc(var(--available-height)-0.5rem)] flex-wrap gap-5 overflow-y-auto"
        }
      >
        <Groups items={item.groups} sectionItemTitle={item.title} />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function Groups(props: {
  items: GroupItem[];
  sectionItemTitle: string;
  isMobile?: boolean;
}) {
  if (props.items.length === 1)
    return (
      <Group
        group={props.items[0]}
        sectionItemTitle={props.sectionItemTitle}
        showGroupTitle={props.isMobile === true}
        isMobile={props.isMobile}
      />
    );

  return props.items.map((group) => (
    <Group
      key={group.groupTitle}
      group={group}
      sectionItemTitle={props.sectionItemTitle}
      showGroupTitle
      isMobile={props.isMobile}
    />
  ));
}

function Group(props: {
  group: GroupItem;
  sectionItemTitle: string;
  showGroupTitle: boolean;
  isMobile?: boolean;
}) {
  const ctx = useContext(MenuContext);
  const groupTitle = props.isMobile
    ? (props.group.mobileGroupTitle ?? props.group.groupTitle)
    : props.group.groupTitle;
  const groupClassName = ctx?.groupIndexMap.get(
    props.sectionItemTitle + props.group.groupTitle,
  );
  return (
    <>
      <div className="flex flex-col">
        {props.showGroupTitle && (
          <div className={cn("font-philosopher text-xl", groupClassName)}>
            {groupTitle}
          </div>
        )}
        {props.group.items.map((item, i) => (
          <MenuItem
            key={getPathFromItem(item) + i}
            item={item}
            groupClassName={groupClassName}
          />
        ))}
      </div>
    </>
  );
}

function MenuItem(props: { item: NavigationItem; groupClassName?: string }) {
  const { item } = props;
  const { title } = useRouteByPath()(item);
  const link = isLocalItem(item) ? (
    <Link {...getLocalLinkFromItem(item)} />
  ) : (
    <ExternalLink {...item} />
  );

  return (
    <NavigationMenu.Link
      render={link}
      closeOnClick
      className="group -mx-2 flex gap-1 px-2 hover:bg-white"
    >
      {item.icon && (
        <item.icon
          className={cn(
            "text-border size-5 shrink-0 translate-y-1 group-hover:text-black",
            props.groupClassName,
          )}
        />
      )}
      <div className="font-philosopher text-xl text-white group-hover:text-black">
        {title}
      </div>
    </NavigationMenu.Link>
  );
}

function ArrowSvg(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
      strokeLinejoin="round"
      {...props}
    >
      <path d="m20 17 -8 -8 -8 8 z" stroke="none" />
      <path d="m20 16 -8 -7 -8 7" fill="none" />
    </svg>
  );
}

function useGroupIndexMap(menu: Section) {
  "use memo";

  const map = new Map<string, string>();
  let counter = 0;
  for (const sectionItem of menu) {
    for (const group of sectionItem.groups) {
      map.set(
        sectionItem.title + group.groupTitle,
        iconColors[counter++ % iconColorsLength],
      );
    }
  }

  return map;
}
