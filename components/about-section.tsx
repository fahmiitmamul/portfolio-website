"use client";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBadge } from "@/components/ui/gradient-badge";
import { CodeIcon, Lightbulb, Server, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="container py-24 space-y-8 max-w-5xl">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <GradientBadge text="Full-stack Software Engineer" />
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get to know me and my background
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-8 items-center justify-center text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-center">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with a strong foundation in
              web technologies. I enjoy creating elegant solutions to complex
              problems and have experience working with various technologies
              across the stack.
            </p>
            <p className="text-muted-foreground">
              With a background in several years of industry experience, I've
              worked on projects ranging from small business websites to
              large-scale enterprise applications.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me listening music, reading, or
              experimenting with new technologies to expand my skill set.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <CodeIcon />
              <h3 className="text-xl font-bold">Fullstack Development</h3>
              <p className="text-muted-foreground">
                Building complete applications from front-end to back-end with a
                focus on scalability and performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <Server />
              <h3 className="text-xl font-bold">Backend Architecture</h3>
              <p className="text-muted-foreground">
                Designing robust and scalable server systems with optimized
                database structures.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <Lightbulb />
              <h3 className="text-xl font-bold">Problem Solving</h3>
              <p className="text-muted-foreground">
                Tackling complex technical challenges with innovative and
                efficient solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-2">
              <Users />
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                Tackling complex technical challenges with innovative and
                efficient solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
