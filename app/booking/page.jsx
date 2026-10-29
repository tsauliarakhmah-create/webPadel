import BookingForm from "@/components/BookingForm";

export const metadata = { title: "Booking · Baseline Padel" };

const sessions = [
  { name: "Pagi", time: "06.00–12.00", price: "Rp150.000" },
  { name: "Siang", time: "12.00–17.00", price: "Rp200.000" },
  { name: "Malam", time: "17.00–24.00", price: "Rp250.000" },
];

export default function BookingPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
      <div className="flex flex-col gap-6">
        <h1 className="font-display text-4xl leading-tight font-medium md:text-5xl">
          Booking lapangan
        </h1>
        <p className="max-w-md text-base text-muted md:text-lg">
          Pilih tanggal dan sesi, isi nama dan nomor WhatsApp. Kami konfirmasi
          lewat WhatsApp.
        </p>
        <ul className="divide-y divide-line border-y border-line">
          {sessions.map((session) => (
            <li
              key={session.name}
              className="flex items-center justify-between py-4"
            >
              <div>
                <p className="font-display font-medium">{session.name}</p>
                <p className="text-sm text-muted">{session.time}</p>
              </div>
              <p className="font-display text-lg font-medium">
                {session.price}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <BookingForm />
    </main>
  );
}
