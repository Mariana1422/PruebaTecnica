const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = {
    user: 'Mariana',
    password: 'Mariana12345',
    server: 'localhost',
    database: 'BD_Formulario',
    port: 1433,
    options: {
      encrypt: false,
    },
    authentication: {
      type: 'default',
      options: {
        userName: 'Mariana',
        password: 'Mariana12345',
      },
    },
  };

app.get('/api/empleados', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM empleados');
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la lista de empleados');
  } finally {
    sql.close();
  }
});

app.post('/api/empleados', async (req, res) => {
  const { nombre, email, sexo, id_area, descripcion, boletin } = req.body;
  try {
    await sql.connect(config);
    const result = await sql.query(
      `INSERT INTO empleados (nombre, email, sexo, id_area, descripcion, boletin) VALUES 
      ('${nombre}', '${email}', '${sexo}', ${id_area}, '${descripcion}', '${boletin}')`
    );
    res.json({ message: 'Empleado agregado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al agregar un nuevo empleado');
  } finally {
    sql.close();
  }
});

sql.connect(config)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo por el puerto:  ${PORT}`);
});