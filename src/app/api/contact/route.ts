import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, sector, workersCount, message } = body;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Παρακαλούμε συμπληρώστε τα υποχρεωτικά πεδία (Όνομα, Email, Τηλέφωνο)." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@ZILOLEX.gr";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const emailContent = `
        <h2>Νέο Αίτημα Εργατικού Δυναμικού από την Ιστοσελίδα</h2>
        <p><strong>Ονοματεπώνυμο:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Εταιρεία:</strong> ${escapeHtml(companyName || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Κλάδος:</strong> ${escapeHtml(sector || "-")}</p>
        <p><strong>Αριθμός Εργαζομένων:</strong> ${escapeHtml(workersCount || "-")}</p>
        <p><strong>Περιγραφή Αναγκών / Μήνυμα:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f6f8; padding: 12px; border-radius: 6px;">${escapeHtml(message || "-")}</p>
        <hr />
        <small>Αυτό το μήνυμα στάλθηκε αυτόματα από τη φόρμα επικοινωνίας της ιστοσελίδας ZILOLEX.</small>
      `;

      // In production with verified domain or onboarding@resend.dev during testing
      const fromEmail = process.env.RESEND_FROM_EMAIL || "ZILOLEX <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `[Νέο Αίτημα Προσωπικού] ${companyName ? companyName + " - " : ""}${fullName}`,
        html: emailContent,
      });
    } else {
      console.log("[Dev Mode - No RESEND_API_KEY configured yet] Received contact form submission:", {
        fullName,
        companyName,
        email,
        phone,
        sector,
        workersCount,
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
