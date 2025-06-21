import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function SymptomForm() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-herbal/5 to-sand py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-coral rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-indigo">
                Symptom Checker
              </CardTitle>
              <p className="text-indigo/70">
                Detailed symptom form coming soon...
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-indigo/70">
                  This feature is under development. Please use the voice chat
                  for now.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
