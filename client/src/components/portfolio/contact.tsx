import { motion } from "framer-motion";
import { Mail, Send, ExternalLink, Loader2, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { personalInfo } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  message: z.string().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try email directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-1/3 right-[5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have a question or want to connect? Reach out through the form or contact details below."
        />

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <Card className="overflow-visible h-full" data-testid="card-contact-form">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm">Send a Message</h3>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Hi Mohan, I'd like to connect about..."
                              className="resize-none"
                              data-testid="input-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={mutation.isPending}
                      data-testid="button-send-message"
                    >
                      {mutation.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <Card className="overflow-visible h-full" data-testid="card-contact-details">
              <CardContent className="p-5 sm:p-6 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm">Contact Details</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      data-testid="link-contact-email"
                    >
                      {personalInfo.email}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      data-testid="link-contact-phone"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Location</p>
                    <p className="text-sm font-medium" data-testid="text-contact-location">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <p className="text-xs font-medium text-muted-foreground">Connect</p>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="justify-start gap-2" asChild>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="link-contact-linkedin"
                      >
                        <SiLinkedin className="w-4 h-4" />
                        LinkedIn Profile
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start gap-2" asChild>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="link-contact-github"
                      >
                        <SiGithub className="w-4 h-4" />
                        GitHub Profile
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start gap-2" asChild>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        data-testid="link-contact-resume"
                      >
                        <Mail className="w-4 h-4" />
                        Download Resume
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </a>
                    </Button>
                  </div>
                </div>

                <Separator />

                <p className="text-xs text-muted-foreground leading-relaxed">
                  I'm currently open to Data Engineer and GenAI Engineer opportunities.
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about data!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
