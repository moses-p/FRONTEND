import { Card, Col, Row } from 'react-bootstrap'

// components
import { PageBreadcrumb } from '@/components'

const Pricing = () => {
	return (
		<>
			<PageBreadcrumb title="Pricing" subName="Pages" />
			<Row className="justify-content-center">
				<Col xxl={10}>
					<div className="text-center">
						<h3 className="mb-2">
							Our <b>Plans</b>
						</h3>
						<p className="text-muted mb-5">
							We have rooms and prices that fit your standards. Make
							your <br /> Accademic life a success with our Hostels.
						</p>
					</div>
					<Row className="justify-content-center my-3">
						<Col lg={3}>
							<Card className="rounded-top-0 border-3 border-end-0 border-start-0 border-bottom-0 border-top border-success">
								<Card.Body className="border-bottom p-3">
									<span className="badge bg-success-subtle rounded-1 text-success text-uppercase fs-12 fw-semibold px-2 py-1 mb-3">
										VIP Single rooms
									</span>
									<h2 className="mb-4 text-dark">
										$19 <span className="text-uppercase fs-14 ">/ Month</span>
									</h2>
									<ul className="list-unstyled d-grid gap-2">
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Self Contained
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											With AC
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											No Domain
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />1
											User
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Email Support
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											24x7 Support
										</li>
									</ul>
									<button className="btn btn-success w-100">Change Plan</button>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={3}>
							<Card className="rounded-top-0 border-3 border-end-0 border-start-0 border-bottom-0 border-top border-primary">
								<Card.Body className="border-bottom p-3">
									<span className="badge bg-primary-subtle rounded-1 text-primary text-uppercase fs-12 fw-semibold px-2 py-1 mb-3">
										Double Rooms
									</span>
									<h2 className="mb-4 text-dark">
										$29 <span className="text-uppercase fs-14 ">/ Month</span>
									</h2>
									<ul className="list-unstyled d-grid gap-2">
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											Self Contained
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											Master Bedroom 
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />2
											Domain
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											10 User
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											Email Support
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											24x7 Support
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											Sharing permission
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-primary me-2" />
											Admin Tools
										</li>
									</ul>
									<button className="btn btn-primary w-100">
										Available Hostels
									</button>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={3}>
							<Card className="rounded-top-0 border-3 border-end-0 border-start-0 border-bottom-0 border-top border-success">
								<Card.Body className="border-bottom p-3">
									<span className="badge bg-success-subtle rounded-1 text-success text-uppercase fs-12 fw-semibold px-2 py-1 mb-3">
										First Class Rooms
									</span>
									<h2 className="mb-4 text-dark">
										$39 <span className="text-uppercase fs-14 ">/ Month</span>
									</h2>
									<ul className="list-unstyled d-grid gap-2">
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											BathTabs
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Warm and cold water
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											10 Domain
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Unlimited Usage
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Email Support
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											24x7 Support
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Sharing permission
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Admin Tools
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Reporting and analytic
										</li>
										<li className="fs-15">
											<i className="ri-shield-check-fill text-success me-2" />
											Account Manager
										</li>
									</ul>
									<button className="btn btn-success w-100">Change Plan</button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default Pricing
