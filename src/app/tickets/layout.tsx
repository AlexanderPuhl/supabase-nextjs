import Nav from './Nav';
import TenantName from './TenantName';

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<section style={{ borderBottom: '1px solid gray' }}>
				<TenantName tenantName='Packt' />
				<Nav />
			</section>

			<section>{children}</section>
		</>
	);
}
