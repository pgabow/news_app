import React from "react";
import routeMain from "./routes";

import "./style.scss";

import MotoImg from "assets/img/moto.jpg";

const Contacts = () => {
	return (
		<section className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="contact-tel-wrapp">
						<a
							className="contact-tel"
							href="tel:+74953022205"
							title="домашний номер из времен СССР заботливо перенесен на мой мобильный телефон"
						>
							+7 495 302 2205
						</a>
					</div>
					<div className="contact-name-wrapp">
						<div className="contact-name">
							Павел <br />
							Габов
						</div>
					</div>
					<div>
						<a
							className="contact-link"
							href="mailto:paul@gabow.ru?subject=Вперед через тернии к звездам"
							title="А прикольный же адрес почты?)"
						>
							paul@gabow.ru
						</a>
					</div>
					<div className="contact-title">
						JavaScript разработчик,
						<br />
						Возраст мне не помеха)
					</div>
					<div className="contact-subtitle">
						ES5, ES6, <span>React</span>
					</div>
				</div>
				<div className="col-md-6">
					<img
						src={MotoImg}
						className="img-contact"
						alt="Simple my moto"
						title="Просто один из моих мотоциклов"
					/>
				</div>
			</div>
		</section>
	);
};

export { routeMain };
export default Contacts;
