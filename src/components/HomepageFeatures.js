import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/well.svg').default,
    description: (
      <>
        LiftStation.cloud was created to be easy to use.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Don't spend time with Excel Spreadsheets anymore. Once data is collected you can login and generate reports.
        Or if you would prefer, you can have them emailed to you automatically when they are ready.
      </>
    ),
  },
  {
    title: 'SCADA Integration',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        LiftStation.cloud has a Public API, so you can integrate your SCADA System.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
