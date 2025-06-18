import React from "react";

export default function Hero() {
  const slides = [
    { text: "Home" },
    { text: "New Bestseller" },
    { text: "Culture" },
    { text: "Technology" },
    { text: "Business" },
    { text: "US Politics" },
    { text: "Finance" },
    { text: "Food & Drink" },
    { text: "Sport" },
    { text: "Art & Illustratiion" },
    { text: "World Politics" },
    { text: "Health Politics" },
    { text: "Fashion & Beauty" },
    { text: "News" },
    { text: "Music" },
    { text: "Faith & Spirituality" },
    { text: "Client & Environment" },
    { text: "Science" },
    { text: "Literature" },
    { text: "Fiction" },
    { text: "Design" },
    { text: "Health & Wellness" },
    { text: "Travel" },
    { text: "Parenting" },
    { text: "Philosophy" },
    { text: "Comics" },
    { text: "Crypto" },
    { text: "International" },
    { text: "History" },
    { text: "Humor" },
    { text: "Education" },
  ];

  const contents = [
    {
      name: "Billy Carpenter",
      description:
        "In case you missed it: I spent a few weeks putting together my biggest newsletter yet. It’s a deep dive into the striker market. Written from an Arsenal perspective, but useful for anyone after a new #9. Dozens of profiles, lots of detail. Enjoy.",
      image:
        "https://substackcdn.com/image/fetch/w_848,h_444,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fd72ab5-b733-48d1-ad73-4406bfc8c4ef_1080x720.jpeg",
    },
  ];

  return (
    <div className="w-full mt-5 bg-blue-500 p-4 mx-30">
      <div className="flex gap-6 w-full overflow-hidden">
        {slides.map((slide) => (
          <button className="px-2 text-sm w-auto rounded-lg bg-gray-700">
            {slide.text}
          </button>
        ))}
      </div>
    </div>
  );
}
