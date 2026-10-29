import { supabaseServer } from "@/lib/supabase";

const SESI = ["pagi", "siang", "malam"];

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json(
      { error: "Data harus berformat JSON" },
      { status: 400 },
    );
  }

  const nama = String(body.nama ?? "").trim();
  const whatsapp = String(body.whatsapp ?? "").replace(/\D/g, "");
  const tanggal = String(body.tanggal ?? "");
  const sesi = String(body.sesi ?? "");

  if (nama.length < 2) {
    return Response.json({ error: "Nama minimal 2 huruf" }, { status: 400 });
  }
  if (whatsapp.length < 10 || whatsapp.length > 15) {
    return Response.json(
      { error: "Nomor WhatsApp tidak valid" },
      { status: 400 },
    );
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggal)) {
    return Response.json({ error: "Tanggal tidak valid" }, { status: 400 });
  }
  if (!SESI.includes(sesi)) {
    return Response.json(
      { error: "Pilih sesi pagi, siang, atau malam" },
      { status: 400 },
    );
  }

  const supabase = supabaseServer();
  const { error } = await supabase
    .from("bookings")
    .insert({ nama, whatsapp, tanggal, sesi });

    if (error?.code === "23505") {
  return Response.json(
    { error: "Sesi ini sudah dibooking. Pilih sesi atau tanggal lain." },
    { status: 409 },
    );
    }


  if (error) {
    console.error(error);
    return Response.json(
      { error: "Server sedang bermasalah, coba lagi nanti" },
      { status: 500 },
    );
  }

  return Response.json(
    { pesan: "Booking berhasil! Kami hubungi lewat WhatsApp." },
    { status: 201 },
  );
}
