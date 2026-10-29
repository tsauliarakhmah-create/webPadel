"use client";

import { useState } from "react";

const inputClass =
  "rounded-xl border border-line bg-white px-4 py-3 text-base outline-none focus:border-ink";

export default function BookingForm() {
  const [status, setStatus] = useState("idle");
  const [pesan, setPesan] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const hasil = await res.json();

      if (res.ok) {
        setStatus("berhasil");
        setPesan(hasil.pesan);
        form.reset();
      } else {
        setStatus("gagal");
        setPesan(hasil.error);
      }
    } catch {
      setStatus("gagal");
      setPesan("Koneksi bermasalah, coba lagi");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl bg-surface p-6 md:p-8"
    >
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Nama</span>
        <input
          name="nama"
          required
          placeholder="Nama lengkap"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Nomor WhatsApp</span>
        <input
          name="whatsapp"
          type="tel"
          required
          placeholder="08xxxxxxxxxx"
          className={inputClass}
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Tanggal</span>
          <input name="tanggal" type="date" required className={inputClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Sesi</span>
          <select name="sesi" required className={inputClass}>
            <option value="pagi">Pagi · 06.00–12.00</option>
            <option value="siang">Siang · 12.00–17.00</option>
            <option value="malam">Malam · 17.00–24.00</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-ink px-6 py-3 font-display text-sm font-medium text-white disabled:opacity-50"
      >
        {status === "loading" ? "Mengirim..." : "Booking"}
      </button>

      {status === "berhasil" && (
        <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
          {pesan}
        </p>
      )}
      {status === "gagal" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {pesan}
        </p>
      )}
    </form>
  );
}
