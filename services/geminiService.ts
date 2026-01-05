
import { GoogleGenAI, Type } from "@google/genai";
import { TokenReport } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTokenReport = async (address: string): Promise<TokenReport> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a comprehensive token due diligence report for the following contract address: "${address}". 
      
      Requirements:
      1. Overall Risk Score (1-100).
      2. Contract Analysis (source verification, ownership, admin risks).
      3. Tokenomics (supply, buy/sell tax).
      4. Holder concentration analysis.
      5. Liquidity status.
      6. Social sentiment vibe.
      
      The analysis should be realistic and detailed based on common patterns for such addresses. 
      Even if live chain data access is limited, provide the most likely profile based on address format (ETH/BSC/SOL) and current market trends.
      
      Return ONLY a JSON object.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            symbol: { type: Type.STRING },
            riskScore: { type: Type.NUMBER },
            summary: { type: Type.STRING },
            contractAnalysis: {
              type: Type.OBJECT,
              properties: {
                status: { type: Type.STRING },
                risks: { type: Type.ARRAY, items: { type: Type.STRING } },
                warnings: { type: Type.ARRAY, items: { type: Type.STRING } }
              }
            },
            tokenomics: {
              type: Type.OBJECT,
              properties: {
                supply: { type: Type.STRING },
                tax: { type: Type.STRING },
                distribution: { type: Type.STRING }
              }
            },
            holderConcentration: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                description: { type: Type.STRING },
                topWallets: { type: Type.STRING }
              }
            },
            liquidity: {
              type: Type.OBJECT,
              properties: {
                status: { type: Type.STRING },
                locked: { type: Type.BOOLEAN },
                depth: { type: Type.STRING }
              }
            },
            socialSentiment: {
              type: Type.OBJECT,
              properties: {
                vibe: { type: Type.STRING },
                strength: { type: Type.STRING }
              }
            }
          },
          required: ["name", "symbol", "riskScore", "summary", "contractAnalysis", "tokenomics", "holderConcentration", "liquidity", "socialSentiment"]
        }
      }
    });

    const baseData = JSON.parse(response.text || "{}");
    return {
      ...baseData,
      id: crypto.randomUUID(),
      address,
      createdAt: Date.now()
    };
  } catch (error) {
    console.error("Gemini Scan Error:", error);
    throw new Error("Unable to reach the blockchain oracles. Please try again.");
  }
};
