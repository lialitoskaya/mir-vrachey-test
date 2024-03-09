"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from './page.module.css';
import { useState } from "react";
import { Modal1 } from './Modal1.js';
import { Modal2 } from './Modal2.js';




export default function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClick = (e: any) => {
    console.log(e.target.id)
    if(e.target.id === "1"){
      setShowModal1(!showModal1);
    };
    if(e.target.id === "2"){
      setShowModal2(!showModal2);
    };
  };

  return (
    <main className={`main`}>
      <img className={`background-image yellow`} src='/Vector 47.png'  alt=''></img>
      <img className={`background-image green`} src='/Vector 46.png'  alt=''></img>
      <img className={`background-image blue`} src='/Vector 45.png'  alt=''></img>
      <div className={`container`}>
        <section className={`section-myths`}>
          <img src='/Vector 48.png' className={`background-image`}  alt='icon person' />
          <h1 className={`header`}>ХОБЛ: мифы и реальность</h1>
            <div className={`info-item`}>
              <img src="/Group-2.png" alt="" className={`icon`} />
              <div className={`arrow`}>
                <p>ХОБЛ болеют <b>преимущественно мужчины?</b></p>
                <div className={`arrow-card`}>
                  <img src="/Vector 50.png" alt="" className={`arrow-image`} />
                  <img src="/Vector 49.png" alt="" className={`arrow-border`}  />
                </div>
              </div>
              {showModal1 ? <Modal1/> : <p className={`preview-text-info text-info`}>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...</p>}
              <button type="button" className={`btn btn-1`} id='1' onClick={handleClick}></button>
            </div>
            <div className={`info-item`}>
              <img src="/Group-3.png" alt="" className={`icon`} />      
              <div className={`arrow`}>
                <p><b>Опасно</b> не наличие заболевания, а обострения?</p>
                <div className={`arrow-card`}>
                  <img src="/Vector 50.png" alt="" className={`arrow-image`} />
                  <img src="/Vector 49.png" alt="" className={`arrow-border`}  />
              </div>   
              </div>  
              {showModal2 ? <Modal2/> :
              <p className={`preview-text-info text-info`}>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
              }
              <button type="button" className={`btn btn-2`} id='2' onClick={handleClick}></button>
            </div>
      </section>
      <section className={`section-therapy`}>
        <img src='/Vector 48.png' className={`background-image`}  alt=''></img>
        <h1 className={`header`}>Терапия ХОБЛ: что в фокусе?</h1>
        <div className={`gradient-info-item`}>
          Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
        </div>
        <div className={`therapy-strategy`}>
          <h2>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:</h2>
            <div className={`col-1`}>
              <div className={`therapy-item`}>
                <img src="/item1.png" alt="" className={`therapy-item-image`} />
                <header>Ингаляционный <span>антихолинергик</span></header>
                <p>Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов
                   <sup>1</sup>
                </p>
              </div>
              <div className={`therapy-item`}>
                <img src="/item2.png" alt="" className={`therapy-item-image`} />
                <header>Ингаляционный <br /><span>β2-агонист</span></header>
                <p>Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции</p>
              </div>
              <div className={`therapy-item`}>
                <img src="/item3.png" alt="" className={`therapy-item-image`} />
                <header>Ингаляционный <br /><span>глюкокортикостероид</span> (ИГКС)</header>
                <p>Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей</p>
              </div>
            </div>
            <div className="arrow-description">
              <img src="/Group 8 (1).png" alt="" />
              <img src="/Group 8 (1).png" alt="" />
            </div>
            <div className={`col-2`}>
              <div className={`therapy-description`}>
                <p>Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;<br />
                  Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.
                </p>
              </div>
              <div className={`therapy-description`}>
                <p>Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;<br />
                  Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
