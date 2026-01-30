import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      passengers,
      serviceType,
      origin,
      destination,
      email,
      date,
      description,
      convenio,
      recommendedVehicle,
    } = await req.json();

    const apiUrlSend = process.env.NEXT_PUBLIC_URL_SEND || "";

    if (!email || !origin || !destination || !passengers) {
      return NextResponse.json(
        { error: "Datos incompletos para la cotización" },
        { status: 400 },
      );
    }

    const payload = {
      to: "contacto@tandemservicios.cl",
      subject: "Solicitud de Cotización – Tándem Servicios",
      text: `
        Se ha recibido una nueva solicitud de cotización.

        Correo: ${email}
        Pasajeros: ${passengers}
        Vehículo recomendado: ${recommendedVehicle || "No definido"}
        Tipo de servicio: ${serviceType}
        Origen: ${origin}
        Destino: ${destination}
        Fecha del servicio: ${date}
        Convenio: ${convenio || "Sin convenio"}

        Descripción:
        ${description || "Sin detalles adicionales"}
      `,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p>Se ha registrado una nueva cotización desde el sitio de <strong>Tándem Servicios</strong>.</p>

        <hr />

        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Número de pasajeros:</strong> ${passengers}</li>
          <li><strong>Vehículo recomendado:</strong> ${recommendedVehicle || "No definido"}</li>
          <li><strong>Tipo de servicio:</strong> ${serviceType}</li>
          <li><strong>Origen:</strong> ${origin}</li>
          <li><strong>Destino:</strong> ${destination}</li>
          <li><strong>Fecha del servicio:</strong> ${date}</li>
          <li><strong>Convenio:</strong> ${convenio || "Sin convenio"}</li>
        </ul>

        <p><strong>Descripción del servicio:</strong></p>
        <p>${description || "Sin detalles adicionales"}</p>
      `,
    };

    const response = await fetch(apiUrlSend, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: "Error enviando cotización", detail: error },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cotización enviada correctamente",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno", detail: String(error) },
      { status: 500 },
    );
  }
}
