import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Check } from "lucide-react";
  
  function PricingSection() {
    const pricingPlans = [
      {
        name: "Solo Editor",
        price: "$15/month",
        description: "Perfect for individual editors.",
        features: ["Generate Image Ads", "Generate Video Ads", "Moderate Ads"],
        buttonText: "Get Started - Solo",
      },
      {
        name: "Manager + 3 Editors",
        price: "$35/month",
        description: "Collaborate with a small team.",
        features: ["All Solo Features", "Up to 4 users", "Team Management", "Chat Support", "Collaborative Platform"],
        buttonText: "Get Started - Team",
        
      },
      {
        name: "External API User",
        price: "$10/month",
        description: "Access our content moderation API.",
        features: ["API Access", "Customizable API", "Developer Support"],
        buttonText: "Get Started - API",
      },
    ];
  
    return (
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-gray-900">
            Choose the plan that's right for you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`w-full max-w-sm min-h-[450px] flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg
               hover:ring-2 hover:ring-primary/40`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-gray-900 text-4xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-2" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <a href='/signup'>
              <CardFooter>
                <Button className="w-full text-md">{plan.buttonText}</Button>
              </CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  
  export default PricingSection;
  