// src/Parcial2.js
import React, { useState } from 'react';
import './Parcial2.css'; // Importa el archivo CSS

const Parcial2 = () => {
  const [blogs, setBlogs] = useState([]);

  const obtenerBlogs = async () => {
    try {
      const respuesta = await fetch('https://api.vercel.app/blog');
      const datos = await respuesta.json();
      setBlogs(datos);
    } catch (error) {
      console.error('Error al obtener los blogs:', error);
    }
  };

  return (
    <div>
      <button onClick={obtenerBlogs}>Consultar</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>{blog.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parcial2;
