import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I claim my $100 Starbucks Reward?",
      answer: "Simply click the 'Claim Now' button, enter your basic details, complete the recommended deals, and your reward will be sent within 24-48 hours."
    },
    {
      question: "Is this reward really free?",
      answer: "Yes! There are no hidden fees. You just need to complete the required partner offers to qualify for your Starbucks reward."
    },
    {
      question: "How long does it take to receive my reward?",
      answer: "Once you've completed all required steps, your $100 Starbucks reward will be processed and delivered to your email within 24-48 business hours."
    },
    {
      question: "Can I use this reward on any Starbucks order?",
      answer: "Absolutely! Your $100 reward works on any Starbucks order — drinks, food, merchandise, and more."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption to protect your personal data. Your information is never sold to third parties."
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-8 mb-12">
      <div className="flex items-center justify-center gap-2 mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="bg-card rounded-2xl shadow-md p-4 border border-secondary">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
