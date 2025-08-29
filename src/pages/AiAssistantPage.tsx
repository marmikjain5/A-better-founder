import { useState } from "react";

function AiAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const callGemini = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
});

const data = await res.json();
console.log("Gemini raw response:", data); // 👈 See exact API structure

// temporary: still display the full JSON
setResponse(JSON.stringify(data, null, 2));


      // ✅ Extract Gemini's reply safely
      const output =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";

      setResponse(output);
    } catch (err) {
      setResponse("❌ Error fetching response.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>

      <textarea
        className="w-full border rounded p-2"
        rows={4}
        placeholder="Type your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={callGemini}
        disabled={loading}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask Gemini"}
      </button>

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-100 whitespace-pre-line">
          <strong>Gemini:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AiAssistantPage;
