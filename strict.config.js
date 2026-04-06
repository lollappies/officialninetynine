"use strict";

// ============================================================
// NINETYNINE — Site Configuration & Constants
// ============================================================

const SITE_CONFIG = {
  name: "Ninetynine",
  tagline: "Timeless Daily Essentials",
  email: "hello@ninetynine.id",
  whatsapp: "6281234567890",
  instagram: "@ninetynine.official",
  tiktok: "@ninetynine.official",
  shopee: "ninetynine.official",

  // Store locations
  stores: [
    { city: "Madiun",      address: "Jl. Pahlawan No. 45" },
    { city: "Ponorogo",    address: "Jl. Soekarno Hatta No. 12" },
    { city: "Jombang",     address: "Jl. KH. Wahid Hasyim No. 8" },
    { city: "Kediri",      address: "Jl. Dhoho No. 67" },
    { city: "Nganjuk",     address: "Jl. A. Yani No. 23" },
    { city: "Blitar",      address: "Jl. Merdeka No. 15" },
    { city: "Tulungagung", address: "Jl. WR. Supratman No. 9" },
    { city: "Sidoarjo",    address: "Ruko Delta Sari Blok C No. 5" },
  ],

  // Payment accounts
  payment: {
    BCA:     { bank: "BCA",     account: "1234567890", holder: "Ninetynine Store" },
    Mandiri: { bank: "Mandiri", account: "9876543210", holder: "Ninetynine Store" },
  },

  // Shipping options
  shipping: ["JNE Regular", "J&T Express", "Ambil di Toko"],

  // Vouchers
  vouchers: [
    { code: "NINETYNINE10", label: "Diskon 10%",    type: "percent", value: 10 },
    { code: "ONGKIRFREE",   label: "Gratis Ongkir", type: "shipping" },
    { code: "NEWMEMBER",    label: "Diskon 15rb",   type: "fixed",   value: 15000 },
  ],
};

// EmailJS configuration — fill in your own keys
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
