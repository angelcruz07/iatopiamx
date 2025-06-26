import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { Connection } from "mysql2";

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3307,
  });

  return connection;
}

async function getStateById(id: number) {
  const connection = await connectToDatabase(); // Espera la conexión

  try {
    // Consulta parametrizada (evita SQL injection)
    const [rows] = await connection.execute(
      "SELECT * FROM estados_mexico WHERE id = ?",
      [id],
    );

    // Si hay resultados, devuelve el primero; sino, null
    return Array.isArray(rows) ? rows[0] : null;
  } finally {
    // Cierra la conexión SIEMPRE (se ejecuta aunque falle el try)
    await connection.end();
  }
}

export async function GET(request: Request) {
  try {
    const state = await getStateById(1); // ¡Aquí faltaba el await!
    console.log("Datos de la DB:", state); // Verifica en consola

    if (!state) {
      return NextResponse.json(
        { success: false, error: "Estado no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: { state }, // Ahora state contiene los datos reales
      metadata: {
        timestamp: new Date().toISOString(),
        version: "1.0",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: "Error al obtener el estado" },
      { status: 500 },
    );
  }
}
