import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section id="lapangan" className="px-5 pb-5 md:px-8 md:pb-8">
      <div className="relative flex min-h-120 flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-12 text-center text-white md:min-h-160">
        <Image
          src="/images/hero.jpg"
          alt="Lapangan padel indoor dengan dinding kaca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex flex-col items-center gap-6">
          <h1 className="max-w-4xl font-display text-4xl leading-tight font-medium md:text-6xl">
            Main Padel, Kapan Pun Kamu Siap.
          </h1>
          <p className="max-w-xl text-base text-white/80 md:text-lg">
            Lapangan indoor dan outdoor di tengah kota, buka sampai tengah
            malam. Booking dalam satu menit.
          </p>
          <Button variant="light" href="#harga">
            Booking Lapangan
          </Button>
        </div>
      </div>
    </section>
  );
}
