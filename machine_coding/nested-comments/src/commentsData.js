import { nanoid } from "nanoid";

export const commentsData = [
  {
    id: nanoid(),
    text: "I am root comment",
    items: [
      {
        id: nanoid(),
        text: "I am first children",
        items: [
          {
            id: nanoid(),
            text: "I am first first child",
            items: [],
          },
        ],
      },
      {
        id: nanoid(),
        text: "I am second children",
        items: [],
      },
    ],
  },
];
