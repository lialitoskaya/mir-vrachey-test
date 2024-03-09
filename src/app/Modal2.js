export const Modal2 = () => {
    return(
      <div className={`modal text-info`}>
        <p>
          <b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b>          
        </p>
        <p>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
        <h2>Пятилетняя выживаемость пациентов</h2>
        <div class="statistics">
          <div className="statistics-item">
            <div class="statistics-icon"><img src="/Рисунок4.png"></img></div>
            <header>45,5%</header>
            <p>пациентов с <b>сердечной недостаточностью</b> <sup>1</sup></p>
            <p className="text-sm">Популяционное когортное исследование (N=385)</p>
          </div>
          <div className="statistics-item">
            <div class="statistics-icon"><img src="/Group (2).png"></img></div>
            <header>55,3%</header>
            <p>пациентов с <b>инфарктом миокарда</b><sup>1</sup></p>
            <p className="text-sm">Апостериорный анализ когортного исследования (N=2887)</p>
          </div>
          <div className="statistics-item">
            <div class="statistics-icon"><img src="/Group.png"></img></div>
            <header>50,5%</header>
            <p>пациентов с <b>раком мочевого пузыря</b></p>
            <p className="text-sm">Исследование Национальной статистической службы (N=42642)</p>
          </div>
        </div>
      </div>
    )
}