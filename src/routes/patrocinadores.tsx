import { createFileRoute } from "@tanstack/react-router";

import { SponsorPage } from "../patrocinadores";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Painel do Patrocinador — Play Analytics" },
      {
        name: "description",
        content: "Encontre eventos, meça ROI e amplie sua marca no esporte do Paraná.",
      },
    ],
  }),
  component: SponsorPage,
});
