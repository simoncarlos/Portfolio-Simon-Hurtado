import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import mockupSait from "../assets/mockups/sait-computer.png";
import mockupLacroix from "../assets/mockups/lacroix-computer.png";
import mockupHideki from "../assets/mockups/hideki-computer.png";

const mockups = [mockupSait, mockupHideki, mockupLacroix];
const colors = ["255, 201, 10", "222, 45, 39", "35, 43, 105"];
const demos = [
  "https://alveartmt.web.app/",
  "https://hideki-task.web.app/",
  "https://lacroix-patissier-60604.web.app/",
];
const repos = [
  "https://github.com/simoncarlos/Sait-River-Plate",
  "https://github.com/simoncarlos/Hideki-Task-Simon-Hurtado",
  "https://github.com/simoncarlos/Lacroix-Patissier-Simon-Hurtado",
];

const useTranslatedData = () => {
  const { t } = useTranslation();

  const proyects = useMemo(() => {
    const proyectsData = t("proyects.items", { returnObjects: true });
    return proyectsData.map((project, index) => ({
      ...project,
      mockup: mockups[index],
      color: colors[index],
      demo: demos[index],
      repositorio: repos[index],
    }));
  }, [t]);

  const experience = useMemo(() => {
    return t("experience.items", { returnObjects: true });
  }, [t]);

  return { proyects, experience };
};

export default useTranslatedData;
