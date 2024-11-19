'use client'

import React from 'react';
import { PageWrapper } from '@/app/components/page-wrapper';
import styles from '@/app/styles/contact.module.scss'



export default function Contact() {
  return (

    <PageWrapper>
      <div className={styles.containerContacto}>
      <div className={styles.onlydesk}></div>

        <div className={styles.Card}>
          <div className={styles.ciudad}>New York</div>
          <div className={styles.email}><a href='mailto:newyork@monkeylabelpictures.com'>newyork@monkeylabelpictures.com</a></div>
          <div className={styles.persona}>
            <p>Alexis Estiz</p>
            <p>CO-Founder & Managing Director</p>
            <a href="mailto:alexis@monkeylabelpictures.com">alexis@monkeylabelpictures.com</a>
            </div>
        </div>
        <div className={styles.onlydesk}></div>

        <div className={styles.Card}>
          <div className={styles.ciudad}>Miami</div>
          <div className={styles.email}><a href='mailto:miami@monkeylabelpictures.com'>miami@monkeylabelpictures.com</a></div>
          <div className={styles.persona}>
            <p>Juan Irigoyen</p>
            <p>CO-Founder & Creative Director</p>
            <a href="mailto:chirola@monkeylabelpictures.com">chirola@monkeylabelpictures.com</a>
            </div>
        </div>

        <div className={styles.onlydesk}></div>

        <div className={styles.Card}>
          <div className={styles.ciudad}>Buenos Aires</div>
          <div className={styles.email}><a href='mailto:buenosaires@monkeylabelpictures.com'>buenosaires@monkeylabelpictures.com</a></div>
          <div className={styles.persona}>
            <p>Daniela Martinez</p>
            <p>Executive Producer</p>
            <a href="mailto:daniela@monkeylabelpictures.com">daniela@monkeylabelpictures.com</a>
            </div>
        </div>

      </div>
    </PageWrapper>
  );
}