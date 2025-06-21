import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Send, Volume2 } from "lucide-react";
import { useState } from "react";

export default function VoiceChatbot() {
  const [isRecording, setIsRecording] = useState(false);

  const messages = [
    {
      type: "bot",
      text: "Hello! I'm AarogyaMitra, your AI health assistant. How can I help you today?",
      time: "2 min ago",
    },
    {
      type: "user",
      text: "I have been feeling dizzy and having headaches for the past few days.",
      time: "1 min ago",
    },
    {
      type: "bot",
      text: "I understand you're experiencing dizziness and headaches. Can you tell me more about when these symptoms started and if there are any triggers?",
      time: "Just now",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-herbal/5 to-sand">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-indigo">AI Health Chat</h1>
            <p className="text-indigo/70 mt-2">
              Speak or type to get instant health advice
            </p>
          </div>

          {/* Chat Messages */}
          <Card className="mb-6 h-96 overflow-y-auto">
            <CardContent className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === "user"
                        ? "bg-herbal text-white"
                        : "bg-gray-100 text-indigo"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.type === "user"
                          ? "text-herbal-100"
                          : "text-indigo/50"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Voice Recording Interface */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  size="lg"
                  variant={isRecording ? "destructive" : "default"}
                  className={`w-16 h-16 rounded-full ${
                    !isRecording
                      ? "bg-herbal hover:bg-herbal/90"
                      : "bg-softred hover:bg-softred/90"
                  }`}
                  onClick={() => setIsRecording(!isRecording)}
                >
                  <Mic className="w-6 h-6" />
                </Button>
                <div className="text-center">
                  <p className="text-sm font-medium text-indigo">
                    {isRecording ? "Recording..." : "Tap to speak"}
                  </p>
                  <p className="text-xs text-indigo/70">
                    {isRecording
                      ? "Tap again to stop recording"
                      : "Or type your message below"}
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full"
                >
                  <Volume2 className="w-6 h-6" />
                </Button>
              </div>

              {/* Text Input as Alternative */}
              <div className="mt-6 flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your health question here..."
                  className="flex-1 px-4 py-2 border border-grayborder rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal"
                />
                <Button className="bg-herbal hover:bg-herbal/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
