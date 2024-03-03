import { FormInput, PageBreadcrumb } from '@/components'
// import {useParams} from 'react-router-dom';

import { Button, Card, Col, Nav, Row, Tab ,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import { BasicRadarOpt } from '../charts/ApexCharts/data'
import { useForm } from 'react-hook-form'

// component
// import { PageBreadcrumb } from '@/components'



// const Description = () => {
// 	const {id} = useParams();
// 	console.log(id)

// 	return <PageBreadcrumb title="hello" subName="Pages" />
// }

interface TabContentItem {
	id: string
	// icon: string;
	title: string
	text: string
	
}
 
const Description = () => {
	const methods = useForm({
		defaultValues: {
			password: 'password',
			statictext: 'email@example.com',
			color: '#727cf5',
		},
	})
	const {
		register,
		control,
		formState: { errors },
	} = methods
	const tabContents: TabContentItem[] = [
		{
			id: '1',
			title: 'Project Description',
			text: '<main class="contentpart__main">     <p class="normal"><b>MASTER ASSIGNMENT&nbsp;</b></p>     <p class="normal">The ThermoPlastic composites Application Center (TPAC) in the Netherlands, is an independent         innovation, research and development center that aims at the understanding of thermoplastic composites and their         manufacturing processes on an applied research level. The TPAC is focused on the application of thermoplastic         composites and related technology by developing proofs of concept for small and medium sized companies.</p>     <p class="normal">TPAC takes part in a project that aims at producing lighter vehicles, and as a part of that, the         overmolding process of thermoplastic composites is investigated. Data from our injection molding machine is to         be obtained, processed and used to train predictive models so that eventually the injection molding process can         be improved by implementing this model.</p>     <p class="normal">Two potential assignments are available based on your interests:</p>     <ol class="ordered">         <li>Data acquisition: obtaining data from our injection molding machine. Questions to be answered/tasks to be             performed are:<br>- Identification of which data is relevant to obtain for modeling?<br>‐ What data can be             extracted from the machine and how can it be obtained?<br>‐ Parametric study on relevant parameters for data             acquisition.<br>‐ Based on a predictive model how to control the process?</li>         <li>Data processing: Developing /improving a predictive model<br>‐ What data should be obtained from the machine             for developing a model?<br>‐ The development or improvement of a predictive model based on the available             data.<br>‐ Validation of the model based on sensor data acquired from the injection mold.</li>     </ol>     <p class="normal">We are looking for students that would like to apply their academic skills and knowledge in an         application driven environment. If you are interested or have questions, feel free to reach out.</p>     <p class="normal"><img class="wh-rtd__img"             src="/.uc/ica372e0c0102248f3102267de301a88a4992738e891d0301c000/xhfqg0eq3-4a1de2mgk2ow.jpg" alt=""             width="614" height="164"></p>     <h4 class="heading4">Contact persons:</h4>     <div class="widget widget--foldable  widget--embedded   main__contents--overdeeplinks "         data-instance="rPMENM0JZnwbcJTx0eqcdA">         <div class="widget__toggleheader foldablecontent foldablecontent--active">             <div class="foldablecontent__title">                 <div class="widget__contactperson__photo"><img                         src="/.uc/i5d0d278e01038ff7bd00f0b4d20346063ae6d9668ab20701c36400640080/picture.jpg"                         alt="Picture of dr. M.I. Abdul Rasheed (Mohammed)"                         srcset="/.uc/i5d0d278e01038ff7bd00f0b4d20346063ae6d9668ab20701c36400640080/picture.jpg 1x,/.uc/i6a91cabf01038ff7bd00f0b4d20346063ae6d9668ab20701c3c800c80080/picture.jpg 2x">                 </div>                 <div class="widget__contactperson__meta">                     <div class="widget__title  widget__title--belowphotos">dr. M.I. Abdul Rasheed (Mohammed) <span                             class="widget__title-subtitle">Assistant Professor</span></div>                 </div>             </div>         </div>     </div> </main>'		},
		{
			id: '2',
			title: 'Profile Needed',
			text: 'Responsibilities:<br/><br/><ul> <li>Design, develop, and deploy high-quality API solutions using MuleSoft Anypoint Platform.<br/></ul> </li><ul> <li>Collaborate with cross-functional teams to understand business requirements and translate them into technical designs.<br/></ul> </li><ul> <li>Build custom API connectors, transformations, and orchestrations to enable seamless data flow between systems.<br/></ul> </li><ul> <li>Implement best practices for API security, authentication, and authorization.<br/></ul> </li><ul> <li>Optimize API performance and scalability through efficient design and implementation.<br/></ul> </li><ul> <li>Develop automated tests and conduct thorough testing to ensure the reliability and quality of APIs.<br/></ul> </li><ul> <li>Monitor API performance and troubleshoot issues, providing timely resolutions.<br/>Document API designs, configurations, and development processes.<br/></ul> </li><ul> <li>Stay updated on emerging trends and technologies in API development and integration.<br/></ul> </li><ul> <li>Provide technical guidance and support to team members as needed.<br/></ul> </li>',
		},
		{
			id: '3',
			title: 'Application Process',
			text: 'Setting-Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
		},
	]
	return (
		<>
			<PageBreadcrumb title="Tabs" subName="Base UI" />
			<Row>

				<Col xl={100}>
					<Card>
						<Card.Body>
							<Tab.Container defaultActiveKey="Project Description" >
												<Nav variant="pills" justify className="bg-nav-pills mb-3" defaultActiveKey="Project Description">
					{(tabContents || []).map((tab, idx) => {
						
						return (
						
						<Nav.Item as="li" key={idx} >
							<Nav.Link as={Link} to="#" eventKey={tab.title}>
							{tab.title}
							</Nav.Link>
						</Nav.Item>
						)
					})}
					</Nav>

								<Tab.Content>
									{(tabContents || []).map((tab, idx) => {
										return (
											<Tab.Pane eventKey={tab.title} id={tab.id} key={idx}>
												<Row>
													<Col sm="12">
														{/* the text has to read the html dangersously */}
														<Col xl={12} className="position-relative  start-0">
															<Card>
																<Card.Body>
																	<p dangerouslySetInnerHTML={{ __html: tab.text }}></p>
																</Card.Body>
															</Card>
														</Col>
														{ tab.title === 'Profile Needed' &&
														<Col xl={12} className="position-relative ">
															<Card>
																<Card.Body>
																	<h4 className="header-title mb-3">Skill Requirements Map</h4>
																	<div>
																		
																		<ReactApexChart
																			className="apex-charts"
																			options={BasicRadarOpt}
																			height={500}
																			series={BasicRadarOpt.series}
																			type="radar"
																		/>
																	</div>
																</Card.Body>
															</Card>
														</Col>
														}

														{tab.title === 'Application Process' &&
															<><>
																<Form.Select className="mb-3">
																	<option defaultValue="selected">Choose your Major</option>
																	<option defaultValue="1">Software Engineer</option>
																	<option defaultValue="2">Computer Systems</option>
																	<option defaultValue="3">Big Data Analytics</option>
																	<option defaultValue="3">Cloud and Modile Software Engineering</option>
																	<option defaultValue="3">Artificiel Intelligence and robotization</option>
																	<option defaultValue="3">Computer Science</option>
																</Form.Select>
																<Form.Select className="mb-3">
																	<option defaultValue="selected">Choose your Minor</option>
																	<option defaultValue="1">Psychology</option>
																	<option defaultValue="2">Business Adminitration</option>
																	<option defaultValue="3">Communication</option>
																	<option defaultValue="3">International Studies</option>
																</Form.Select>
																<FormInput
																	label="GPA Score"
																	type="number"
																	name="number"
																	placeholder="Number placeholder"
																	containerClass="mb-3"
																	register={register}
																	key="number"
																	errors={errors}
																	control={control} /><>
																<FormInput
																	label="Resume"
																	type="file"
																	name="file"
																	containerClass="mb-3"
																	register={register}
																	key="file"
																	errors={errors}
																	control={control} />
																<FormInput
																	label="Project Proposal"
																	type="file"
																	name="file"
																	containerClass="mb-3"
																	register={register}
																	key="file"
																	errors={errors}
																	control={control} /></></><div className="d-grid gap-2">
																<Button variant="primary" className="btn-sm btn-primary">
																	Submit Application
																</Button>
															</div></>
														}
														
														
													</Col>
												</Row>
											</Tab.Pane>
										)
									})}
								</Tab.Content>
							</Tab.Container>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Description
