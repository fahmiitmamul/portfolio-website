"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="container py-24 space-y-12">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full border border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:bg-gray-900/30 hover:backdrop-blur-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Here's how you can reach me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/40 hover:backdrop-blur-xl transition-all duration-300">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">mail@itmamulfahmi.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/40 hover:backdrop-blur-xl transition-all duration-300">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Banyumas, Indonesia</p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="font-medium mb-2">Working Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9AM - 5PM
                </p>
                <p className="text-muted-foreground">
                  Weekend: Available for urgent matters
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:bg-gray-900/30 hover:backdrop-blur-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your message"
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gradientGlass"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
