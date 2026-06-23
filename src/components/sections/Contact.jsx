import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import * as Sentry from '@sentry/react';
import { collectClientInfo } from '../../util/tracker';
import { contact, siteMeta } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Contact.css';

const Contact = () => {
	const [isSending, setIsSending] = useState(false);
	const form = useRef(null);

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!form.current.checkValidity()) {
			form.current.reportValidity();
			return;
		}

		setIsSending(true);

		try {
			const clientInfo = await collectClientInfo();
			const name = form.current.querySelector('[name="name"]').value.trim();
			const titleInput = form.current.querySelector('input[name="title"]');
			titleInput.value = name ? `Portfolio — ${name}` : 'Portfolio contact';

			Sentry.captureMessage('Contact form submitted', {
				level: 'info',
				tags: { action: 'submit_button', page: 'Contact' },
				extra: { timestamp: new Date().toISOString(), clientInfo },
			});

			const hiddenInput = form.current.querySelector('input[name="xcvbnm"]');
			hiddenInput.value = JSON.stringify(clientInfo);

			await emailjs.sendForm('service_lgnrtjc', 'template_u3jp70i', form.current, '3jA-R4-F_7Clhrjov');
			toast.success('Message sent — thank you!', { position: 'top-center' });
			form.current.reset();
		} catch (error) {
			console.error('FAILED...', error);
			toast.error('Something went wrong. Try email directly.', { position: 'top-center' });
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="section contact" id="contact">
			<div className="container">
				<Reveal>
					<div className="section__header">
						<p className="section__eyebrow">Contact</p>
						<h2 className="section__title">Let&apos;s build something precise.</h2>
					</div>
				</Reveal>

				<div className="contact__grid">
					<Reveal delay={80}>
						<div className="contact__intro">
							<p className="contact__availability">{contact.availability}</p>
							<p className="contact__lead">{contact.lead}</p>
							<p className="contact__language">{contact.language}</p>
							<div className="contact__actions">
								<a href={`mailto:${siteMeta.email}`} className="btn btn--primary">
									Email me
								</a>
								<a href="/Nguyen_Huu_Trung_Frontend_Developer.pdf" download className="btn btn--ghost">
									Download CV
								</a>
							</div>
						</div>
					</Reveal>

					<Reveal delay={160}>
						<form ref={form} onSubmit={sendEmail} className="contact__form">
							<p className="contact__form-title">Or send a message</p>
							<div className="contact__row">
								<label className="contact__field" htmlFor="contact-name">
									Name
									<input
										id="contact-name"
										type="text"
										name="name"
										autoComplete="name"
										required
										disabled={isSending}
									/>
								</label>
								<label className="contact__field" htmlFor="contact-email">
									Email
									<input
										id="contact-email"
										type="email"
										name="email"
										autoComplete="email"
										required
										disabled={isSending}
									/>
								</label>
							</div>
							<label className="contact__field" htmlFor="contact-message">
								Message
								<textarea
									id="contact-message"
									name="message"
									rows={5}
									required
									disabled={isSending}
									placeholder="Tell me about the role or project…"
								/>
							</label>
							<input type="hidden" name="title" />
							<input type="hidden" name="xcvbnm" />
							<button type="submit" className="btn btn--primary" disabled={isSending}>
								{isSending ? 'Sending…' : 'Send message'}
							</button>
						</form>
					</Reveal>
				</div>
			</div>

			<footer className="site-footer container">
				<p>
					© {new Date().getFullYear()} {siteMeta.name} · {siteMeta.title} · {siteMeta.location}
				</p>
			</footer>

			<ToastContainer autoClose={3000} theme="colored" />
		</section>
	);
};

export default Contact;
