import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    // Conexión a la base de datos
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Consulta a la base de datos
    const [rows] = await connection.execute("SELECT * FROM estados_mexico");

    // Cerrar conexión
    await connection.end();

    // Respuesta con los datos (NextResponse.json los convierte a JSON)
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al obtener los modelos:", error);
    return NextResponse.json(
      { error: "Error al obtener los modelos" },
      { status: 500 },
    );
  }
}
