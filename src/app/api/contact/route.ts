import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      audience = "employer",
      fullName,
      companyName,
      email,
      phone,
      sector,
      workersCount,
      startDate,
      housing,
      message,
      gdprConsent,
    } = body;

    // Strict validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Παρακαλούμε συμπληρώστε τα υποχρεωτικά πεδία (Όνομα, Email, Τηλέφωνο)." },
        { status: 400 }
      );
    }

    if (gdprConsent === false) {
      return NextResponse.json(
        { error: "Απαιτείται η συγκατάθεση στην επεξεργασία δεδομένων." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@zilolex.gr";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const emailContent = `
        <h2>Νέο Αίτημα από την Ιστοσελίδα ZILOLEX</h2>
        <p><strong>Ιδιότητα / Ενδιαφέρον:</strong> ${escapeHtml(audience)}</p>
        <p><strong>Ονοματεπώνυμο:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Επωνυμία Εταιρείας / Οργανισμού:</strong> ${escapeHtml(companyName || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Κλάδος:</strong> ${escapeHtml(sector || "-")}</p>
        <p><strong>Ειδικότητες / Αριθμός Ατόμων:</strong> ${escapeHtml(workersCount || "-")}</p>
        <p><strong>Επιθυμητή Ημερομηνία Έναρξης:</strong> ${escapeHtml(startDate || "-")}</p>
        <p><strong>Ανάγκη Στέγασης:</strong> ${escapeHtml(housing || "-")}</p>
        <p><strong>Μήνυμα / Σχόλια:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f6f8; padding: 12px; border-radius: 6px;">${escapeHtml(message || "-")}</p>
        <hr />
        <small>Αυτό το μήνυμα στάλθηκε αυτόματα από την ιστοσελίδα ZILOLEX.</small>
      `;

      const fromEmail = process.env.RESEND_FROM_EMAIL || "ZILOLEX <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `[Αίτημα Ιστοσελίδας - ${audience.toUpperCase()}] ${companyName ? companyName + " - " : ""}${fullName}`,
        html: emailContent,
      });
    } else {
      console.log("[Dev Mode - No RESEND_API_KEY] Contact form submission:", {
        audience,
        fullName,
        companyName,
        email,
        phone,
        sector,
        workersCount,
        startDate,
        housing,
        message,
        targetEmail: recipientEmail,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Το αίτημά σας καταχωρήθηκε επιτυχώς.",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλούμε δοκιμάστε ξανά." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
