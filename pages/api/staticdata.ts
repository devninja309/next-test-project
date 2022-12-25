import axios from "axios";

export default async (req: any, res: any) => {
  try {
    const url = `https://63a5016c2a73744b00838301.mockapi.io/api/v1/articles`;

    const response: any = await axios.get(url);

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
