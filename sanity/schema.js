export const schema = {
  types: [
    // Create a basic sanity document type
    {
      title: "Product",
      name: "product",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Price",
          name: "price",
          type: "number",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
      ],
    },
  ],
};
