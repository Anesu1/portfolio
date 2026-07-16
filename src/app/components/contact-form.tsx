"use client";
import { useState, type FormEvent } from "react";
import ClickBurst from "./click-burst";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex max-w-full flex-col justify-center items-stretch gap-4">
        <p className="text-color-001 text-lg" role="status" aria-live="polite">
          Thanks — message sent. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-full flex-col justify-center items-stretch gap-10 max-md:gap-[1.5625rem] md:max-lg:gap-10"
      aria-label="Contact form"
    >
      <div className="flex max-w-full flex-col gap-15 max-md:gap-5 md:max-lg:gap-10">
        <div className="flex max-w-full gap-10 max-lg:flex-col max-md:gap-5 md:max-lg:gap-7.5">
          <div className="w-full max-w-92.5 block">
            <label className="block mb-6 text-color-001 font-medium cursor-default max-md:mb-4 md:max-lg:mb-5" htmlFor="name">
              Name*
            </label>
            <input
              className="w-full h-[1.9375rem] border-b border-solid border-b-border block pb-1.5 overflow-clip align-middle text-color-001 cursor-text focus:border-b-accent"
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
              required
            />
          </div>
          <div className="w-full max-w-92.5 block">
            <label className="block mb-6 text-color-001 font-medium cursor-default max-md:mb-4 md:max-lg:mb-5" htmlFor="email">
              Email*
            </label>
            <input
              className="w-full h-[1.9375rem] border-b border-solid border-b-border block pb-1.5 overflow-clip align-middle text-color-001 cursor-text focus:border-b-accent"
              id="email"
              name="email"
              placeholder="E-mail address"
              type="email"
              required
            />
          </div>
        </div>
        <div className="block max-w-full">
          <label className="block mb-6 text-color-001 font-medium cursor-default max-md:mb-4 md:max-lg:mb-5" htmlFor="message">
            Message*
          </label>
          <textarea
            className="w-full h-25.5 min-h-25.5 border-b border-solid border-b-border block min-w-full max-w-full pb-1.5 overflow-auto align-middle text-color-001 whitespace-pre-wrap [overflow-wrap:break-word] cursor-text max-md:h-20 max-md:min-h-20 md:max-lg:h-22.5 md:max-lg:min-h-22.5 focus:border-b-accent"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
      </div>
      <div className="block">
        <ClickBurst>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-auto h-11 inline-flex relative z-1 py-2.5 pr-[1.9375rem] pl-10.5 rounded-lg justify-center items-center gap-2 overflow-clip text-color-001 font-medium text-center uppercase whitespace-pre text-nowrap bg-accent cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Submit now"}
          </button>
        </ClickBurst>
        <p className="mt-3 text-sm text-accent" role="status" aria-live="polite">
          {status === "error" ? "Something went wrong — try again, or email directly." : ""}
        </p>
      </div>
    </form>
  );
}
