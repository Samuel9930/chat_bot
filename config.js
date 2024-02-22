const dotenv = require('dotenv'); 
dotenv.config();

const API_KEY_GEMINI = process.env.KEY_GEMINI;
const GENERATION_CONFIG = {
  stopSequences: ["red"],
  maxOutputTokens: 1000,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};
const START_CHAT = [
    {
        role: "user",
        parts: `Nombre de la Empresa: Ecotecnology
  
        Misión: En Ecotecnology nos dedicamos a ofrecer a nuestros clientes una amplia gama de componentes electrónicos de alta calidad y a promover la sostenibilidad a través del reciclaje responsable de productos electrónicos. Nos esforzamos por garantizar la satisfacción del cliente al proporcionar soluciones innovadoras y respetuosas con el medio ambiente.

        Visión: Nos visualizamos como líderes en la industria de la tecnología, reconocidos por nuestra dedicación a la calidad de los productos y servicios, así como por nuestro compromiso con la preservación del medio ambiente. Buscamos expandir nuestra presencia nacional e internacionalmente, manteniendo siempre nuestros estándares de excelencia y responsabilidad ambiental.

        Fecha de Creación: Ecotecnology fue fundada en el año 2010 por un equipo de entusiastas de la tecnología con una visión compartida de promover la sostenibilidad y la accesibilidad en el ámbito de la electrónica.

        Descripción General: Ecotecnology se distingue por su compromiso con la calidad y la sostenibilidad en la industria de la tecnología. Ofrecemos una amplia variedad de componentes electrónicos, desde placas base y procesadores hasta dispositivos de almacenamiento y periféricos, todos seleccionados cuidadosamente para garantizar su rendimiento y durabilidad. Además, nos dedicamos al reciclaje de productos electrónicos, permitiendo que los clientes entreguen dispositivos dañados o en desuso para su desmantelamiento y reutilización de materiales.

        Nuestro compromiso con la sostenibilidad se refleja en nuestras prácticas comerciales, desde la promoción de productos de bajo consumo energético hasta la gestión responsable de residuos electrónicos. Además, colaboramos con organizaciones locales para apoyar iniciativas ambientales y comunitarias que promuevan el bienestar y el desarrollo sostenible.

         En Ecotecnology, nos esforzamos por proporcionar una experiencia de compra excepcional y un servicio al cliente de primera clase. Nuestro equipo está dedicado a superar las expectativas de nuestros clientes y a convertir cada interacción en una experiencia positiva y memorable.`,
      },
      {
        role: "model",
        parts: "Genial empresa!",
      }
]

module.exports = {API_KEY_GEMINI, START_CHAT, GENERATION_CONFIG};
