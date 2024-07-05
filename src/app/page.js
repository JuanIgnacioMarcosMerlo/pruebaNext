import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';

const Home = () => {
  const user = {
    name: 'Juan Ignacio Marcos Merlo',
    description: 'Desarrollador web apasionado por la tecnología y el diseño. Con experiencia en React, Next.js y desarrollo full-stack, siempre busco aprender y mejorar mis habilidades. Me encanta trabajar en proyectos desafiantes y colaborar con otros para crear aplicaciones innovadoras. Tengo un profundo interés en las nuevas tecnologías y en cómo pueden ser utilizadas para resolver problemas complejos y mejorar la vida de las personas. Además, disfruto compartir mis conocimientos a través de charlas y talleres, y siempre estoy dispuesto a aprender de otros. En mi tiempo libre, me gusta explorar el mundo del diseño gráfico, jugar videojuegos y leer libros sobre ciencia ficción y fantasía. Estoy comprometido con el desarrollo de soluciones eficientes y elegantes, y creo firmemente en la importancia de una buena experiencia de usuario. Aspiro a seguir creciendo profesionalmente y contribuir a proyectos que tengan un impacto positivo en la sociedad.',
    interests: ['Desarrollo web', 'Diseño de interfaz', 'Tecnología', 'Música', 'Viajes', 'Deportes'],
  };

  return (
    <div>
      <Head>
        <title>Portafolio de {user.name}</title>
        <meta name="description" content={`Portafolio personal de ${user.name}`} />
      </Head>
      <Header name={user.name} />
      <main>
        <About description={user.description} />
        <Interests interests={user.interests} />
        <ContactForm />
      </main>
    </div>
  );
};

export default Home;
