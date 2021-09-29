import butter from "./butter-client";
export type BulletPoint = {
  title: string;
  description: string;
};

export type Landing = {
  headline: string;
  bulletpoints: BulletPoint[];
};

export const getLandingData = async () => {
  try {
    const response = await butter.page.retrieve("*", "landing");
    // console.log(response.data.data.fields);
    return response.data.data.fields as Landing;
  } catch (error) {
    console.error(error);
  }
};
