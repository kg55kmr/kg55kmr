import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "5 принципів гендерно чутливої профорієнтації",
  preview:
    "Гендерно чутлива профорієнтація - це рівні можливості для кожного здобувача освіти у виборі майбутньої професії.",
  content: <img src={image} className="w-full" />,
});
