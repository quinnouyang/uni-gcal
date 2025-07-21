import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// import googleappsscript from "google-apps-script";

export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,ts,gs}"],
  // plugins: {
  //   googleappsscript: googleappsscript,
  // },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    tseslint.configs.strict,
  ],
  languageOptions: {
    globals: {
      googleappsscript: "readonly",
    },
  },
});
