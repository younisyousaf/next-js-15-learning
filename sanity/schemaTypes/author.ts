import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "string",
    }),
    defineField({
      name: "bio",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
