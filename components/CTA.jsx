import Button from "@/components/Button";

export default function CTA() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-ink p-10 text-center text-white md:p-16">
        <h2 className="font-display text-3xl font-medium md:text-4xl">
          Siap main minggu ini?
        </h2>
        <p className="text-base text-white/70">
          Ajak tiga temanmu, sisanya kami yang siapkan.
        </p>
        <Button variant="light" href="booking">
          Booking Sekarang
        </Button>
      </div>
    </section>
  );
}