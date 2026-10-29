import Card from "@/components/Card";

const features = [
  {
    title: "Lapangan kaca standar turnamen",
    description: "Rumput sintetis kualitas pro dan dinding kaca panoramik.",
  },
  {
    title: "Buka 06.00–24.00",
    description:
      "Main pagi sebelum kerja atau malam setelah kuliah, lampu LED terang.",
  },
  {
    title: "Pelatih bersertifikat",
    description: "Kelas privat dan grup untuk pemula sampai level kompetisi.",
  },
];

export default function Fitur() {
  return (
    <section
      id="kelas"
      className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
    >
      <h2 className="mb-12 text-center font-display text-3xl font-medium">
        Kenapa main di Baseline?
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3 className="font-display text-xl font-medium">
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed text-muted">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}