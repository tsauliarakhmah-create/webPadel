import Button from "@/components/Button";
import Card from "@/components/Card";

const sessions = [
  { name: "Pagi", time: "06.00–12.00", price: "Rp150.000" },
  { name: "Siang", time: "12.00–17.00", price: "Rp200.000" },
  { name: "Malam", time: "17.00–24.00", price: "Rp250.000", popular: true },
];

export default function Harga() {
  return (
    <section
      id="harga"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
    >
      <h2 className="mb-12 text-center font-display text-3xl font-medium">
        Harga per jam
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {sessions.map((session) => (
          <Card key={session.name} dark={session.popular}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-medium">
                {session.name}
              </h3>
              {session.popular && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Paling ramai
                </span>
              )}
            </div>
            <p
              className={`text-sm ${session.popular ? "text-white/70" : "text-muted"}`}
            >
              {session.time}
            </p>
            <p className="my-6 font-display text-4xl font-medium">
              {session.price}
            </p>
            <Button variant={session.popular ? "light" : "dark"} href="#kontak">
              Booking
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
