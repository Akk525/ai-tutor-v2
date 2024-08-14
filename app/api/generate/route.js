import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    try {
        const data = await req.json();
        const prompt = data.body + "";

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);

        const generatedText = result.response.candidates[0]?.content?.parts[0]?.text || "No text generated";

        return NextResponse.json({ text: generatedText });
    } catch (error) {
        console.log("An unexpected error occurred. Please try again later! " + error);
        return NextResponse.json({ error: "An unexpected error occurred. Please try again later!" }, { status: 500 });
    }
}