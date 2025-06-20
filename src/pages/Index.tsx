import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  MessageCircle,
  FileText,
  Stethoscope,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Mic,
  Phone,
} from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Health Chat",
      description:
        "Get instant health advice from our AI-powered chatbot in your local language",
      color: "text-herbal",
      bgColor: "bg-herbal/10",
    },
    {
      icon: Mic,
      title: "Voice Support",
      description: "Speak naturally about your symptoms - no need to type",
      color: "text-coral",
      bgColor: "bg-coral/10",
    },
    {
      icon: Stethoscope,
      title: "Doctor Connect",
      description:
        "Connect with certified doctors when you need professional care",
      color: "text-genderblue",
      bgColor: "bg-genderblue/10",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Healthcare support whenever you need it, day or night",
      color: "text-genderpink",
      bgColor: "bg-genderpink/10",
    },
  ];

  const stats = [
    { label: "Rural Families Helped", value: "10,000+", icon: Users },
    { label: "Health Consultations", value: "50,000+", icon: MessageCircle },
    { label: "Response Time", value: "<2 min", icon: Clock },
    { label: "Languages Supported", value: "12+", icon: Heart },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-herbal/5 via-sand to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-indigo sm:text-6xl lg:text-7xl">
              Your Health, <span className="text-herbal">Our Priority</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo/80 max-w-3xl mx-auto">
              AarogyaMitra brings advanced AI-powered healthcare to rural
              communities. Get instant health advice, symptom checking, and
              connect with doctors - all in your local language.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link to="/chat">
                <Button
                  size="lg"
                  className="bg-herbal hover:bg-herbal/90 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chat Now
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-herbal text-herbal hover:bg-herbal/10"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-herbal/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-coral/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-genderblue/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo sm:text-4xl">
              Comprehensive Health Support
            </h2>
            <p className="mt-4 text-lg text-indigo/70 max-w-2xl mx-auto">
              Everything you need for better health outcomes in rural areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-grayborder hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-indigo/70 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-herbal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-herbal-100 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-herbal to-herbal/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Take Care of Your Health?
          </h2>
          <p className="mt-4 text-xl text-herbal-100 max-w-2xl mx-auto">
            Join thousands of rural families who trust AarogyaMitra for their
            healthcare needs
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button
                size="lg"
                className="bg-white text-herbal hover:bg-gray-50"
              >
                <Mic className="mr-2 h-5 w-5" />
                Start Voice Chat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/doctor">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Talk to Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
