import { connectToDB } from "@app/_utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const user_prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(user_prompts), { status: 200 });
  } catch (error) {
    // 500 -> server error
    return new Response("Failed to fetch user's prompts", { status: 500 });
  }
};
