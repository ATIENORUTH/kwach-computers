import { ArrowRight, BadgeCheck, HardDrive, Headset, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { site } from '../config/site';
import Reveal from './Reveal';

const trustIndicators = [
  { label: 'Quality-focused', icon: BadgeCheck },
  { label: 'Practical advice', icon: MessageCircle },
  { label: 'Customer-first support', icon: Headset },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Background: subtle grid + soft blue glow, echoing the flyer */}
      <div className="tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-royal-600/25 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {site.values.join(' • ')}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]"
            >
              Power Your Work.
              <br />
              <span className="text-brand-400">Upgrade Your Tech.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Reliable computers, accessories, repairs and practical IT solutions for students, professionals and
              businesses.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="btn-primary px-6 py-3.5">
              Explore Products
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-outline-light px-6 py-3.5">
              Talk to Us
            </a>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {trustIndicators.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Icon size={18} className="text-brand-400" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <Reveal delay={200} className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="relative">
        {/* Main image frame */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-glow">
          <img
            src="/images/hero-laptop.webp"
            alt="Laptop glowing in a dark workspace"
            width={1400}
            height={991}
            {...{ fetchpriority: 'high' }}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-300">{site.handle}</p>
            <p className="font-display text-lg font-semibold text-white sm:text-xl">{site.tagline}</p>
          </div>
        </div>

        {/* Floating cards */}
        <FloatingCard
          className="-left-3 top-6 sm:-left-8 sm:top-10"
          icon={<Wrench size={18} />}
          title="Repairs & Upgrades"
          subtitle="Diagnosis to fix"
        />
        <FloatingCard
          className="-right-2 top-1/2 [animation-delay:1.5s] sm:-right-8"
          icon={<HardDrive size={18} />}
          title="SSD & RAM"
          subtitle="Faster, smoother PCs"
        />
        <FloatingCard
          className="-bottom-6 right-6 hidden [animation-delay:3s] sm:flex"
          icon={<ShieldCheck size={18} />}
          title="Quality accessories"
          subtitle="Chargers, storage & more"
        />
      </div>
    </Reveal>
  );
}

interface FloatingCardProps {
  className: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function FloatingCard({ className, icon, title, subtitle }: FloatingCardProps) {
  return (
    <div
      className={`absolute flex animate-float items-center gap-3 rounded-xl border border-white/10 bg-navy-900/85 px-3.5 py-3 shadow-2xl backdrop-blur-md ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300" aria-hidden="true">
        {icon}
      </span>
      <span className="pr-1">
        <span className="block text-sm font-semibold text-white">{title}</span>
        <span className="block text-xs text-slate-400">{subtitle}</span>
      </span>
    </div>
  );
}
