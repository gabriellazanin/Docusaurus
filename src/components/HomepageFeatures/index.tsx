import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serviços de Mecânica',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Na nossa oficina, destacamos profissionalismo, fiabilidade e garantia. Priorizamos a conveniência, com agendamentos 
         flexíveis, e garantimos rapidez sem comprometer a qualidade. Oferecemos serviços de alta qualidade a 
         preços justos, assegurando satisfação em cada visita.
      </>
    ),
  },
  {
    title: 'Trocas e Reparos de Pneus',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Realizamos troca de pneus com eficiência e qualidade, garantindo a segurança do seu veículo. Conte conosco para 
        um serviço rápido e profissional que atenda às suas necessidades de manutenção automotiva, 
        proporcionando uma condução tranquila e confiável.
      </>
    ),
  },
  {
    title: 'Pintura e Bate-chapas',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Oferecemos serviços especializados em reparação e pintura de carros, restaurando a estética e a integridade do seu veículo. 
        Nossa equipe qualificada está pronta para proporcionar resultados excepcionais, devolvendo-lhe um carro renovado e com acabamento impecável.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
