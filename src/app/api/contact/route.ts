import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, projectName, email, message, company } = await request.json();

  // Honeypot: campo oculto que solo un bot completaría.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "ggabo93@gmail.com",
      replyTo: email,
      subject: projectName ? `Nuevo contacto: ${projectName}` : "Nuevo contacto desde el portfolio",
      text: `Nombre: ${name}\nProyecto: ${projectName || "—"}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
