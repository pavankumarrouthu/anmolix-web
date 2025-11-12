'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from '@/components/layout/logo';

export default function AnmolixLanding() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-800">
          <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
          <a href="#vision" className="hover:text-blue-700 transition-colors">Vision</a>
          <a href="#product" className="hover:text-blue-700 transition-colors">Product</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
        </nav>
      </header>

      <div className="h-20" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center justify-center py-28 md:py-40 px-6 bg-gradient-to-b from-white to-blue-100">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900 leading-tight">
          One Platform for <span className="text-blue-700">Students, Teams, and Founders</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-slate-600 max-w-3xl mb-8">
          Anmolix helps you organize, collaborate, and achieve goals — whether you're a student building a dream, a founder leading innovation, or a team striving for excellence.
        </motion.p>
        <div className="flex gap-4">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-lg shadow-md">Start Free</Button>
          <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-xl text-lg">Learn More</Button>
        </div>
        <p className="text-slate-500 mt-6 text-sm">Trusted by growing startups, creators, and individuals across industries 🌍</p>
      </section>

      {/* Who It's For Section */}
      <section id="for-whom" className="px-6 md:px-10 py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">Made for Everyone Who Builds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            title: 'Students',
            desc: 'Track your goals, manage projects, and collaborate on academic or startup ideas seamlessly.'
          }, {
            title: 'Teams & Startups',
            desc: 'Unify communication, tasks, and analytics into one intelligent platform for smoother growth.'
          }, {
            title: 'Founders & MSEs',
            desc: 'Get AI-powered insights, performance dashboards, and automation to scale your business smartly.'
          }].map((item, i) => (
            <Card key={i} className="border-blue-100 bg-gradient-to-b from-blue-50 to-white shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">{item.title}</h4>
                <p className="text-slate-600 text-base">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section id="highlights" className="px-6 md:px-10 py-20 bg-blue-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">Why You’ll Love Anmolix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            title: 'AI That Works With You',
            desc: 'Automate repetitive work, set smart reminders, and focus on what truly matters.'
          }, {
            title: 'Collaboration Simplified',
            desc: 'Chat, share, and manage all your team’s work in one place — no more tool-switching.'
          }, {
            title: 'Insights That Inspire Action',
            desc: 'Visual analytics to measure progress and drive decisions with clarity and confidence.'
          }].map((item, i) => (
            <Card key={i} className="border-blue-100 bg-gradient-to-b from-white to-blue-50 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">{item.title}</h4>
                <p className="text-slate-600 text-base">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="px-6 md:px-10 py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Vision & Mission</h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10">
          We believe productivity should feel natural — like having an intelligent assistant who understands your goals and helps you achieve them with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-blue-50 shadow-md border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">Vision</h3>
              <p className="text-slate-600">To be the most adaptive productivity intelligence system — empowering humans to do their best work every day.</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 shadow-md border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">Mission</h3>
              <p className="text-slate-600">To merge AI, collaboration, and analytics into a single, user-friendly platform that redefines how work happens.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Supercharge Your Productivity?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Join the movement towards intelligent, effortless, and goal-driven work — for individuals, teams, and organizations.</p>
        <Button className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg">Get Started Today</Button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-10 py-20 bg-blue-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Get in Touch</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Have questions or want to partner with us? We’d love to connect. Whether you're a student, founder, or enterprise — Anmolix is for you.
        </p>
        <div className="space-y-3">
          <p className="text-lg font-medium text-blue-700">📧 contact@anmolix.com</p>
          <p className="text-slate-500">📍 Hyderabad, India</p>
        </div>
        <p className="mt-6 text-slate-500">Follow us on LinkedIn & Twitter for product updates</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-blue-100 text-slate-500 text-sm bg-white">
        © 2025 Anmolix Technologies — Empowering Productivity. Redefining Intelligence.
      </footer>
    </div>
  );
}
