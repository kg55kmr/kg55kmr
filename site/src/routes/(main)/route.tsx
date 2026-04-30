import type { ImageKitImage } from "~/server/imagekit";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useMediaMatch } from "rooks";
import { Layout } from "~/components/layout";
import headerImages from "~/data/header-images.json";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/(main)")({
  component: RouteComponent,
  staticData: {
    title: "Основний розділ",
    section: {
      id: "/(main)",
      thumbnail: "",
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset("images/розділи/кг55кмр.jpg")}
      aspectRatio="1280 / 358"
      headerExtra={<Photos images={headerImages} />}
    >
      <Outlet />
    </Layout>
  );
}

function Photos(props: { images: ImageKitImage[] }) {
  const [index, setIndex] = useState(0);
  const match = useMediaMatch("(width >= 48rem)", true);
  const itemsPerRow = match ? 4 : 2;
  const images = Array.from(
    { length: itemsPerRow },
    (_, i) => props.images[(index + i) % props.images.length],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + itemsPerRow) % props.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [itemsPerRow, props.images.length]);

  return (
    <div className="relative my-2 aspect-[calc(16/9*2)] md:aspect-[calc(16/9*4)]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="absolute inset-0 grid grid-cols-2 gap-2 overflow-hidden md:grid-cols-4"
        >
          {images.map((image) => (
            <img
              key={image.url}
              src={image.previewUrl}
              className="aspect-video h-full"
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
