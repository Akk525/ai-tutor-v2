import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    try {
        // Extracting the body from the request
        const data = await req.json();
        const prompt = data.body + "";

        // Generating content using the Google Generative AI
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);

        // Extract the generated text from the nested structure
        const generatedText = result.response.candidates[0]?.content?.parts[0]?.text || "No text generated";

        console.log("Generated text:", generatedText);

        // Sending back the generated text as a JSON response
        return NextResponse.json({ text: generatedText });
    } catch (error) {
        console.log("An unexpected error occurred. Please try again later! " + error);
        return NextResponse.json({ error: "An unexpected error occurred. Please try again later!" }, { status: 500 });
    }
}