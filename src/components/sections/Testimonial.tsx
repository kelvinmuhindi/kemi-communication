import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section id="testimonials" className="bg-brand-paper-warm px-6 py-[90px]">
      <div className="mx-auto max-w-[760px] text-center lg:max-w-[860px]">
        <div className="font-display text-6xl leading-none text-brand-orange">
          &ldquo;
        </div>
        <p className="mt-2.5 font-display text-2xl leading-tight text-brand-ink sm:text-[28px] lg:text-[32px]">
          {testimonial.quote}
        </p>
        <div className="mt-7 flex flex-col items-center gap-1">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-brand-steel">
            Valued Client
          </span>
          <span className="font-display text-[18px] font-bold text-brand-ink sm:text-[20px]">
            Kenafric Industries
          </span>
        </div>
      </div>
    </section>
  );
}
