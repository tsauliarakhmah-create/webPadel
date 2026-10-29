import Button from "@/components/Button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-8">
      <nav className="flex items-center justify-between gap-4 py-6">
        <a href="/" className="font-display text-xl font-medium">
          Baseline Padel
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="/#lapangan">Lapangan</a>
          <a href="/#harga">Harga</a>
          <a href="/#kelas">Kelas</a>
          <a href="/#kontak">Kontak</a>
        </div>
        <Button href="/#harga">Booking</Button>
      </nav>
    </header>
  );
}