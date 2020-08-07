import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem (){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/40957164?s=460&u=34cb34a8f85e662ecafe8a4f1b8a949e9ada9d14&v=4" alt="Kardrêan Monte" />
            <div>
                <strong>Kardrêan Monte</strong>
                <span>Hacker ético</span>
            </div>
        </header>
        <p>
        Ética hacker é a expressão que descreve os valores morais e filosóficos na comunidade hacker.
        <br /> <br />
        O principio da cultura hacker e sua filosofia.
        </p>
        <footer>
            <p>
                preço/hora
                <strong>R$100,00</strong>
            </p>
            <button type="button"></button>
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </footer>
    </article>
    )
}

export default TeacherItem