import { use } from 'react';
import { TicketComments } from './TicketComments';
import classes from './TicketDetails.module.css';

export default function TicketDetailsPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	return (
		<article className={classes.ticketDetails}>
			<header>
				<strong>#{id}</strong> - <strong className={classes.ticketStatusGreen}>Open</strong>
				<br />
				<small className={classes.authorAndDate}>
					Created by <strong>AuthorName</strong> at <time>December 10th 2025</time>
				</small>
				<h2>Ticket title should be here</h2>
			</header>

			<section>Some details about the ticket should be here.</section>

			<TicketComments />
		</article>
	);
}
