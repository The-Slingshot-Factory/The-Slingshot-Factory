"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/actions/contact"

export function ContactForm() {
  const [state, action, isPending] = useActionState(
    async (_state: { success: boolean; message: string } | null, formData: FormData) => {
      return await sendContactEmail(formData)
    },
    null
  )

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative p-8 rounded-lg border border-gray-800/50 bg-gray-900/10 backdrop-blur-sm group hover:border-purple-500/30 transition-all duration-500">
        <div className="text-center mb-8">
          <p className="text-gray-500 font-light mb-2 tracking-wide text-sm uppercase">Contact</p>
          <p className="text-lg text-gray-400">Ready to launch your project?</p>
        </div>

        <form action={action} className="space-y-6">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-lg blur-xl pointer-events-none"></div>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-lg blur-xl pointer-events-none"></div>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300 resize-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-lg blur-xl pointer-events-none"></div>
          </div>

          {/* Submit Button */}
          <div className="relative inline-block w-full group">
            <Button
              type="submit"
              disabled={isPending}
              className="relative w-full bg-transparent border border-gray-600 text-gray-300 hover:text-white py-3 text-lg tracking-wide transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 pointer-events-none">{isPending ? "SENDING..." : "SEND MESSAGE"}</span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
              {/* Border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>
            </Button>
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110 pointer-events-none"></div>
          </div>
        </form>

        {/* Status Message */}
        {state && (
          <div
            className={`mt-6 text-center p-4 rounded-lg border ${
              state.success
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            } transition-all duration-300`}
          >
            {state.message}
          </div>
        )}

        {/* Direct Email */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800/50">
          <p className="text-gray-500 font-light mb-2 text-sm">Or email us directly</p>
          <a
            href="mailto:team@theslingshotfactory.com"
            className="text-lg text-gray-400 tracking-wide hover:text-white transition-all duration-300 relative group inline-block"
          >
            <span className="relative z-10">team@theslingshotfactory.com</span>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl pointer-events-none"></div>
      </div>
    </div>
  )
}
