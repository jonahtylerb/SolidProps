import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["solid-js"],
      dts: true,
      resolvers: [
        IconsResolver({
          prefix: "Icon",
          extension: "jsx",
        }),
      ],
    }),
    solid(),
    Icons({
      compiler: "solid",
    }),
  ],
});
