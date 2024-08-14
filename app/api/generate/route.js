import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(res, req) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    try {
        const model = genAI.getGenerativeModel({model: "gemini-pro"});

        const data = await req.join();
        const prompt = data.body + ". State a fact about the pokemon pikachu.";

        const result = await model.generateContent(prompt);
        const text = await result.response().text();

        return NextResponse.json({text: text});
    } catch(error) {
        console.log("An unexpected error occured. Please try again later! " + error);
    }
}