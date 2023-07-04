import { mdiAccount } from "@mdi/js";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default defineNuxtPlugin({
  setup({ vueApp }) {
    const vuetify = createVuetify({
      blueprint: md3,
      ssr: true,
      defaults: {
        VBtn: {
          color: "primary",
          variant: "flat",
        },
      },
      icons: {
        defaultSet: "mdi",
        aliases: {
          ...aliases,
          account: mdiAccount,
        },
        sets: {
          mdi,
        },
      },
    });

    vueApp.use(vuetify);
  },
});
