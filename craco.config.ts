import path from "path";

export const config = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
