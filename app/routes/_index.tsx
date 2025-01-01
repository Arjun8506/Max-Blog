import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Max Blogs" },
    { name: "description", content: "Welcome to Max Blogs!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black/95 text-white text-2xl text-center font-roboto">
      Home Page
    </div>
  );
}
